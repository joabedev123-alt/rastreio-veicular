"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    nome: "Carlos Eduardo",
    cidade: "São Luís, MA",
    texto:
      "Meu carro foi roubado e em menos de 2 horas a equipe já tinha localizado. Serviço excepcional, recomendo a todos!",
    estrelas: 5,
    delay: 0,
  },
  {
    nome: "Ana Paula",
    cidade: "Teresina, PI",
    texto:
      "Instalação rápida e atendimento incrível. Tenho total tranquilidade sabendo que meu veículo está monitorado 24h.",
    estrelas: 5,
    delay: 0.1,
  },
  {
    nome: "Marcos Vinícius",
    cidade: "Imperatriz, MA",
    texto:
      "Uso o serviço para minha frota de 8 veículos. Relatórios completos e suporte sempre disponível. Vale cada centavo.",
    estrelas: 5,
    delay: 0.2,
  },
  {
    nome: "Fernanda Lima",
    cidade: "Parnaíba, PI",
    texto:
      "Já tentaram roubar meu carro duas vezes. Com o bloqueio remoto da Marauí, não conseguiram ir a lugar nenhum.",
    estrelas: 5,
    delay: 0.3,
  },
  {
    nome: "Roberto Alves",
    cidade: "Caxias, MA",
    texto:
      "Atendimento humanizado, equipe sempre disponível no WhatsApp. Me sinto seguro onde quer que eu vá.",
    estrelas: 5,
    delay: 0.4,
  },
  {
    nome: "Juliana Costa",
    cidade: "Picos, PI",
    texto:
      "Indiquei para toda minha família. O app é fácil de usar e a localização em tempo real é muito precisa.",
    estrelas: 5,
    delay: 0.5,
  },
];

function DepoimentoCard({ item }: { item: (typeof depoimentos)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
      className="glass rounded-2xl p-6 border border-[#00FF88]/10 hover:border-[#00FF88]/25 transition-all duration-300 flex flex-col gap-4"
    >
      {/* Quote icon */}
      <Quote className="text-[#00FF88]/30" size={28} strokeWidth={1.5} />

      {/* Text */}
      <p className="text-[#EDEDED]/70 text-sm leading-relaxed flex-1">
        "{item.texto}"
      </p>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(item.estrelas)].map((_, i) => (
          <Star key={i} className="text-[#00FF88] fill-[#00FF88]" size={13} />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#00FF88]/10">
        <div className="w-9 h-9 rounded-full bg-[#00FF88]/15 border border-[#00FF88]/25 flex items-center justify-center flex-shrink-0">
          <span
            className="text-[#00FF88] text-xs font-black"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {item.nome.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-[#EDEDED] text-sm font-semibold">{item.nome}</p>
          <p className="text-[#EDEDED]/40 text-xs">{item.cidade}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Depoimentos() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-10 sm:py-16 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00FF88]/03 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p
            className="text-[#00FF88] text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            QUEM JÁ CONFIA
          </p>
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#EDEDED] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            O QUE NOSSOS{" "}
            <span className="gradient-text-green text-glow">CLIENTES DIZEM</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00FF88]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00FF88]/50" />
          </div>
          <p className="text-[#EDEDED]/50 text-base mt-6 max-w-xl mx-auto">
            Mais de 1.800 veículos protegidos. Veja o que nossos clientes falam
            sobre a Marauí Rastreamento.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {depoimentos.map((item) => (
            <DepoimentoCard key={item.nome} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
