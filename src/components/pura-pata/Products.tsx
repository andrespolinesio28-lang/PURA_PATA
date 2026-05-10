import { Star, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import productImg from "@/assets/pro2.png";

export function Products() {
  useEffect(() => {
    // Evitar duplicados
    if (document.getElementById('shopify-buy-script')) return;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function ShopifyBuyInit() {
      const client = (window as any).ShopifyBuy.buildClient({
        domain: 'quhk57-0y.myshopify.com',
        storefrontAccessToken: '04c87d8243ee893b3b94ecc9c1a685ea',
      });
      (window as any).ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: '9258532143342',
          node: document.getElementById('product-component-1777656237057'),
          moneyFormat: '%24%20%7B%7Bamount%7D%7D',
          options: {
            product: {
              contents: {
                img: false,
                title: false,
                price: false,
              },
              styles: {
                button: {
                  ":hover": { "background-color": "#f47a20" },
                  "background-color": "#e85c0d",
                  ":focus": { "background-color": "#f47a20" },
                  "border-radius": "40px",
                  "padding-left": "43px",
                  "padding-right": "43px",
                  "font-family": "Poppins, sans-serif",
                  "font-weight": "700",
                  "width": "100%",
                },
              },
              buttonDestination: 'cart',
              text: { button: '🛒 Agregar al carrito' },
            },
            cart: {
              styles: {
                button: {
                  ":hover": { "background-color": "#f47a20" },
                  "background-color": "#e85c0d",
                  ":focus": { "background-color": "#f47a20" },
                  "border-radius": "40px",
                  "font-family": "Poppins, sans-serif",
                  "font-weight": "700",
                },
                cart: {
                  "background-color": "#fff8f0",
                },
                header: {
                  "color": "#1e1e1e",
                },
                lineItems: {
                  "color": "#1e1e1e",
                },
                subtotalText: {
                  "color": "#1e1e1e",
                },
                subtotal: {
                  "color": "#e85c0d",
                  "font-weight": "900",
                },
                notice: {
                  "color": "#1e1e1e",
                },
                currency: {
                  "color": "#1e1e1e",
                },
                close: {
                  "color": "#1e1e1e",
                  ":hover": { "color": "#e85c0d" },
                },
                empty: {
                  "color": "#1e1e1e",
                },
                noteDescription: {
                  "color": "#1e1e1e",
                },
                discountText: {
                  "color": "#1e1e1e",
                },
                discountIcon: {
                  "fill": "#1e1e1e",
                },
                discountAmount: {
                  "color": "#1e1e1e",
                },
              },
              text: {
                total: 'Total',
                button: 'Finalizar compra',
                empty: 'Tu carrito está vacío',
                notice: 'Envío e impuestos calculados al finalizar',
                currency: 'MXN',
              },
              popup: false,
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#e85c0d",
                  ":hover": { "background-color": "#f47a20" },
                  ":focus": { "background-color": "#f47a20" },
                },
                count: {
                  "font-family": "Poppins, sans-serif",
                  "font-weight": "700",
                },
              },
            },
          },
        });
      });
    }

    if ((window as any).ShopifyBuy) {
      if ((window as any).ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        const script = document.createElement('script');
        script.id = 'shopify-buy-script';
        script.async = true;
        script.src = scriptURL;
        script.onload = ShopifyBuyInit;
        document.head.appendChild(script);
      }
    } else {
      const script = document.createElement('script');
      script.id = 'shopify-buy-script';
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    }
  }, []);

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
            Devuélveles el amor que te dan.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <article className="group flex flex-col rounded-3xl bg-cream shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-border hover:shadow-[0_20px_50px_-15px_rgba(232,92,13,0.35)] transition-all max-w-sm w-full">
            <div className="relative bg-primary p-6">
              <span className="absolute top-4 left-4 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                Más vendido
              </span>
              <img
                src={productImg}
                alt="Patas de pollo deshidratadas Pura Pata"
                className="w-full object-contain max-h-56 drop-shadow-xl mt-4"
              />
            </div>

            <div className="flex-1 p-6 flex flex-col">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h3 className="mt-3 font-display font-bold text-xl text-ink leading-tight">
                Patas Deshidratadas
              </h3>
              <p className="mt-1 text-sm font-bold text-primary">15 piezas</p>
              <p className="mt-3 text-sm text-ink/70 flex-1">Crujientes y nutritivas. Perfectas como premio diario y complemento alimenticio.</p>
              <p className="mt-3 font-display font-black text-2xl text-primary">$120</p>

              {/* Shopify Buy Button */}
              <div className="mt-4" id="product-component-1777656237057"></div>
            </div>
          </article>
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
