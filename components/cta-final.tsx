"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ArrowRight, Phone } from "lucide-react";

const WA_LINK = "https://wa.me/5586988615309";

export function CtaFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,59,31,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[300, 500, 700, 900].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-[#00FF88]/08"
            style={{ width: size, height: size }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 20 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        {/* Radar pulse */}
        <div className="absolute w-4 h-4 rounded-full bg-[#00FF88]/20">
          <div className="absolute inset-0 rounded-full bg-[#00FF88]/30 radar-pulse" />
          <div
            className="absolute inset-0 rounded-full bg-[#00FF88]/20 radar-pulse"
            style={{ animationDelay: "0.7s" }}
          />
        </div>
      </div>

      {/* Tech grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00FF88]/25 mb-6"
        >
          <Shield className="text-[#00FF88]" size={14} strokeWidth={2} />
          <span
            className="text-[#00FF88] text-xs tracking-[0.2em]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            PROTEÇÃO GARANTIDA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-black leading-none mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-[#EDEDED]">SEU PATRIMÔNIO</span>
          <span className="block gradient-text-green text-glow">
            É NOSSA MISSÃO
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#EDEDED]/60 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Proteção inteligente para quem{" "}
          <span className="text-[#00FF88]">não pode correr riscos.</span>{" "}
          Tecnologia avançada, monitoramento 24h e garantia real para seu
          veículo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta flex items-center gap-3 px-7 py-3.5 rounded-2xl text-base font-black cursor-pointer glow-green-strong pulse-green"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar Proteção Agora
            <ArrowRight size={20} />
          </a>
          <a
            href={`tel:+5586988615309`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border border-[#00FF88]/30 text-[#00FF88] hover:border-[#00FF88]/60 hover:bg-[#00FF88]/5 transition-all duration-300 cursor-pointer"
          >
            <Phone size={18} strokeWidth={1.5} />
            Ligar Agora
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#00FF88]/10"
        >
          {[
            { value: "98%", label: "Taxa de Recuperação" },
            { value: "24h", label: "Monitoramento" },
            { value: "R$20k", label: "Garantia FIPE" },
            { value: "90 dias", label: "Prazo de Localização" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-[#00FF88] text-2xl font-black text-glow mb-1"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-[#EDEDED]/40 text-xs tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
