"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";

const WA_LINK = "https://wa.me/5586988615309";

const planos = [
  {
    nome: "Bronze",
    cor: "#CD7F32",
    corBg: "rgba(205,127,50,0.08)",
    corBorder: "rgba(205,127,50,0.25)",
    corGlow: "rgba(205,127,50,0.15)",
    icone: "🥉",
    descricao: "Proteção essencial para o seu veículo",
    destaque: false,
    recursos: [
      "Rastreamento GPS em tempo real",
      "Aplicativo mobile",
      "Histórico de rotas (7 dias)",
      "Alertas de rota",
      "Suporte via WhatsApp",
      "Monitoramento básico",
    ],
    nao: ["Bloqueio remoto", "Central 24h", "Garantia FIPE"],
    delay: 0,
  },
  {
    nome: "Prata",
    cor: "#C0C0C0",
    corBg: "rgba(192,192,192,0.08)",
    corBorder: "rgba(192,192,192,0.30)",
    corGlow: "rgba(192,192,192,0.15)",
    icone: "🥈",
    descricao: "Segurança completa para você e sua família",
    destaque: false,
    recursos: [
      "Rastreamento GPS em tempo real",
      "Aplicativo mobile",
      "Histórico de rotas (30 dias)",
      "Alertas de rota",
      "Suporte via WhatsApp",
      "Bloqueio remoto",
      "Monitoramento 24h",
      "Alertas automáticos",
    ],
    nao: ["Garantia FIPE"],
    delay: 0.1,
  },
  {
    nome: "Ouro",
    cor: "#FFD700",
    corBg: "rgba(255,215,0,0.08)",
    corBorder: "rgba(255,215,0,0.35)",
    corGlow: "rgba(255,215,0,0.20)",
    icone: "🥇",
    descricao: "Proteção máxima com garantia FIPE",
    destaque: true,
    recursos: [
      "Rastreamento GPS em tempo real",
      "Aplicativo mobile",
      "Histórico de rotas (ilimitado)",
      "Alertas de rota",
      "Suporte prioritário 24h",
      "Bloqueio remoto",
      "Central de monitoramento 24h",
      "Alertas automáticos",
      "Garantia FIPE até R$ 20.000",
      "Recuperação de veículo",
      "Serviço de reboque incluso",
    ],
    nao: [],
    delay: 0.2,
  },
];

export function Planos() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-3"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ESCOLHA SEU PLANO
          </p>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#EDEDED] mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOSSAS{" "}
            <span className="gradient-text-green text-glow">OFERTAS</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
          <p className="text-[#EDEDED]/50 text-sm mt-4 max-w-lg mx-auto">
            Planos pensados para cada necessidade. Escolha o que melhor protege o seu patrimônio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {planos.map((plano) => (
            <motion.div
              key={plano.nome}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: `0 20px 60px ${plano.corGlow}`,
                transition: { duration: 0.25 },
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: plano.delay, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
              style={{
                background: plano.corBg,
                border: `1px solid ${plano.corBorder}`,
              }}
            >
              {/* Destaque badge */}
              {plano.destaque && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-0 left-0 right-0 py-1.5 text-center text-[10px] font-black tracking-widest flex items-center justify-center gap-1.5"
                  style={{
                    background: "linear-gradient(90deg, #FFD700, #FFA500)",
                    color: "#050505",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  <Star size={10} fill="currentColor" />
                  MAIS POPULAR
                  <Star size={10} fill="currentColor" />
                </motion.div>
              )}

              {/* Shimmer top border */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${plano.cor}, transparent)`,
                }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: plano.delay }}
              />

              <div className={`p-5 sm:p-6 flex flex-col flex-1 ${plano.destaque ? "pt-9" : ""}`}>
                {/* Icon + Nome */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-3xl">{plano.icone}</span>
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-black leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", color: plano.cor }}
                    >
                      {plano.nome}
                    </h3>
                    <p className="text-[#EDEDED]/40 text-[11px] mt-0.5">{plano.descricao}</p>
                  </div>
                </div>

                {/* Divisor */}
                <div
                  className="h-px w-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${plano.cor}60, transparent)` }}
                />

                {/* Recursos */}
                <div className="flex flex-col gap-2 mb-5 flex-1">
                  {plano.recursos.map((r, i) => (
                    <motion.div
                      key={r}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: plano.delay + 0.05 * i, duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plano.cor}25`, border: `1px solid ${plano.cor}50` }}
                      >
                        <Check size={9} style={{ color: plano.cor }} strokeWidth={3} />
                      </div>
                      <span className="text-[#EDEDED]/75 text-xs">{r}</span>
                    </motion.div>
                  ))}
                  {plano.nao.map((r) => (
                    <div key={r} className="flex items-center gap-2 opacity-25">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border border-[#EDEDED]/20">
                        <span className="text-[#EDEDED] text-[8px] font-bold">✕</span>
                      </div>
                      <span className="text-[#EDEDED]/40 text-xs line-through">{r}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-xl text-xs font-black text-center cursor-pointer block"
                  style={{
                    background: plano.destaque
                      ? "linear-gradient(135deg, #FFD700, #FFA500)"
                      : `${plano.cor}15`,
                    color: plano.destaque ? "#050505" : plano.cor,
                    border: `1px solid ${plano.corBorder}`,
                  }}
                >
                  Solicitar plano {plano.nome}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#EDEDED]/25 text-xs mt-7"
        >
          Todos os planos incluem instalação do rastreador. Entre em contato para conhecer os valores.
        </motion.p>
      </div>
    </section>
  );
}
