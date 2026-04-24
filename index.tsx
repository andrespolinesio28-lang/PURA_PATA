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
  head: () => ({
    meta: [
      { title: "Pura Pata · Snacks naturales para perros" },
      {
        name: "description",
        content:
          "Patas de pollo deshidratadas 100% naturales. Snacks saludables, sin químicos ni conservantes, hechos con amor para tu perro.",
      },
      { property: "og:title", content: "Pura Pata · Snacks naturales para perros" },
      {
        property: "og:description",
        content: "Snacks de patas de pollo deshidratadas, naturales y saludables.",
      },
    ],
  }),
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
