import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Diferenciais } from "@/components/diferenciais";
import { Garantia } from "@/components/garantia";
import { Servicos } from "@/components/servicos";
import { Cobertura } from "@/components/cobertura";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Diferenciais />
        <Garantia />
        <Servicos />
        <Cobertura />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
