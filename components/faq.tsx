"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o rastreamento veicular?",
    a: "Um dispositivo GPS de alta precisão é instalado no veículo, enviando a localização em tempo real para nossa central de monitoramento. Você pode acompanhar pelo app ou solicitar informações diretamente com nossa equipe 24h.",
  },
  {
    q: "O rastreador funciona em toda região do Maranhão e Piauí?",
    a: "Sim. Nossa cobertura atende todo o Maranhão e Piauí, incluindo cidades do interior. O sinal é transmitido via rede celular e satélite, garantindo rastreamento mesmo em áreas de sinal fraco.",
  },
  {
    q: "O que é a garantia de R$ 20.000?",
    a: "Se nosso sistema não conseguir localizar seu veículo em até 90 dias após o registro do sinistro, você recebe 100% do valor do veículo conforme a Tabela FIPE vigente, limitado a R$ 20.000,00.",
  },
  {
    q: "O bloqueio remoto funciona como?",
    a: "Em caso de roubo ou furto, nossa equipe bloqueia o motor do veículo remotamente, impedindo sua partida. O processo é acionado após confirmação do boletim de ocorrência policial.",
  },
  {
    q: "Quanto tempo leva para instalar o rastreador?",
    a: "A instalação é rápida e não invasiva, realizada por nossos técnicos credenciados em até 1 hora. O dispositivo é discreto e não interfere no funcionamento do veículo.",
  },
  {
    q: "Tem mensalidade? Qual o valor?",
    a: "Sim, há uma mensalidade que cobre o monitoramento 24h, acesso ao app e suporte completo. Entre em contato pelo WhatsApp para conhecer os planos e valores disponíveis.",
  },
];

function FaqItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${
        open ? "border-[#00FF88]/30 glow-green" : "border-[#00FF88]/10 hover:border-[#00FF88]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[#EDEDED] font-semibold text-sm sm:text-base pr-4 leading-snug">
          {item.q}
        </span>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open
              ? "bg-[#00FF88] text-[#050505]"
              : "bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/20"
          }`}
        >
          {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 border-t border-[#00FF88]/10 pt-4">
              <p className="text-[#EDEDED]/60 text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#050505]">
      <div ref={ref} className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            DÚVIDAS FREQUENTES
          </p>
          <h2
            className="text-5xl sm:text-6xl font-black text-[#EDEDED] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PERGUNTAS{" "}
            <span className="gradient-text-green text-glow">FREQUENTES</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
