"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Power, Eye, Search, Play, Pause, Volume2, VolumeX, Truck, Shield } from "lucide-react";
import Image from "next/image";

const WA_LINK = "https://wa.me/5586988615309";

const servicos = [
  {
    icon: MapPin,
    title: "Rastreamento Veicular",
    desc: "Localização em tempo real e monitoramento 24h para seu veículo.",
    features: ["GPS em tempo real", "Histórico de rotas", "App mobile", "Alertas de rota"],
    image: "/rastreio8.jpeg",
    delay: 0,
  },
  {
    icon: Power,
    title: "Bloqueio Remoto",
    desc: "Em caso de roubo ou furto, bloqueie o motor do veículo remotamente com um toque. Controle total na palma da sua mão.",
    features: ["Bloqueio instantâneo", "Desbloqueio remoto", "Log de ações", "Segurança anti-hack"],
    image: "/rastreio1.jpeg",
    delay: 0.15,
  },
  {
    icon: Eye,
    title: "Monitoramento 24h",
    desc: "Central de monitoramento operando 24 horas por dia, 7 dias por semana. Nossa equipe especializada cuida do seu patrimônio enquanto você dorme.",
    features: ["Central 24/7", "Alertas automáticos", "Equipe especializada", "Relatórios diários"],
    image: "", // Not used since video is present
    video: "/maruicliente.mp4",
    delay: 0.3,
  },
  {
    icon: Search,
    title: "Serviço de Reboque",
    desc: "Se precisar disponibilizamos Serviço de Reboque também.",
    features: ["Acionamento imediato", "Parceria policial", "Taxa 98% recuperação", "Sem burocracia"],
    image: "", // Not used since video is present
    video: "/maruireboque.mp4",
    delay: 0.45,
  },
  {
    icon: Truck,
    title: "Frotista",
    desc: "Controle, gestão e acompanhamento completo para sua frota.",
    features: ["Gestão inteligente", "Monitoramento em lote", "Relatórios gerenciais", "Otimização de custos"],
    image: "/rastreio8.jpeg",
    delay: 0.6,
  },
  {
    icon: Shield,
    title: "Garantia Veicular",
    desc: "Mais segurança, proteção e tranquilidade para o cliente.",
    features: ["Segurança total", "Proteção garantida", "Tranquilidade", "Indenização FIPE"],
    image: "/rastreio1.jpeg",
    delay: 0.75,
  },
];

function ServicoCard({
  servico,
  index,
}: {
  servico: (typeof servicos)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: servico.delay, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
    >
      {/* Image */}
      <div
        className={`relative rounded-3xl overflow-hidden h-80 lg:h-[420px] group ${
          isEven ? "" : "lg:col-start-2"
        }`}
      >
        {(servico as any).video ? (
          <>
            <video
              ref={videoRef}
              src={(servico as any).video}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
            {/* Custom Video Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full glass-dark border border-[#00FF88]/30 flex items-center justify-center text-[#00FF88] hover:bg-[#00FF88]/20 hover:scale-110 transition-all cursor-pointer"
                aria-label={isPlaying ? "Pausar" : "Tocar"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full glass-dark border border-[#00FF88]/30 flex items-center justify-center text-[#00FF88] hover:bg-[#00FF88]/20 hover:scale-110 transition-all cursor-pointer"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </>
        ) : (
          <Image
            src={servico.image}
            alt={servico.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/5 to-transparent" />

        {/* Tech overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div
              className="glass rounded-lg px-3 py-1.5 border border-[#00FF88]/20"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-[#00FF88] text-[9px] tracking-widest">
                {String(index + 1).padStart(2, "0")} / SERVIÇO
              </span>
            </div>
            <div className="flex items-center gap-1.5 glass rounded-lg px-3 py-1.5 border border-[#00FF88]/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#00FF88] opacity-75" />
                <span className="relative flex rounded-full h-1.5 w-1.5 bg-[#00FF88]" />
              </span>
              <span className="text-[#00FF88] text-[9px] tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                ATIVO
              </span>
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#00FF88]/40 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00FF88]/40 rounded-br" />
          <div className="absolute top-12 left-4 w-6 h-6 border-l border-t border-[#00FF88]/20" />
          <div className="absolute top-12 right-4 w-6 h-6 border-r border-t border-[#00FF88]/20" />
        </div>

        {/* Scan line effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.015) 2px, rgba(0,255,136,0.015) 4px)",
          }}
        />
      </div>

      {/* Content */}
      <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center mb-6 glow-green">
          <servico.icon
            className="text-[#00FF88]"
            size={26}
            strokeWidth={1.5}
          />
        </div>

        <h3
          className="text-4xl sm:text-5xl font-black text-[#EDEDED] mb-4 leading-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {servico.title}
        </h3>

        <p className="text-[#EDEDED]/60 text-base leading-relaxed mb-8">
          {servico.desc}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {servico.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] flex-shrink-0" />
              <span className="text-[#EDEDED]/60 text-sm">{feat}</span>
            </div>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#00FF88]/30 text-[#00FF88] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#00FF88]/5 hover:border-[#00FF88]/60 transition-all duration-300 cursor-pointer"
        >
          Solicitar este serviço
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

export function Servicos() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="servicos"
      className="relative py-16 px-6 overflow-hidden bg-[#050505]"
    >
      {/* Subtle side glows */}
      <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-[#00FF88]/03 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-[#00FF88]/03 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            O QUE OFERECEMOS
          </p>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#EDEDED] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOSSOS{" "}
            <span className="gradient-text-green text-glow">SERVIÇOS</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
        </motion.div>

        {/* Services list */}
        <div className="flex flex-col gap-16">
          {servicos.map((servico, i) => (
            <ServicoCard key={servico.title} servico={servico} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
