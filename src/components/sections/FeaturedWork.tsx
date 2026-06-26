// Featured Work — case-study teaser. Renders the shared CaseStudyCard (Card 1
// TradeSync Pro links to /work/tradesync-pro; Card 2 Chronic Pain Free is the
// honest in-progress placeholder). Auto-fit grid stacks to one column on mobile
// and accepts 3–4 cards later unchanged. Translated from #work-featured.

import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/content/caseStudies";

export default function FeaturedWork() {
  return (
    <section
      id="work-featured"
      className="relative z-[1] overflow-hidden bg-void px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[560px] w-[900px] max-w-[96vw] -translate-x-1/2 blur-[30px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 90%), transparent 66%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <RevealOnScroll className="mb-[clamp(36px,5vh,56px)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow label="// FEATURED WORK" />
              <h2 className="mt-[18px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.032em] text-paper">
                Selected work
              </h2>
            </div>
            <span className="font-mono text-[12px] tracking-[0.04em] text-muted">
              Real products, in production.
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
          {caseStudies.map((study, i) => (
            <RevealOnScroll key={study.slug} className="flex">
              <CaseStudyCard
                study={study}
                number={String(i + 1).padStart(2, "0")}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
