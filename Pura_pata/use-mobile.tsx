import { Leaf, Bone, Heart } from "lucide-react";

const cards = [
  {
    icon: Leaf,
    title: "Natural",
    sub: "Sin químicos, proceso limpio",
    desc: "Elaboradas sin aditivos, colorantes ni conservantes artificiales. Solo pollo natural, deshidratado con cuidado para preservar todos sus nutrientes.",
    tone: "primary" as const,
  },
  {
    icon: Bone,
    title: "Nutricional",
    sub: "Beneficios dentales y digestivos",
    desc: "Altas en proteína, complemento alimenticio ideal. Ayudan a mantener dientes limpios y promueven una digestión saludable en tu perro.",
    tone: "cream" as const,
  },
  {
    icon: Heart,
    title: "Felicidad",
    sub: "Consiéntelos",
    desc: "Porque tu perro merece lo mejor. Con Pura Pata, cada momento de snack se convierte en un momento de amor puro.",
    tone: "primary" as const,
  },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">¿Por qué elegirnos?</span>
          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Lo que tu perro
            <br />
            <span className="text-primary">se merece</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const isPrimary = c.tone === "primary";
            return (
              <div
                key={c.title}
                className={
                  "relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1 " +
                  (isPrimary ? "bg-primary text-primary-foreground" : "bg-cream-soft text-ink")
                }
              >
                <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
                <div className={"flex h-14 w-14 items-center justify-center rounded-2xl " + (isPrimary ? "bg-cream/20" : "bg-primary/15")}>
                  <c.icon className={"h-7 w-7 " + (isPrimary ? "text-cream" : "text-primary")} />
                </div>
                <h3 className="mt-6 font-display font-black text-3xl uppercase">{c.title}</h3>
                <p className={"mt-1 text-sm font-bold uppercase tracking-wide " + (isPrimary ? "text-cream-soft" : "text-primary")}>
                  {c.sub}
                </p>
                <p className={"mt-4 text-sm leading-relaxed " + (isPrimary ? "text-cream/90" : "text-ink/75")}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}