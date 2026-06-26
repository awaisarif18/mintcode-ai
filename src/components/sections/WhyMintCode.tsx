// "Why MintCode" — a 5fr/7fr layout: the emphasized CORE DIFFERENTIATOR card
// (Direct founder & engineer access) on the left, and the stacked 02–06 reason
// list on the right. Collapses to a single column below 880px (card on top).
// Translated from the #why section of design-reference/hero.html.

import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { reasons } from "@/content/reasons";

export default function WhyMintCode() {
  const differentiator = reasons.find((r) => r.differentiator)!;
  const list = reasons.filter((r) => !r.differentiator);

  return (
    <section
      id="why"
      className="relative z-[1] bg-void px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <RevealOnScroll className="mb-[clamp(36px,5vh,56px)]">
          <Eyebrow label="// WHY MINTCODE" />
          <h2 className="mt-[18px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.032em] text-paper">
            Why founders choose us
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 items-stretch gap-[clamp(20px,2.4vw,40px)] min-[880px]:grid-cols-[5fr_7fr]">
          {/* Left — emphasized core differentiator */}
          <RevealOnScroll>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[color-mix(in_oklab,var(--mint),transparent_58%)] bg-surface p-[clamp(30px,3vw,40px)] [box-shadow:0_0_0_1px_color-mix(in_oklab,var(--mint),transparent_80%),0_30px_70px_-34px_color-mix(in_oklab,var(--mint),transparent_52%)]">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-[30%] -right-[20%] h-[420px] w-[420px] max-w-[90%] rounded-full blur-[20px]"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--mint), transparent 84%), transparent 64%)",
                }}
              />
              <div className="relative flex items-center gap-[9px]">
                <span
                  aria-hidden
                  className="h-[7px] w-[7px] shrink-0 rounded-full bg-mint [animation:livePulse_2.6s_var(--ease-build)_infinite] [box-shadow:0_0_10px_var(--mint)]"
                />
                <span className="font-mono text-[11.5px] tracking-[0.16em] text-mint">
                  CORE DIFFERENTIATOR
                </span>
              </div>
              <h3 className="relative mt-[22px] text-[clamp(26px,2.6vw,35px)] font-semibold leading-[1.1] tracking-[-0.028em] text-balance text-paper">
                {differentiator.title}
              </h3>
              <p className="relative mt-4 text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-pretty text-slate">
                {differentiator.description}
              </p>
              <div className="relative mt-auto flex items-center gap-[9px] pt-[30px] font-mono text-[12.5px] tracking-[0.04em] text-muted">
                <span className="text-mint">›</span>you ↔ senior engineer
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — stacked reason list 02–06 */}
          <div className="border-b border-line">
            {list.map((reason) => (
              <RevealOnScroll key={reason.number}>
                <div className="flex gap-[22px] rounded-[10px] border-t border-line px-[18px] py-[22px] transition-[background,box-shadow] duration-300 hover:bg-hover hover:[box-shadow:inset_2px_0_0_var(--mint)]">
                  <span className="w-[26px] flex-none pt-[3px] font-mono text-[12px] tracking-[0.08em] text-muted">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="mb-[7px] text-[18.5px] font-semibold tracking-[-0.018em] text-paper">
                      {reason.title}
                    </h3>
                    <p className="text-[14.5px] leading-[1.55] text-pretty text-slate">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
