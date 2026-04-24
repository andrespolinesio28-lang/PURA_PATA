import logo from "@/assets/logo-pura-pata.png";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Pura Pata" className="h-20 w-auto invert" />
          <p className="mt-4 max-w-sm text-cream/70 text-sm">
            Snacks 100% naturales para perros. Hechos con amor, sin químicos ni conservantes.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase text-sm tracking-wider">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-primary">Nosotros</a></li>
            <li><a href="#productos" className="hover:text-primary">Productos</a></li>
            <li><a href="#como-comprar" className="hover:text-primary">Cómo comprar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase text-sm tracking-wider">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>hola@purapata.cl</li>
            <li>+56 9 1234 5678</li>
            <li>@purapata.snacks</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} Pura Pata. Todos los derechos reservados.</p>
        <p>Hecho con 🧡 para los perritos.</p>
      </div>
    </footer>
  );
}