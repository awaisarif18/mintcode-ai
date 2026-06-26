// Case-study detail template (/work/[slug]) — data-driven from caseStudies.ts.
// Structure, spacing and motion translated from design-reference/tradesync-pro.html;
// all real content (descriptor, challenge, solution, tech stack, timeline,
// results) comes from the data so future studies drop straight in. Screenshots
// stay placeholder slots; timeline durations render as supplied (placeholders).

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CaseStudyTimeline from "@/components/sections/CaseStudyTimeline";
import Footer from "@/components/layout/Footer";
import { caseStudies } from "@/content/caseStudies";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

// Only published studies get a detail page.
const publishedStudies = caseStudies.filter((s) => s.status === "published");

export function generateStaticParams() {
  return publishedStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = publishedStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.name} — MintCode`,
    description: study.descriptor,
  };
}

const SCREENSHOT_SLOTS = [
  "// screenshot — to come",
  "// screenshot — to come",
  "// screenshot — to come",
  "// screenshot — to come",
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = publishedStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main>
      {/* Hero */}
      <header className="relative z-[1] overflow-hidden px-[clamp(20px,4vw,40px)] pt-[clamp(56px,9vh,96px)] pb-[clamp(36px,5vh,56px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-14%] h-[640px] w-[1000px] max-w-[96vw] -translate-x-1/2 blur-[36px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
          }}
        />
        <div className="relative mx-auto max-w-[1120px]">
          <div style={{ animation: `buildIn 0.8s ${EASE} 0.05s both` }}>
            <Eyebrow label="// CASE STUDY" />
          </div>
          <h1
            className="mt-6 text-[clamp(40px,6vw,82px)] font-semibold leading-[1.0] tracking-[-0.035em] text-balance text-paper"
            style={{ animation: `buildIn 0.85s ${EASE} 0.13s both` }}
          >
            {study.name}
          </h1>
          <p
            className="mt-[22px] max-w-[620px] text-[clamp(17px,1.5vw,21px)] leading-[1.5] text-pretty text-slate"
            style={{ animation: `buildIn 0.85s ${EASE} 0.24s both` }}
          >
            {study.descriptor}
          </p>

          {/* Meta row — type / status / headline result */}
          {study.meta && (
            <div
              className="mt-[30px] flex flex-wrap gap-x-9 gap-y-3"
              style={{ animation: `buildIn 0.85s ${EASE} 0.34s both` }}
            >
              <div className="flex flex-col gap-[5px]">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted">
                  TYPE
                </span>
                <span className="text-[15px] text-paper">
                  {study.meta.type}
                </span>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted">
                  STATUS
                </span>
                <span className="text-[15px] text-paper">
                  {study.meta.status}
                </span>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted">
                  HEADLINE RESULT
                </span>
                <span className="text-[15px] font-medium text-mint">
                  {study.meta.headline}
                </span>
              </div>
            </div>
          )}

          {/* Primary product shot — placeholder */}
          <div
            className="relative mt-[clamp(36px,5vh,56px)] flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[16px] border border-line"
            style={{
              animation: `buildIn 0.9s ${EASE} 0.44s both`,
              background:
                "repeating-linear-gradient(135deg, var(--hover), var(--hover) 11px, var(--surface) 11px, var(--surface) 22px)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--mint), transparent 86%), transparent 58%)",
              }}
            />
            <span className="relative rounded-[7px] px-[13px] py-[7px] font-mono text-[13px] tracking-[0.08em] text-muted [background:color-mix(in_oklab,var(--void),transparent_50%)]">
              // primary product shot — {study.name} dashboard
            </span>
          </div>
        </div>
      </header>

      {/* Challenge */}
      {study.challenge && (
        <section className="relative z-[1] border-t border-line bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]">
          <RevealOnScroll className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-[clamp(28px,5vw,72px)] min-[820px]:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow label="// CHALLENGE" pulse={false} />
              <h2 className="mt-4 text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.08] tracking-[-0.03em] text-paper">
                The problem
              </h2>
            </div>
            <p className="max-w-[640px] text-[clamp(16px,1.3vw,18.5px)] leading-[1.62] text-pretty text-slate">
              {study.challenge}
            </p>
          </RevealOnScroll>
        </section>
      )}

      {/* Solution */}
      {study.solution && (
        <section className="relative z-[1] bg-void px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]">
          <RevealOnScroll className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-[clamp(28px,5vw,72px)] min-[820px]:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow label="// SOLUTION" pulse={false} />
              <h2 className="mt-4 text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.08] tracking-[-0.03em] text-paper">
                What we built
              </h2>
            </div>
            <div className="max-w-[640px]">
              <p className="text-[clamp(16px,1.3vw,18.5px)] leading-[1.62] text-pretty text-slate">
                {study.solution}
              </p>
              {study.keyDecisions && (
                <div className="mt-[26px]">
                  <div className="mb-3 font-mono text-[11px] tracking-[0.14em] text-muted">
                    KEY DECISIONS
                  </div>
                  {study.keyDecisions.map((decision) => (
                    <div
                      key={decision}
                      className="flex gap-[13px] border-t border-line py-[13px] last:border-b"
                    >
                      <span aria-hidden className="text-mint">
                        →
                      </span>
                      <p className="text-[15.5px] leading-[1.5] text-paper">
                        {decision}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* Tech stack */}
      {study.techStack && (
        <section className="relative z-[1] border-t border-line bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(52px,7vh,80px)]">
          <RevealOnScroll className="mx-auto max-w-[1120px]">
            <Eyebrow label="// TECH STACK" pulse={false} />
            <div className="mt-[22px] flex flex-wrap gap-[10px]">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[8px] border border-line bg-ink px-[14px] py-[9px] font-mono text-[13.5px] text-slate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* Timeline */}
      {study.timeline && (
        <section className="relative z-[1] bg-void px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]">
          <div className="mx-auto max-w-[1120px]">
            <RevealOnScroll>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-[10px]">
                <Eyebrow label="// TIMELINE" pulse={false} />
                <span className="font-mono text-[11.5px] text-muted">
                  indicative phases · durations are placeholders
                </span>
              </div>
              <h2 className="mt-4 mb-[30px] text-[clamp(26px,2.6vw,36px)] font-semibold tracking-[-0.03em] text-paper">
                How it came together
              </h2>
            </RevealOnScroll>
            <CaseStudyTimeline phases={study.timeline} />
          </div>
        </section>
      )}

      {/* Results */}
      {study.results && (
        <section className="relative z-[1] border-t border-line bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]">
          <RevealOnScroll className="mx-auto max-w-[1120px]">
            <Eyebrow label="// RESULTS" />
            <h2 className="mt-4 mb-[6px] text-[clamp(26px,2.6vw,36px)] font-semibold tracking-[-0.03em] text-paper">
              Outcomes
            </h2>
            <p className="mb-7 font-mono text-[13.5px] text-muted">
              verified outcomes only · unmeasured metrics shown as placeholders
            </p>

            <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
              {study.results.map((result) => (
                <div
                  key={result}
                  className="rounded-[14px] border bg-surface px-6 py-[26px] border-[color-mix(in_oklab,var(--mint),transparent_62%)] [box-shadow:0_0_0_1px_color-mix(in_oklab,var(--mint),transparent_84%)]"
                >
                  <div className="font-mono text-[11px] tracking-[0.14em] text-mint">
                    VERIFIED
                  </div>
                  <p className="mt-[14px] text-[18px] font-medium leading-[1.4] tracking-[-0.01em] text-paper">
                    {result}
                  </p>
                </div>
              ))}
              {/* Honest placeholder slots for metrics not yet supplied */}
              {[0, 1].map((i) => (
                <div
                  key={`placeholder-${i}`}
                  className="rounded-[14px] border border-dashed border-line bg-ink px-6 py-[26px]"
                >
                  <div className="font-mono text-[11px] tracking-[0.14em] text-muted">
                    PLACEHOLDER
                  </div>
                  <p className="mt-[14px] text-[18px] font-medium leading-[1.4] text-muted italic">
                    [ Metric — to be supplied ]
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

      {/* Screenshots — placeholder slots */}
      <section className="relative z-[1] bg-void px-[clamp(20px,4vw,40px)] py-[clamp(60px,9vh,104px)]">
        <RevealOnScroll className="mx-auto max-w-[1120px]">
          <Eyebrow label="// SCREENSHOTS" pulse={false} />
          <h2 className="mt-4 mb-[30px] text-[clamp(26px,2.6vw,36px)] font-semibold tracking-[-0.03em] text-paper">
            A look inside
          </h2>
          <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
            {SCREENSHOT_SLOTS.map((label, i) => (
              <div
                key={i}
                className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[13px] border border-line"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, var(--hover), var(--hover) 10px, var(--surface) 10px, var(--surface) 20px)",
                }}
              >
                <span className="rounded-[6px] px-[11px] py-[6px] font-mono text-[12px] text-muted [background:color-mix(in_oklab,var(--void),transparent_50%)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* CTA */}
      <section className="relative z-[1] overflow-hidden border-t border-line bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(64px,10vh,116px)]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 blur-[34px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
          }}
        />
        <RevealOnScroll className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-7 min-[820px]:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="font-mono text-[13px] tracking-[0.06em] text-mint">
              Want something like this?
            </p>
            <h2 className="mt-4 text-[clamp(30px,4vw,54px)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance text-paper">
              Book a discovery call.
            </h2>
          </div>
          <div className="flex flex-wrap gap-[13px]">
            <Link
              href="/#call"
              className="inline-flex items-center rounded-[11px] bg-mint px-[26px] py-[15px] text-[16px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:[box-shadow:0_14px_40px_-12px_color-mix(in_oklab,var(--mint),transparent_40%)] focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-[11px] border border-line bg-transparent px-[24px] py-[14px] text-[16px] font-medium text-paper outline-none transition-[border-color,background] duration-300 hover:bg-hover hover:border-[color-mix(in_oklab,var(--mint),transparent_45%)] focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              See more work
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </main>
  );
}
