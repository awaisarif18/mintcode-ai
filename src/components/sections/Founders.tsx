// Founders — the three people you'll actually work with. Responsive auto-fit
// grid (3 → 2 → 1 columns as width narrows). Each card has a 4:5 photo slot
// (initials-on-gradient placeholder + "// real photo" until real photos exist),
// name, mono-mint role, one-line bio, and a LinkedIn link. Translated from the
// #founders section of design-reference/hero.html.
// Guardrail: exactly these three founders, no invented URLs (see founders.ts).

import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { founders } from "@/content/founders";

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative z-[1] bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <RevealOnScroll className="mb-[clamp(36px,5vh,56px)]">
          <Eyebrow label="// FOUNDERS" />
          <h2 className="mt-[18px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.032em] text-paper">
            Who you&apos;ll work with
          </h2>
        </RevealOnScroll>

        <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr))]">
          {founders.map((founder) => (
            <RevealOnScroll key={founder.name} className="flex">
              <article className="flex flex-[1_1_auto] min-w-0 flex-col rounded-[16px] border border-line bg-surface p-4 transition-[border-color,background,box-shadow,transform] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[4px] hover:bg-hover hover:border-[color-mix(in_oklab,var(--mint),transparent_56%)] hover:[box-shadow:0_26px_60px_-34px_color-mix(in_oklab,var(--mint),transparent_52%)]">
                {/* Photo slot — placeholder until a real photo is supplied */}
                <div
                  className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[12px] border border-line"
                  style={{
                    background:
                      "linear-gradient(160deg, var(--hover), var(--ink))",
                  }}
                >
                  <span className="text-[62px] font-semibold tracking-[-0.02em] text-line">
                    {founder.initials}
                  </span>
                  <span className="absolute bottom-3 left-[13px] font-mono text-[11px] tracking-[0.08em] text-muted">
                    // real photo
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-[10px] pt-5 pb-2">
                  <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-paper">
                    {founder.name}
                  </h3>
                  <div className="mt-2 font-mono text-[11.5px] tracking-[0.12em] text-mint uppercase">
                    {founder.role}
                  </div>
                  <p className="mt-[14px] text-[14.5px] leading-[1.55] text-pretty text-slate">
                    {founder.bio}
                  </p>
                  <a
                    href={founder.linkedin}
                    aria-label={`${founder.name} on LinkedIn`}
                    className="mt-auto inline-flex items-center gap-2 rounded pt-5 pb-1 text-[14px] font-medium text-mint no-underline outline-none hover:underline focus-visible:ring-2 focus-visible:ring-mint/60"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-[19px] w-[19px] items-center justify-center rounded-[4px] bg-mint text-[11px] font-bold text-void"
                    >
                      in
                    </span>
                    LinkedIn ↗
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
