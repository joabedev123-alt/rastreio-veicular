"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, AlertTriangle, Star } from "lucide-react";

const WA_LINK = "https://wa.me/5586988615309";

export function Garantia() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="garantia"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #001A0D 40%, #050505 100%)",
      }}
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[400, 550, 700].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-[#00FF88]/05"
            style={{
              width: size,
              height: size,
              animation: `spin-slow ${10 + i * 4}s linear infinite ${
                i % 2 === 0 ? "" : "reverse"
              }`,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            SEGURANÇA TOTAL
          </p>
          <h2
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-[#EDEDED] mb-4 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOSSA{" "}
            <span className="gradient-text-green text-glow">GARANTIA</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
        </motion.div>

        {/* Main guarantee card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Border gradient */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,136,0.4) 0%, transparent 40%, rgba(0,196,106,0.2) 100%)",
              padding: "1px",
            }}
          >
            <div className="absolute inset-[1px] rounded-3xl bg-[#0A1A0F]" />
          </div>

          <div
            className="relative z-10 p-5 sm:p-10 lg:p-14"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,59,31,0.3) 0%, rgba(5,5,5,0.8) 60%, rgba(0,20,10,0.4) 100%)",
            }}
          >
            {/* Seal icon */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Seal */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative flex-shrink-0"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 relative flex items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#00FF88]/30 border-dashed" />
                  {/* Inner ring */}
                  <div className="absolute inset-3 rounded-full border border-[#00FF88]/50" />
                  {/* Glow */}
                  <div className="absolute inset-6 rounded-full bg-[#00FF88]/10 glow-green" />
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Shield
                      className="text-[#00FF88] text-glow"
                      size={40}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#00FF88] fill-[#00FF88]"
                      size={14}
                    />
                  ))}
                </div>
                <h3
                  className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#EDEDED] leading-tight mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  PROTEJA SEU VEÍCULO AGORA.{" "}
                  <span className="gradient-text-green">
                    SE NÃO LOCALIZARMOS SEU BEM EM ATÉ 90 DIAS,
                  </span>{" "}
                  VOCÊ RECEBE{" "}
                  <span className="text-[#00FF88] text-glow">
                    100% DO VALOR DA TABELA FIPE
                  </span>
                </h3>
                <p className="text-[#EDEDED]/50 text-sm sm:text-base leading-relaxed mb-6">
                  Confiamos tanto na nossa tecnologia que colocamos seu
                  patrimônio em garantia. Indenização de até{" "}
                  <span className="text-[#00FF88] font-semibold">R$ 20.000,00</span>{" "}
                  conforme a Tabela FIPE vigente.
                </p>
              </div>
            </div>


          </div>
        </motion.div>

        {/* Alert card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 glass rounded-2xl p-6 border border-[#00FF88]/15 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="text-[#00FF88]" size={18} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[#EDEDED] font-semibold text-sm mb-1">
              Apenas para clientes ativos
            </p>
            <p className="text-[#EDEDED]/50 text-sm leading-relaxed">
              A garantia FIPE é válida para clientes com plano ativo e mensalidade
              em dia. Consulte os termos completos no ato da contratação.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 btn-cta px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer whitespace-nowrap"
          >
            Contratar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
