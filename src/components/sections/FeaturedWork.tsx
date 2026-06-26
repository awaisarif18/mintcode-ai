// Featured Work — case-study teaser. Card 1 (TradeSync Pro) is real and links
// to /work/tradesync-pro (route not yet built — 404 until then, expected).
// Card 2 (Chronic Pain Free) is an honest in-progress placeholder: dashed,
// bracketed, NOT a link. Auto-fit grid stacks to one column on mobile and
// accepts 3–4 cards later unchanged. Translated from #work-featured.

import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { caseStudies, type CaseStudy } from "@/content/caseStudies";

const cardBase = "flex flex-[1_1_auto] min-w-0 flex-col rounded-[16px] p-4";
const mediaBase =
  "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[11px]";
const bodyBase = "flex flex-1 flex-col px-[10px] pt-[22px] pb-2";
const cornerNumber =
  "absolute top-[13px] right-[15px] font-mono text-[12px] tracking-[0.1em] text-muted";
const resultLabel =
  "font-mono text-[11px] tracking-[0.14em] text-muted";

function PublishedCard({ study, number }: { study: CaseStudy; number: string }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group border border-line bg-surface text-inherit no-underline outline-none transition-[border-color,box-shadow,transform,background] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:bg-hover hover:border-[color-mix(in_oklab,var(--mint),transparent_48%)] hover:[box-shadow:0_0_0_1px_color-mix(in_oklab,var(--mint),transparent_64%),0_46px_100px_-46px_color-mix(in_oklab,var(--mint),transparent_40%)] focus-visible:ring-2 focus-visible:ring-mint/60 ${cardBase}`}
    >
      <div
        className={`${mediaBase} border border-line transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`}
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--hover), var(--hover) 9px, var(--surface) 9px, var(--surface) 18px)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, color-mix(in oklab, var(--mint), transparent 86%), transparent 60%)",
          }}
        />
        <span className={cornerNumber}>{number}</span>
        <span className="relative rounded-[6px] px-[11px] py-[5px] font-mono text-[12px] tracking-[0.08em] text-muted [background:color-mix(in_oklab,var(--void),transparent_50%)]">
          // product shot — {study.name}
        </span>
      </div>

      <div className={bodyBase}>
        <h3 className="text-[clamp(22px,2vw,27px)] font-semibold tracking-[-0.022em] text-paper">
          {study.name}
        </h3>
        <p className="mt-[10px] text-[15px] leading-[1.5] text-pretty text-slate">
          {study.descriptor}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded-[7px] border border-line bg-ink px-[10px] py-[5px] font-mono text-[11.5px] text-slate"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-line pt-5">
          <div className={resultLabel}>RESULT</div>
          <div className="mt-[10px] flex gap-[11px]">
            <span className="text-[17px] leading-[1.4] text-mint">→</span>
            <p className="text-[16.5px] font-medium leading-[1.45] tracking-[-0.01em] text-pretty text-paper">
              {study.result}
            </p>
          </div>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-medium text-mint">
          View case study{" "}
          <span
            className="inline-block transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[6px]"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function InProgressCard({
  study,
  number,
}: {
  study: CaseStudy;
  number: string;
}) {
  return (
    <div className={`border border-dashed border-line bg-ink ${cardBase}`}>
      <div
        className={`${mediaBase} border border-dashed border-line`}
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--surface), var(--surface) 9px, var(--ink) 9px, var(--ink) 18px)",
        }}
      >
        <span className="absolute top-[13px] left-[15px] rounded-[5px] border border-line px-2 py-[3px] font-mono text-[10.5px] tracking-[0.14em] text-muted">
          IN PROGRESS
        </span>
        <span className={cornerNumber}>{number}</span>
        <span className="relative font-mono text-[12px] tracking-[0.08em] text-muted">
          // screenshot — to come
        </span>
      </div>

      <div className={bodyBase}>
        <h3 className="text-[clamp(22px,2vw,27px)] font-semibold tracking-[-0.022em] text-paper">
          {study.name}
        </h3>
        <p className="mt-[10px] text-[15px] leading-[1.5] text-pretty text-muted italic">
          [ One-line descriptor to be supplied ]
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-[7px] border border-dashed border-line px-[10px] py-[5px] font-mono text-[11.5px] text-muted">
            stack TBD
          </span>
        </div>
        <div className="mt-auto border-t border-line pt-5">
          <div className={resultLabel}>RESULT</div>
          <p className="mt-[10px] text-[16.5px] font-medium leading-[1.45] tracking-[-0.01em] text-pretty text-muted italic">
            [ Headline result to be supplied ]
          </p>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.04em] text-muted">
          Case study in progress
        </div>
      </div>
    </div>
  );
}

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
          {caseStudies.map((study, i) => {
            const number = String(i + 1).padStart(2, "0");
            return (
              <RevealOnScroll key={study.slug} className="flex">
                {study.status === "published" ? (
                  <PublishedCard study={study} number={number} />
                ) : (
                  <InProgressCard study={study} number={number} />
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
