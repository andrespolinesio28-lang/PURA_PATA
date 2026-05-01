import { ShoppingCart, Star, ArrowRight } from "lucide-react";

const products = [
  { tag: "Más vendido", icon: "🐔", size: "15 piezas", price: "$120", rating: 5, desc: "Crujientes y nutritivas. Perfectas como premio diario." },
];

export function Products() {
  return (
    <section id="productos" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Nuestros productos</span>
          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Nuestros
            <br />
            <span className="text-primary">snacks</span>
          </h2>
          <p className="mt-5 text-ink/70">
            Todos nuestros productos son elaborados con pollo 100% natural, sin aditivos ni conservantes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.tag} className="group flex flex-col rounded-3xl bg-cream shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-border hover:shadow-[0_20px_50px_-15px_rgba(232,92,13,0.35)] transition-all">
              <div className="relative bg-primary p-6 pb-10">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                  {p.tag}
                </span>
                <div className="mt-8 mx-auto rounded-2xl bg-orange-2/60 border-2 border-cream/40 p-5 text-center">
                  <div className="font-display font-black text-cream text-xl leading-none">PURA<br />PATA</div>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-cream">
                    Patas de pollo<br />deshidratadas
                  </p>
                  <div className="mt-3 text-3xl">{p.icon}</div>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={"h-4 w-4 " + (i < p.rating ? "fill-current" : "opacity-30")} />
                  ))}
                </div>
                <h3 className="mt-3 font-display font-bold text-xl text-ink leading-tight">
                  Patas Deshidratadas
                </h3>
                <p className="mt-1 text-sm font-bold text-primary">{p.size}</p>
                <p className="mt-3 text-sm text-ink/70 flex-1">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-primary">{p.price}</span>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-cream shadow-md hover:scale-110 transition-transform" aria-label="Agregar al carrito">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#contacto" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-lg hover:scale-105 transition-transform">
            Ver todos los productos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}