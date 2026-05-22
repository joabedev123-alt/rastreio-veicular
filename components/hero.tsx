"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  MapPin,
  Activity,
  Wifi,
  ChevronDown,
  Lock,
  Satellite,
  AlertCircle,
} from "lucide-react";
import { CelestialOrrery } from "./celestial-orrery";

const WA_LINK = "https://wa.me/5586988615309";

function useCounter(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00FF88]/20">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF88]" />
      </span>
      <span
        className="text-[#00FF88] text-xs font-semibold tracking-[0.2em]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        SISTEMA ATIVO
      </span>
    </div>
  );
}

function FloatingCard({
  icon: Icon,
  label,
  value,
  delay,
  className,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`glass rounded-2xl p-4 border border-[#00FF88]/15 backdrop-blur-xl float-animation ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center border border-[#00FF88]/20">
          <Icon className="text-[#00FF88]" size={18} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[#EDEDED]/50 text-[10px] tracking-[0.15em] uppercase">
            {label}
          </p>
          <p
            className="text-[#00FF88] text-sm font-bold"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [started, setStarted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const vehicles = useCounter(1847, 2000, started);
  const recovery = useCounter(98, 2000, started);
  const uptime = useCounter(99, 2000, started);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <CelestialOrrery />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60 pointer-events-none" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <LiveBadge />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 tracking-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-[#EDEDED]">PROTEJA</span>
                <span className="block gradient-text-green text-glow">
                  SEU VEÍCULO
                </span>
                <span className="block text-[#EDEDED]/80 text-5xl sm:text-6xl lg:text-7xl">
                  COM TECNOLOGIA
                </span>
                <span className="block text-[#00FF88] text-4xl sm:text-5xl lg:text-6xl text-glow">
                  DE RASTREAMENTO 24H
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#EDEDED]/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Localização em tempo real, monitoramento contínuo e{" "}
              <span className="text-[#00FF88]">
                recuperação garantida do seu patrimônio.
              </span>{" "}
              Tecnologia militar aplicada à segurança veicular.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold cursor-pointer glow-green-strong pulse-green"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold border border-[#00FF88]/30 text-[#00FF88] hover:border-[#00FF88]/60 hover:bg-[#00FF88]/5 transition-all duration-300 cursor-pointer"
              >
                Ver Serviços
                <ChevronDown size={16} />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              {[
                { icon: Shield, text: "Garantia FIPE" },
                { icon: Lock, text: "Bloqueio Remoto" },
                { icon: Satellite, text: "GPS Satelital" },
                { icon: AlertCircle, text: "Alerta Imediato" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-[#EDEDED]/50 text-xs"
                >
                  <Icon className="text-[#00FF88]" size={13} strokeWidth={2} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Stats + floating cards */}
          <div className="flex-shrink-0 w-full lg:w-80 xl:w-96 flex flex-col gap-4">
            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass rounded-2xl p-6 border border-[#00FF88]/15"
            >
              <p
                className="text-[#00FF88]/60 text-[10px] tracking-[0.25em] mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                DADOS EM TEMPO REAL
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p
                    className="text-[#00FF88] text-3xl font-black text-glow"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {vehicles.toLocaleString()}
                  </p>
                  <p className="text-[#EDEDED]/40 text-[10px] tracking-wider mt-1">
                    VEÍCULOS
                  </p>
                </div>
                <div className="text-center border-x border-[#00FF88]/10">
                  <p
                    className="text-[#00FF88] text-3xl font-black text-glow"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {recovery}%
                  </p>
                  <p className="text-[#EDEDED]/40 text-[10px] tracking-wider mt-1">
                    RECUPERADOS
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-[#00FF88] text-3xl font-black text-glow"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {uptime}%
                  </p>
                  <p className="text-[#EDEDED]/40 text-[10px] tracking-wider mt-1">
                    UPTIME
                  </p>
                </div>
              </div>
            </motion.div>

            <FloatingCard
              icon={Activity}
              label="Monitoramento"
              value="ATIVO 24/7"
              delay={0.6}
            />
            <FloatingCard
              icon={MapPin}
              label="Cobertura"
              value="MA + PI"
              delay={0.75}
            />
            <FloatingCard
              icon={Wifi}
              label="Sinal GPS"
              value="FORTE"
              delay={0.9}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#EDEDED]/30 text-xs tracking-[0.2em]">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-[#00FF88]/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
