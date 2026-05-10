import { ShoppingCart } from "lucide-react";
import logo from "@/assets/logo-pura-pata.png";
import { useState, useEffect } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#como-comprar", label: "Cómo Comprar" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Escuchar cuando se agrega un producto al carrito de Shopify
    const interval = setInterval(() => {
      const toggle = document.querySelector('.shopify-buy-frame--toggle');
      if (toggle) {
        const countEl = toggle.querySelector('.shopify-buy__cart-toggle__count');
        if (countEl) {
          const count = parseInt(countEl.textContent || '0', 10);
          setCartCount(count);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  function openCart() {
    // Hacer click en el toggle de Shopify para abrir el carrito
    const toggleBtn = document.querySelector('.shopify-buy-frame--toggle button') as HTMLElement;
    if (toggleBtn) {
      toggleBtn.click();
    } else {
      // Si no hay carrito aún, ir a productos
      window.location.href = '#productos';
    }
  }

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
        <button
          onClick={openCart}
          className="relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          <ShoppingCart className="h-4 w-4" />
          Comprar
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-cream">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
