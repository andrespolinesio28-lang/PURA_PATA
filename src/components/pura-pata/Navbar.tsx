import { ShoppingCart } from "lucide-react";
import logo from "@/assets/logo-pura-pata.png";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#como-comprar", label: "Cómo Comprar" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Pura Pata" className="h-12 w-auto rounded-lg shadow-sm" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#productos"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          <ShoppingCart className="h-4 w-4" />
          Comprar
        </a>
      </div>
    </header>
  );
}