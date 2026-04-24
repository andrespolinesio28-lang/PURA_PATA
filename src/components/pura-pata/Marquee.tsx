import { Drumstick, Zap, Trophy, Sparkles, Smile, Leaf } from "lucide-react";

const items = [
  { icon: Leaf, label: "Sin Químicos" },
  { icon: Drumstick, label: "Puro Pollo" },
  { icon: Zap, label: "Proceso Limpio" },
  { icon: Trophy, label: "Calidad Premium" },
  { icon: Sparkles, label: "Natural" },
  { icon: Smile, label: "Beneficios Dentales" },
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden bg-ink py-5 text-cream">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
            <it.icon className="h-5 w-5 text-primary" />
            {it.label}
            <span className="text-primary">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}