"use client";

import { useEffect, useRef, useCallback } from "react";

interface Ring {
  radius: number;
  speed: number;
  angle: number;
  nodes: Node[];
  opacity: number;
  lineWidth: number;
  dashed: boolean;
}

interface Node {
  angle: number;
  size: number;
  glow: boolean;
  pulse: number;
  pulseSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function CelestialOrrery() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const createParticle = useCallback((cx: number, cy: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.2 + Math.random() * 0.8;
    return {
      x: cx + (Math.random() - 0.5) * 600,
      y: cy + (Math.random() - 0.5) * 400,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 0.5 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.7,
      life: 0,
      maxLife: 120 + Math.random() * 180,
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const rings: Ring[] = [
      { radius: 80, speed: 0.008, angle: 0, opacity: 0.7, lineWidth: 1.5, dashed: false,
        nodes: [{ angle: 0, size: 5, glow: true, pulse: 0, pulseSpeed: 0.05 }] },
      { radius: 150, speed: 0.005, angle: 1.2, opacity: 0.5, lineWidth: 1, dashed: true,
        nodes: [
          { angle: 0, size: 4, glow: true, pulse: 0.5, pulseSpeed: 0.04 },
          { angle: Math.PI, size: 3, glow: false, pulse: 1, pulseSpeed: 0.03 },
        ] },
      { radius: 230, speed: 0.003, angle: 0.5, opacity: 0.4, lineWidth: 0.8, dashed: false,
        nodes: [
          { angle: 0, size: 5, glow: true, pulse: 0, pulseSpeed: 0.06 },
          { angle: (2 * Math.PI) / 3, size: 3, glow: false, pulse: 1, pulseSpeed: 0.04 },
          { angle: (4 * Math.PI) / 3, size: 4, glow: true, pulse: 0.5, pulseSpeed: 0.05 },
        ] },
      { radius: 320, speed: 0.002, angle: 2.1, opacity: 0.3, lineWidth: 0.6, dashed: true,
        nodes: [
          { angle: 0, size: 6, glow: true, pulse: 0, pulseSpeed: 0.03 },
          { angle: Math.PI / 2, size: 3, glow: false, pulse: 0.7, pulseSpeed: 0.05 },
          { angle: Math.PI, size: 4, glow: true, pulse: 0.3, pulseSpeed: 0.04 },
          { angle: (3 * Math.PI) / 2, size: 3, glow: false, pulse: 1, pulseSpeed: 0.06 },
        ] },
      { radius: 420, speed: 0.001, angle: 0.8, opacity: 0.2, lineWidth: 0.5, dashed: false,
        nodes: [
          { angle: 0, size: 5, glow: true, pulse: 0, pulseSpeed: 0.04 },
          { angle: (2 * Math.PI) / 5, size: 3, glow: false, pulse: 0.4, pulseSpeed: 0.03 },
          { angle: (4 * Math.PI) / 5, size: 4, glow: true, pulse: 0.8, pulseSpeed: 0.05 },
        ] },
      { radius: 530, speed: 0.0006, angle: 3.0, opacity: 0.15, lineWidth: 0.4, dashed: true,
        nodes: [
          { angle: 0, size: 4, glow: true, pulse: 0, pulseSpeed: 0.03 },
          { angle: Math.PI / 3, size: 3, glow: false, pulse: 0.5, pulseSpeed: 0.04 },
        ] },
    ];

    let particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push(createParticle(canvas.width / 2, canvas.height / 2));
    }

    let radarAngle = 0;

    const draw = (time: number) => {
      timeRef.current = time;
      const cx = canvas.width / 2;
      const cy = canvas.height * 0.48;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep background gradient
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.8);
      bg.addColorStop(0, "rgba(0, 60, 30, 0.15)");
      bg.addColorStop(0.4, "rgba(0, 15, 8, 0.08)");
      bg.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tech grid
      ctx.save();
      ctx.strokeStyle = "rgba(0, 255, 136, 0.04)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Radar sweep
      radarAngle += 0.008;

      ctx.save();
      ctx.translate(cx, cy);
      const sweepGrad = ctx.createLinearGradient(0, 0, 300, 0);
      sweepGrad.addColorStop(0, "rgba(0, 255, 136, 0.0)");
      sweepGrad.addColorStop(0.7, "rgba(0, 255, 136, 0.15)");
      sweepGrad.addColorStop(1, "rgba(0, 255, 136, 0.08)");

      ctx.rotate(radarAngle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 550, -0.5, 0, false);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 255, 136, 0.06)";
      ctx.fill();
      ctx.restore();

      // Radar ring pings
      const pingCount = 3;
      for (let p = 0; p < pingCount; p++) {
        const pingAngle = radarAngle - p * 0.15;
        const pingRadius = 60 + p * 150;
        const pingX = cx + Math.cos(pingAngle) * pingRadius;
        const pingY = cy + Math.sin(pingAngle) * pingRadius;
        const pingSize = 3 + Math.sin(time * 0.003 + p) * 2;
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00FF88";
        ctx.fillStyle = `rgba(0, 255, 136, ${0.6 - p * 0.15})`;
        ctx.beginPath();
        ctx.arc(pingX, pingY, pingSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Central core
      ctx.save();
      const coreSize = 12 + Math.sin(time * 0.002) * 3;
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreSize * 3);
      coreGlow.addColorStop(0, "rgba(0, 255, 136, 1)");
      coreGlow.addColorStop(0.3, "rgba(0, 196, 106, 0.6)");
      coreGlow.addColorStop(1, "rgba(0, 255, 136, 0)");
      ctx.shadowBlur = 40;
      ctx.shadowColor = "#00FF88";
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreSize * 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#00FF88";
      ctx.beginPath();
      ctx.arc(cx, cy, coreSize * 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Rings
      rings.forEach((ring) => {
        ring.angle += ring.speed;

        ctx.save();
        ctx.translate(cx, cy);

        // Ring circle
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(0, 255, 136, ${ring.opacity * 0.5})`;
        ctx.strokeStyle = `rgba(0, 255, 136, ${ring.opacity})`;
        ctx.lineWidth = ring.lineWidth;

        if (ring.dashed) {
          ctx.setLineDash([8, 12]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Holographic cross lines on largest rings
        if (ring.radius > 300) {
          ctx.strokeStyle = `rgba(0, 255, 136, ${ring.opacity * 0.3})`;
          ctx.lineWidth = 0.3;
          ctx.setLineDash([2, 20]);
          ctx.beginPath();
          ctx.moveTo(-ring.radius, 0);
          ctx.lineTo(ring.radius, 0);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, -ring.radius);
          ctx.lineTo(0, ring.radius);
          ctx.stroke();
        }

        // Nodes on rings
        ring.nodes.forEach((node) => {
          node.pulse += node.pulseSpeed;
          const nodeAngle = node.angle + ring.angle;
          const nx = Math.cos(nodeAngle) * ring.radius;
          const ny = Math.sin(nodeAngle) * ring.radius;
          const pulseScale = 1 + Math.sin(node.pulse) * 0.3;
          const nodeSize = node.size * pulseScale;

          if (node.glow) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = "#00FF88";
          } else {
            ctx.shadowBlur = 6;
            ctx.shadowColor = "#00C46A";
          }

          const nodeGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, nodeSize * 2);
          nodeGrad.addColorStop(0, "rgba(0, 255, 136, 0.9)");
          nodeGrad.addColorStop(1, "rgba(0, 196, 106, 0)");
          ctx.fillStyle = nodeGrad;
          ctx.beginPath();
          ctx.arc(nx, ny, nodeSize * 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = node.glow ? "#00FF88" : "#00C46A";
          ctx.beginPath();
          ctx.arc(nx, ny, nodeSize * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Connection lines to center
          if (node.glow && ring.radius < 300) {
            ctx.strokeStyle = `rgba(0, 255, 136, ${ring.opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.setLineDash([4, 8]);
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(nx, ny);
            ctx.stroke();
          }
        });

        ctx.restore();
      });

      // Floating particles
      particles = particles.map((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const alpha = lifeRatio < 0.1
          ? lifeRatio * 10 * p.opacity
          : lifeRatio > 0.8
          ? (1 - lifeRatio) * 5 * p.opacity
          : p.opacity;

        ctx.save();
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#00FF88";
        ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife) {
          return createParticle(cx, cy);
        }
        return p;
      });

      // Horizontal scan lines
      const scanY = ((time * 0.05) % canvas.height);
      const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGrad.addColorStop(0, "rgba(0, 255, 136, 0)");
      scanGrad.addColorStop(0.5, "rgba(0, 255, 136, 0.04)");
      scanGrad.addColorStop(1, "rgba(0, 255, 136, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 40, canvas.width, 80);

      // Holographic data lines on sides
      ctx.save();
      ctx.strokeStyle = "rgba(0, 255, 136, 0.15)";
      ctx.lineWidth = 0.5;
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const lx = 40 + i * 25;
        const ly = 100 + i * 60 + Math.sin(time * 0.001 + i) * 20;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(lx + 80, ly);
        ctx.stroke();

        const rx = canvas.width - 40 - i * 25;
        const ry = 100 + i * 60 + Math.cos(time * 0.001 + i) * 20;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 80, ry);
        ctx.stroke();
      }
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
