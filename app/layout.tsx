import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rastreio Veicular | Proteção 24h | Maranhão e Piauí",
  description:
    "Sistema de rastreamento veicular com monitoramento 24h, localização em tempo real e garantia de até R$ 20.000. Atendimento em Maranhão e Piauí.",
  keywords:
    "rastreamento veicular, rastreador, monitoramento 24h, bloqueio remoto, recuperação veicular, Maranhão, Piauí",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Rastreio Veicular | Proteção Inteligente 24h",
    description:
      "Localização em tempo real, monitoramento contínuo e recuperação garantida do seu patrimônio.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${orbitron.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#EDEDED] antialiased overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
