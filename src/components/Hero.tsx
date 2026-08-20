import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full pt-40 sm:pt-48 overflow-hidden bg-ink"
    >
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
        alt="A nature-inspired luxury villa with an infinity pool set against misty mountains"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl pl-0 sm:pl-8">

          <h1 className="font-display text-[2.9rem] leading-[1.05] text-ivory sm:text-6xl md:text-[80px]">
            <span className="block font-light">Building</span>
            <span className="block font-medium italic text-brass-soft">
              Nature-Inspired
            </span>
            <span className="block font-light whitespace-nowrap">Luxury Destinations</span>
          </h1>

          <p className="mt-8 max-w-sm text-[13px] tracking-wide leading-relaxed text-ivory/80">
            Advaitam creates exceptional spaces that<br className="hidden sm:block" />
            harmonize luxury, nature and timeless living.
          </p>

          <div className="mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 text-[12px] font-semibold tracking-[0.16em] text-brass"
            >
              <span className="border-b border-brass/50 pb-1 group-hover:border-brass transition-colors">
                EXPLORE OUR PROJECTS
              </span>
              <svg 
                width="40" 
                height="12" 
                viewBox="0 0 40 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-brass transition-transform group-hover:translate-x-2"
              >
                <path d="M0 6H38M38 6L33 1M38 6L33 11" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 z-10 hidden flex-col items-center sm:left-12 sm:flex">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-ivory/70">01</span>
        
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-ivory/30"></div>
          <div className="h-1 w-1 rounded-full bg-ivory/30"></div>
          <div className="h-1 w-1 rounded-full bg-ivory/30"></div>
        </div>

        <div className="my-4 h-40 w-px bg-brass-soft"></div>

        <span className="text-[10px] font-semibold tracking-[0.2em] text-ivory/70">05</span>
        
        <div className="mt-4 flex flex-col items-center">
          <span className="text-[9px] font-bold tracking-[0.25em] text-ivory/60">
            SCROLL
          </span>
          <ChevronDown size={16} className="mt-1 text-ivory/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
