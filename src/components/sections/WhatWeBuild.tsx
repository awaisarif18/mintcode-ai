// "What We Build" — six service cards in an asymmetric 6-column grid (3+3 /
// 2+2+2 / wide 06). Collapses to a single column below 880px. Each card reveals
// on scroll with a small per-row stagger. Translated from the #work section of
// design-reference/hero.html. Renders from src/content/services.ts.

import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/content/services";

// Full static class strings so Tailwind can detect them at build time.
const spanClass: Record<number, string> = {
  3: "min-[880px]:col-span-3",
  2: "min-[880px]:col-span-2",
  6: "min-[880px]:col-span-6",
};

export default function WhatWeBuild() {
  // Per-row stagger: column index that resets each time a row (6 cols) fills.
  let fill = 0;
  let col = 0;

  return (
    <section
      id="work"
      className="relative z-[1] bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <RevealOnScroll className="mb-[clamp(36px,5vh,56px)]">
          <Eyebrow label="// WHAT WE BUILD" />
          <h2 className="mt-[18px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.032em] text-paper">
            What we build
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-[18px] min-[880px]:grid-cols-6">
          {services.map((service) => {
            if (fill + service.span > 6) {
              fill = 0;
              col = 0;
            }
            const stagger = col;
            fill += service.span;
            col += 1;

            return (
              <RevealOnScroll
                key={service.number}
                index={stagger}
                className={spanClass[service.span]}
              >
                <Card {...service} />
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
