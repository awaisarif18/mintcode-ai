// Reusable service card — the dark Surface card with mint border + glow + lift
// on hover (the "live" cue). Two layouts: a default vertical card, and a wide
// horizontal variant (the 06 / Scale & Support card). Renders from Service data.

import type { Service } from "@/content/services";

// Shared hover treatment: mint border, soft glow ring + drop, slight lift.
const hover =
  "transition-[border-color,box-shadow,background,transform] duration-[350ms] " +
  "hover:bg-hover hover:-translate-y-[3px] " +
  "hover:border-[color-mix(in_oklab,var(--mint),transparent_52%)] " +
  "hover:[box-shadow:0_0_0_1px_color-mix(in_oklab,var(--mint),transparent_68%),0_22px_54px_-28px_color-mix(in_oklab,var(--mint),transparent_50%)]";

const numberClass =
  "font-mono text-[12px] tracking-[0.1em] text-muted";

export default function Card({
  number,
  title,
  description,
  span,
  wide = false,
}: Service) {
  if (wide) {
    return (
      <article
        className={`flex h-full flex-wrap items-center gap-x-[56px] gap-y-6 rounded-[14px] border border-line bg-surface p-[30px] ${hover}`}
      >
        <div className="flex-[1_1_280px]">
          <span className={numberClass}>{number}</span>
          <h3 className="mt-[14px] text-[24px] font-semibold tracking-[-0.02em] text-paper">
            {title}
          </h3>
        </div>
        <p className="flex-[1_1_380px] text-[16px] leading-[1.6] text-pretty text-slate">
          {description}
        </p>
      </article>
    );
  }

  const big = span === 3;
  return (
    <article
      className={`h-full rounded-[14px] border border-line bg-surface p-[28px] ${hover}`}
    >
      <span className={numberClass}>{number}</span>
      <h3
        className={`mt-4 mb-[11px] font-semibold tracking-[-0.02em] text-paper ${
          big ? "text-[23px]" : "text-[20px]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-[1.58] text-pretty text-slate ${
          big ? "text-[15.5px]" : "text-[15px]"
        }`}
      >
        {description}
      </p>
    </article>
  );
}
