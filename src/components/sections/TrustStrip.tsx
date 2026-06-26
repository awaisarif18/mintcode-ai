// Trust strip — a slim, factual credibility band between hero and content.
// No fake logos, no testimonials: the real stack as bordered mono chips and
// honest signals as dot-prefixed labels, on a quiet marquee. Pure CSS (reuses
// the `marquee` + `livePulse` keyframes); pauses on hover and freezes under
// reduced-motion (global reset). The track holds two identical groups so the
// keyframe's -50% loop is seamless. Translated from design-reference/hero.html.

import { trust } from "@/content/trust";

function Group({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex items-center gap-[13px] pr-[13px]"
    >
      {trust.map((item) =>
        item.chip ? (
          <span
            key={item.label}
            className="whitespace-nowrap rounded-[7px] border border-line bg-ink px-3 py-[6px] font-mono text-[12.5px] text-slate"
          >
            {item.label}
          </span>
        ) : (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 whitespace-nowrap px-1 font-mono text-[12px] tracking-[0.03em] text-slate"
          >
            <span
              aria-hidden
              className="h-[5px] w-[5px] shrink-0 rounded-full bg-mint [animation:livePulse_2.6s_var(--ease-build)_infinite] [box-shadow:0_0_7px_var(--mint)]"
            />
            {item.label}
          </span>
        ),
      )}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      aria-label="Our stack and how we work"
      className="relative z-[1] border-y border-line bg-void"
    >
      {/* Edge fades keep items from hard-clipping at the viewport edges. */}
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)",
        }}
      >
        <div className="flex w-max py-[19px] [animation:marquee_42s_linear_infinite] group-hover:[animation-play-state:paused]">
          <Group />
          <Group aria-hidden />
        </div>
      </div>
    </section>
  );
}
