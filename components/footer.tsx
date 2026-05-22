"use client";

import { Shield, Phone, MapPin, Share2, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5586988615309";

const InstagramIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#00FF88]/10">
      {/* Glass background */}
      <div className="glass-dark">
        {/* Top glow line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00FF88]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img 
                  src="/logo.png" 
                  alt="Marauí Logo" 
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <span
                    className="text-[#00FF88] text-xl font-black tracking-widest block uppercase"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    MARAUÍ
                  </span>
                  <span className="text-[#EDEDED]/30 text-[9px] tracking-[0.3em] uppercase mt-1 inline-block">
                    RASTREAMENTO
                  </span>
                </div>
              </div>
              <p className="text-[#EDEDED]/50 text-sm leading-relaxed mb-6 max-w-xs">
                Proteção inteligente para seu veículo com tecnologia de
                rastreamento 24h. Cobertura total em Maranhão e Piauí.
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {[
                  { icon: MessageCircle, href: WA_LINK, label: "WhatsApp" },
                  { icon: InstagramIcon, href: "https://www.instagram.com/marauirastreamento?igsh=MXd6d2ZrYWpwdnduYQ==", label: "Instagram" },
                  { icon: Share2, href: "#", label: "Redes Sociais" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass border border-[#00FF88]/15 flex items-center justify-center text-[#EDEDED]/50 hover:text-[#00FF88] hover:border-[#00FF88]/30 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4
                className="text-[#00FF88] text-xs tracking-[0.3em] mb-5"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                NAVEGAÇÃO
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { href: "#diferenciais", label: "Diferenciais" },
                  { href: "#servicos", label: "Serviços" },
                  { href: "#garantia", label: "Garantia" },
                  { href: "#cobertura", label: "Cobertura" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#EDEDED]/50 hover:text-[#00FF88] text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#00FF88] group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-[#00FF88] text-xs tracking-[0.3em] mb-5"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                CONTATO
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#EDEDED]/60 hover:text-[#00FF88] transition-colors duration-200 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-[#00FF88]"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm">(86) 98861-5309</span>
                </a>
                <a
                  href={`tel:+5586988615309`}
                  className="flex items-center gap-3 text-[#EDEDED]/60 hover:text-[#00FF88] transition-colors duration-200 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors flex-shrink-0">
                    <Phone className="text-[#00FF88]" size={14} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">(86) 98861-5309</span>
                </a>
                <div className="flex items-start gap-3 text-[#EDEDED]/60">
                  <div className="w-8 h-8 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="text-[#00FF88]" size={14} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm leading-relaxed">
                    Maranhão e Piauí
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-cta flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[#00FF88]/08 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#EDEDED]/30 text-xs">
              © {currentYear} Rastreio Veicular. Todos os direitos reservados.
            </p>
            <p
              className="text-[#00FF88]/30 text-xs tracking-wider"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              VIGILÂNCIA AVANÇADA 24H
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
