import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Leaf, Sparkles, Heart, Star, PawPrint } from "lucide-react";
import dogImg from "@/assets/happy-dog.jpg";
import productImg from "@/assets/perro_producto.png";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-2/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cream/10 blur-3xl" />

      <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 py-16 lg:py-24">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-widest"
          >
            <Leaf className="h-3.5 w-3.5" />
            100% Natural · Sin Químicos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-black uppercase leading-[0.9] text-balance text-cream"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Snacks
            <br />
            naturales,
            <br />
            <span className="text-cream-soft">amor que</span>
            <br />
            <span className="text-cream-soft">se merecen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-cream/90"
          >
            Patas de pollo deshidratadas, hechas con cariño para tu perro. Sin
            aditivos, sin conservantes — solo lo que tu mejor amigo necesita. <PawPrint className="inline h-5 w-5" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream shadow-xl hover:scale-105 transition-transform"
            >
              <ShoppingCart className="h-5 w-5" />
              ¡Comprar ahora!
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream px-7 py-4 text-sm font-bold uppercase tracking-wide text-cream hover:bg-cream hover:text-primary transition-colors"
            >
              Ver productos
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge icon={<Leaf className="h-4 w-4" />} label="Pollo 100% Natural" />
            <Badge icon={<Sparkles className="h-4 w-4" />} label="Beneficios Dentales" />
            <Badge icon={<Heart className="h-4 w-4 fill-current" />} label="Sin Conservantes" tone="dark" />
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2 text-2xl">
              <span>🐶</span><span>🐕</span><span>🐩</span>
            </div>
            <div>
              <div className="flex gap-0.5 text-cream-soft">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold">+200 perritos felices</p>
            </div>
          </div>
        </div>

        {/* product image */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute -top-6 -right-6 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-ink text-cream text-xs font-bold text-center leading-tight shadow-xl">
              100%<br />Natural
            </div>
            <img
              src={productImg}
              alt="Patas de pollo deshidratadas Pura Pata"
              className="w-full drop-shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-cream px-4 py-3 text-ink shadow-xl">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Ideal para</p>
              <p className="text-sm font-bold">todos los perros</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* wave bottom */}
      <svg className="block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,30 L1440,80 L0,80 Z" fill="var(--cream)" />
      </svg>
    </section>
  );
}

function Badge({ icon, label, tone = "light" }: { icon: React.ReactNode; label: string; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide " +
        (isDark
          ? "bg-ink text-cream"
          : "bg-cream/95 text-primary")
      }
    >
      {icon}
      {label}
    </span>
  );
}