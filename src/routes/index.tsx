import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/pura-pata/Navbar";
import { Hero } from "@/components/pura-pata/Hero";
import { Marquee } from "@/components/pura-pata/Marquee";
import { WhyUs } from "@/components/pura-pata/WhyUs";
import { Products } from "@/components/pura-pata/Products";
import { About } from "@/components/pura-pata/About";
import { HowToBuy } from "@/components/pura-pata/HowToBuy";
import { Contact } from "@/components/pura-pata/Contact";
import { Footer } from "@/components/pura-pata/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Marquee />
      <WhyUs />
      <Products />
      <About />
      <HowToBuy />
      <Contact />
      <Footer />
    </main>
  );
}
