// Work index page (/work) — short hero + the same case-study card grid used in
// the homepage Featured Work teaser (shared CaseStudyCard + caseStudies data).
// The site Nav comes from the root layout; Footer is rendered here. Translated
// from design-reference/index.html (.dc.html links → real Next routes).

import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Footer from "@/components/layout/Footer";
import { caseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Work — MintCode",
  description:
    "Real products, in production — built directly with the senior engineers who shipped them.",
};

const EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function WorkPage() {
  return (
    <main>
      <header className="relative z-[1] overflow-hidden px-[clamp(20px,4vw,40px)] pt-[clamp(56px,9vh,96px)] pb-[clamp(28px,4vh,44px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-16%] h-[560px] w-[980px] max-w-[96vw] -translate-x-1/2 blur-[36px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
          }}
        />
        <div className="relative mx-auto max-w-[1240px]">
          <div style={{ animation: `buildIn 0.8s ${EASE} 0.05s both` }}>
            <Eyebrow label="// WORK" />
          </div>
          <h1
            className="mt-[22px] text-[clamp(38px,5.4vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance text-paper"
            style={{ animation: `buildIn 0.85s ${EASE} 0.13s both` }}
          >
            Selected work
          </h1>
          <p
            className="mt-5 max-w-[540px] text-[clamp(16px,1.4vw,19px)] leading-[1.55] text-pretty text-slate"
            style={{ animation: `buildIn 0.85s ${EASE} 0.24s both` }}
          >
            Real products, in production — built directly with the senior
            engineers who shipped them.
          </p>
        </div>
      </header>

      <section className="relative z-[1] px-[clamp(20px,4vw,40px)] pt-[clamp(12px,2vh,24px)] pb-[clamp(74px,11vh,120px)]">
        <div className="mx-auto grid max-w-[1240px] gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              number={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
