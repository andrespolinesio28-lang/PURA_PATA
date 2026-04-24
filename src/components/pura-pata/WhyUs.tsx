import { Leaf, Zap, Shield, Heart } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "100% Natural", desc: "Sin químicos, sin conservantes. Solo pollo puro deshidratado." },
  { icon: Zap, title: "Proceso Limpio", desc: "Deshidratado a baja temperatura para conservar todos los nutrientes." },
  { icon: Shield, title: "Seguro para tu perro", desc: "Sin aditivos artificiales ni ingredientes dañinos." },
  { icon: Heart, title: "Hecho con amor", desc: "Cada lote elaborado con dedicación y cuidado." },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="bg-cream-soft py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">¿Por qué elegirnos?</span>
          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Lo mejor para
            <br />
            <span className="text-primary">tu mejor amigo</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-3xl bg-cream p-7 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
