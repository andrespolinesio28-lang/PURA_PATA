import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="bg-cream py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="rounded-[2.5rem] bg-ink p-10 lg:p-16 text-cream relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Contacto</span>
              <h2 className="mt-4 font-display font-black uppercase leading-[0.95]" style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}>
                Hablemos de
                <br />
                <span className="text-primary">tu perrito</span>
              </h2>
              <p className="mt-5 text-cream/80 max-w-md">
                ¿Dudas, pedidos al por mayor o quieres ser distribuidor? Escríbenos y te responderemos prontito.
              </p>

              <div className="mt-8 space-y-4">
                <ContactItem icon={<Mail className="h-5 w-5" />} label="hola@purapata.cl" />
                <ContactItem icon={<MessageCircle className="h-5 w-5" />} label="+56 9 1234 5678" />
                <ContactItem icon={<Instagram className="h-5 w-5" />} label="@purapata.snacks" />
                <ContactItem icon={<MapPin className="h-5 w-5" />} label="Santiago, Chile" />
              </div>
            </div>

            <form className="rounded-3xl bg-cream p-6 lg:p-8 text-ink" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <Field label="Tu nombre" placeholder="Cómo te llamas" />
                <Field label="Email" placeholder="tu@email.com" type="email" />
                <Field label="Nombre de tu perro 🐶" placeholder="Firulais" />
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ink/70">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos..."
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button className="w-full rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-lg hover:scale-[1.02] transition-transform">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-cream">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-wider text-ink/70">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}