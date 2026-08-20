import { Leaf, LineChart, MapPin, Gem } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Nature First",
    copy: "We design with nature, not against it.",
  },
  {
    icon: LineChart,
    title: "Timeless Design",
    copy: "Thoughtful architecture that stands the test of time.",
  },
  {
    icon: MapPin,
    title: "Prime Destinations",
    copy: "Carefully chosen locations with unmatched potential.",
  },
  {
    icon: Gem,
    title: "Enduring Value",
    copy: "Spaces that deliver lifestyle enrichment and long-term value.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-cream px-6 py-12 sm:px-10 sm:py-16">
      
      {/* Background Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Leaf size={600} strokeWidth={0.5} className="text-brass" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="eyebrow text-brass uppercase tracking-[0.15em] text-[11px] font-semibold">OUR PHILOSOPHY</p>

        <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
          Beyond Real Estate. We Create Legacies.
        </h2>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-14 sm:flex-row sm:divide-x sm:divide-charcoal/10 sm:gap-0">
          {pillars.map((p) => (
            <div key={p.title} className="group flex flex-1 flex-col items-center px-4 text-center">
              <span className="mb-6 flex text-brass transition-transform duration-300 group-hover:scale-110">
                <p.icon size={28} strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-[15px] tracking-wide text-charcoal">
                {p.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[200px] text-[13px] leading-relaxed text-stone">
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
