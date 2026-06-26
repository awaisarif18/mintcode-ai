"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelinePhase } from "@/content/caseStudies";

// Case-study timeline rows — phase label, a draw-on mint bar, and the duration
// (a placeholder until real durations are supplied — never invented). Bars draw
// on with a staggered scaleX when the timeline scrolls into view, matching the
// reference motion. Durations are placeholders, so the bars are decorative
// (equal full-width) rather than proportional. Reduced motion → bars full.

export default function CaseStudyTimeline({
  phases,
}: {
  phases: TimelinePhase[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState<boolean[]>(() => phases.map(() => false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      // One-shot, browser-capability-gated state we can't derive at render time
      // without an SSR hydration mismatch (no `window` on the server). It can't
      // cascade (guarded early-return), so the rule's concern doesn't apply.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLit(phases.map(() => true));
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          phases.forEach((_, i) => {
            timers.push(
              setTimeout(() => {
                setLit((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 150 + i * 130),
            );
          });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [phases]);

  return (
    <div ref={ref} className="flex flex-col">
      {phases.map((p, i) => (
        <div
          key={p.phase}
          className="flex flex-wrap items-center gap-[18px] border-t border-line py-3 last:border-b min-[820px]:flex-nowrap"
        >
          <span className="w-full flex-none text-[15.5px] font-medium text-paper min-[820px]:w-[230px]">
            {p.phase}
          </span>
          <div className="h-[14px] flex-1 overflow-hidden rounded-[7px] bg-hover">
            <div
              className="h-full w-full origin-left rounded-[7px] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] [background:linear-gradient(90deg,var(--mint),var(--deep-mint))]"
              style={{ transform: lit[i] ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
          <span className="flex-none text-right font-mono text-[12.5px] text-slate min-[820px]:w-[70px]">
            {p.duration}
          </span>
        </div>
      ))}
    </div>
  );
}
