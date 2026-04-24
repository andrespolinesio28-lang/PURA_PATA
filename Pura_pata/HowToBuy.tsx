import { MousePointerClick, CreditCard, Truck, PawPrint } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Elige tu pack", desc: "Selecciona el tamaño ideal para tu perro." },
  { icon: CreditCard, title: "Paga seguro", desc: "Múltiples métodos de pago disponibles." },
  { icon: Truck, title: "Recibe en casa", desc: "Envío rápido a todo el país." },
  { icon: PawPrint, title: "¡A disfrutar!", desc: "Verás a tu perro feliz en cada snack." },
];

export function HowToBuy() {
  return (
    <section id="como-comprar" className="bg-primary py-20 lg:py-28 text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cream-soft">Cómo Comprar</span>
          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] text-cream" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>
            Súper fácil,
            <br />
            en 4 pasos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl bg-cream/10 backdrop-blur p-6 border border-cream/20">
              <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream font-display font-black text-lg shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-cream">{s.title}</h3>
              <p className="mt-2 text-sm text-cream/85">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}