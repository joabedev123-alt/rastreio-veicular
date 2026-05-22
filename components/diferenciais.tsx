"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  MapPin,
  Eye,
  Zap,
  Car,
  Users,
  Award,
  Shield,
} from "lucide-react";

const diferenciais = [
  {
    icon: Clock,
    title: "Rastreamento 24h",
    desc: "Monitoramento ininterrupto do seu veículo, todos os dias, sem pausas.",
    color: "#00FF88",
    delay: 0,
  },
  {
    icon: MapPin,
    title: "Localização em Tempo Real",
    desc: "Veja exatamente onde seu veículo está a qualquer momento, direto no app.",
    color: "#00FF88",
    delay: 0.1,
  },
  {
    icon: Eye,
    title: "Monitoramento Contínuo",
    desc: "Central de vigilância ativa monitorando seu patrimônio continuamente.",
    color: "#00FF88",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Suporte Rápido",
    desc: "Atendimento imediato via WhatsApp. Resposta em minutos, não em horas.",
    color: "#00FF88",
    delay: 0.3,
  },
  {
    icon: Car,
    title: "Carro e Moto",
    desc: "Proteção completa para qualquer tipo de veículo, leve ou pesado.",
    color: "#00FF88",
    delay: 0.4,
  },
  {
    icon: Users,
    title: "Família e Empresa",
    desc: "Soluções para frotas empresariais e proteção total da família.",
    color: "#00FF88",
    delay: 0.5,
  },
  {
    icon: Shield,
    title: "Proteção do Patrimônio",
    desc: "Seu bem protegido com tecnologia de ponta e equipe especializada.",
    color: "#00FF88",
    delay: 0.6,
  },
  {
    icon: Award,
    title: "Garantia R$ 20.000",
    desc: "Se não localizarmos, pagamos até R$ 20.000 pela Tabela FIPE.",
    color: "#00FF88",
    delay: 0.7,
    highlight: true,
  },
];

function DiferencialCard({
  item,
  index,
}: {
  item: (typeof diferenciais)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
      className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-500 ${
        item.highlight
          ? "glass border border-[#00FF88]/40 glow-green"
          : "glass border border-[#00FF88]/10 hover:border-[#00FF88]/30"
      }`}
      style={{ perspective: "1000px" }}
      whileHover={{
        y: -6,
        rotateX: 2,
        transition: { duration: 0.3 },
      }}
    >
      {/* Highlight shimmer */}
      {item.highlight && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "linear-gradient(135deg, #00FF88 0%, transparent 50%, #00C46A 100%)",
            }}
          />
        </div>
      )}

      {/* Number */}
      <div
        className="absolute top-4 right-4 text-[#00FF88]/10 text-4xl font-black"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
          item.highlight
            ? "bg-[#00FF88]/20 border border-[#00FF88]/40"
            : "bg-[#00FF88]/10 border border-[#00FF88]/20 group-hover:bg-[#00FF88]/15 group-hover:border-[#00FF88]/35"
        }`}
      >
        <item.icon
          className={`transition-all duration-300 ${
            item.highlight ? "text-[#00FF88]" : "text-[#00FF88]/70 group-hover:text-[#00FF88]"
          }`}
          size={22}
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <h3
        className="text-[#EDEDED] font-bold text-base mb-2 leading-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {item.title}
      </h3>
      <p className="text-[#EDEDED]/50 text-sm leading-relaxed">{item.desc}</p>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00FF88]/20 to-transparent group-hover:via-[#00FF88]/50 transition-all duration-500" />
    </motion.div>
  );
}

export function Diferenciais() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="diferenciais"
      className="relative py-24 px-6 overflow-hidden bg-[#050505]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            POR QUE ESCOLHER
          </p>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#EDEDED] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOSSOS{" "}
            <span className="gradient-text-green text-glow">DIFERENCIAIS</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
          <p className="text-[#EDEDED]/50 text-base mt-6 max-w-xl mx-auto leading-relaxed">
            Tecnologia avançada, suporte humano e garantia real. Tudo que seu
            patrimônio merece.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diferenciais.map((item, i) => (
            <DiferencialCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
