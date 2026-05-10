import { Heart, Truck } from "lucide-react";
import dogImg from "@/assets/maty.jpeg";

export function About() {
  return (
    <section className="bg-cream-soft py-20 lg:py-28">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={dogImg}
              alt="Perro feliz disfrutando snacks Pura Pata"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -top-5 -left-5 rounded-2xl bg-primary px-5 py-3 text-cream shadow-xl">
            <p className="font-display font-bold text-lg leading-none">100% Natural</p>
            <p className="text-xs">Sin conservantes</p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Sobre Pura Pata</span>
          <h2 className="mt-4 font-display font-black uppercase leading-[0.95] text-ink" style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}>
            Con el amor que
            <br />
            <span className="text-primary">tu perro merece</span> <Heart className="inline h-10 w-10 fill-primary text-primary" />
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed">
            Pura Pata nació del amor por los perros y la preocupación por lo que consumen.
            Creemos que los snacks para mascotas deben ser tan naturales y saludables como
            la comida que ponemos en nuestra propia mesa.
          </p>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Nuestras patas de pollo deshidratadas son procesadas con técnicas limpias, sin
            químicos ni aditivos, preservando todos los nutrientes naturales del pollo.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-cream p-5 border border-border">
              <Heart className="h-6 w-6 text-primary fill-current" />
              <p className="mt-3 font-display font-bold text-ink">Hecho con amor</p>
              <p className="text-xs text-ink/60 mt-1">Cada lote, con dedicación</p>
            </div>
            <div className="rounded-2xl bg-cream p-5 border border-border">
              <Truck className="h-6 w-6 text-primary" />
              <p className="mt-3 font-display font-bold text-ink">Envío rápido</p>
              <p className="text-xs text-ink/60 mt-1">A todo el país</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}