"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#garantia", label: "Garantia" },
  { href: "#cobertura", label: "Cobertura" },
];

const WA_LINK = "https://wa.me/5586988615309";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-[0_0_40px_rgba(0,255,136,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-[#00FF88]/10 group-hover:bg-[#00FF88]/20 transition-colors" />
              <div className="absolute inset-0 rounded-xl border border-[#00FF88]/30 group-hover:border-[#00FF88]/60 transition-colors" />
              <Shield
                className="relative z-10 text-[#00FF88]"
                size={20}
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-[#00FF88] text-lg leading-none tracking-widest font-black"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                RASTREIO
              </span>
              <span className="text-[#EDEDED]/40 text-[9px] tracking-[0.3em] leading-none">
                VIGILÂNCIA AVANÇADA
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#EDEDED]/60 hover:text-[#00FF88] text-sm tracking-wider transition-colors duration-200 relative group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00FF88] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer"
            >
              <Phone size={15} strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[#00FF88]/20 text-[#00FF88] hover:border-[#00FF88]/50 transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 glass-dark rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#EDEDED]/70 hover:text-[#00FF88] py-2 border-b border-[#00FF88]/10 text-sm tracking-wider transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold mt-2 cursor-pointer"
            >
              <Phone size={15} strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
