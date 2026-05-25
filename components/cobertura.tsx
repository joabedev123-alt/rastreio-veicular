"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Radio, Wifi } from "lucide-react";

const WA_LINK = "https://wa.me/5586988615309";

const cidades = [
  { name: "São Luís", state: "MA", x: "22%", y: "28%", main: true },
  { name: "Imperatriz", state: "MA", x: "38%", y: "42%", main: false },
  { name: "Timon", state: "MA", x: "52%", y: "35%", main: false },
  { name: "Caxias", state: "MA", x: "56%", y: "30%", main: false },
  { name: "Teresina", state: "PI", x: "58%", y: "38%", main: true },
  { name: "Parnaíba", state: "PI", x: "62%", y: "22%", main: false },
  { name: "Picos", state: "PI", x: "65%", y: "52%", main: false },
  { name: "Floriano", state: "PI", x: "60%", y: "62%", main: false },
];

export function Cobertura() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cobertura"
      className="relative py-10 sm:py-16 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #020A05 50%, #050505 100%)",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ÁREA DE ATUAÇÃO
          </p>
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#EDEDED] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOSSA{" "}
            <span className="gradient-text-green text-glow">COBERTURA</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
          <p className="text-[#EDEDED]/50 text-base mt-6 max-w-xl mx-auto">
            Atendemos com excelência em todo o Maranhão e Piauí, com expansão
            prevista para novos estados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] glass rounded-3xl border border-[#00FF88]/15 overflow-hidden">
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Radar sweep */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-80 h-80 origin-center"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 300deg, rgba(0,255,136,0.06) 360deg)",
                  }}
                />
                {/* Radar rings */}
                {[80, 140, 200, 260].map((r) => (
                  <div
                    key={r}
                    className="absolute rounded-full border border-[#00FF88]/10"
                    style={{ width: r * 2, height: r * 2 }}
                  />
                ))}
                {/* Center dot */}
                <div className="absolute w-3 h-3 rounded-full bg-[#00FF88] glow-green" />
              </div>

              {/* SVG map outline - stylized MA+PI shape */}
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.25 }}
              >
                {/* Maranhão */}
                <path
                  d="M 20 60 L 120 40 L 180 60 L 200 120 L 160 180 L 80 200 L 30 160 Z"
                  fill="rgba(0,255,136,0.1)"
                  stroke="#00FF88"
                  strokeWidth="1"
                />
                {/* Piauí */}
                <path
                  d="M 180 60 L 260 50 L 300 80 L 310 160 L 280 220 L 200 240 L 160 180 L 200 120 Z"
                  fill="rgba(0,196,106,0.08)"
                  stroke="#00C46A"
                  strokeWidth="1"
                />
                {/* Labels */}
                <text x="90" y="120" fill="#00FF88" fontSize="14" fontFamily="Orbitron" opacity="0.7">MA</text>
                <text x="230" y="140" fill="#00C46A" fontSize="14" fontFamily="Orbitron" opacity="0.7">PI</text>
              </svg>

              {/* City pins */}
              {cidades.map((cidade, i) => (
                <motion.div
                  key={cidade.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, type: "spring" }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: cidade.x, top: cidade.y }}
                >
                  <div className="relative flex flex-col items-center">
                    {cidade.main && (
                      <div className="absolute w-8 h-8 rounded-full bg-[#00FF88]/20 radar-pulse" />
                    )}
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        cidade.main
                          ? "bg-[#00FF88] border-[#00FF88] glow-green"
                          : "bg-[#00C46A]/80 border-[#00C46A]"
                      }`}
                    />
                    <div
                      className={`mt-1 px-2 py-0.5 rounded text-[9px] whitespace-nowrap glass ${
                        cidade.main
                          ? "text-[#00FF88] border-[#00FF88]/30"
                          : "text-[#EDEDED]/60 border-[#00FF88]/10"
                      }`}
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        borderWidth: 1,
                      }}
                    >
                      {cidade.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Header overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div
                  className="glass rounded-lg px-3 py-1.5 border border-[#00FF88]/20"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  <span className="text-[#00FF88] text-[9px] tracking-widest">
                    MAPA DE COBERTURA
                  </span>
                </div>
                <div className="flex items-center gap-1.5 glass rounded-lg px-3 py-1.5 border border-[#00FF88]/20">
                  <Radio className="text-[#00FF88]" size={10} />
                  <span
                    className="text-[#00FF88] text-[9px] tracking-widest"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    RADAR ATIVO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* State cards */}
            {[
              {
                state: "Maranhão",
                uf: "MA",
                cities: ["São Luís", "Imperatriz", "Caxias", "Timon", "Bacabal"],
                color: "#00FF88",
              },
              {
                state: "Piauí",
                uf: "PI",
                cities: ["Teresina", "Parnaíba", "Picos", "Floriano", "Campo Maior"],
                color: "#00C46A",
              },
            ].map((item) => (
              <div
                key={item.state}
                className="glass rounded-2xl p-4 sm:p-6 border border-[#00FF88]/15 hover:border-[#00FF88]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl border"
                    style={{
                      color: item.color,
                      borderColor: `${item.color}30`,
                      background: `${item.color}10`,
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {item.uf}
                  </div>
                  <div>
                    <h3
                      className="text-[#EDEDED] font-bold text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.state}
                    </h3>
                    <p className="text-[#EDEDED]/40 text-xs tracking-wider">
                      COBERTURA COMPLETA
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.cities.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        color: item.color,
                        background: `${item.color}10`,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      <MapPin size={10} className="inline mr-1" />
                      {city}
                    </span>
                  ))}
                  <span
                    className="px-3 py-1 rounded-full text-xs text-[#EDEDED]/40 border border-[#EDEDED]/10"
                  >
                    + toda região
                  </span>
                </div>
              </div>
            ))}

            {/* Signal info */}
            <div className="glass rounded-2xl p-4 sm:p-5 border border-[#00FF88]/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center flex-shrink-0">
                <Wifi className="text-[#00FF88]" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[#EDEDED] font-semibold text-sm mb-0.5">
                  Sinal em expansão
                </p>
                <p className="text-[#EDEDED]/50 text-xs leading-relaxed">
                  Cobertura crescendo para novos municípios. Consulte
                  disponibilidade na sua cidade.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 btn-cta px-4 py-2 rounded-lg text-xs font-bold cursor-pointer whitespace-nowrap"
              >
                Consultar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
