"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { processSteps } from "@/content/process";

// Process — a 7-step timeline whose mint fill line draws on (scaleX) when the
// section scrolls into view, with dots lighting up in sequence as the fill
// passes. Below 880px the rail flips to a left vertical line (scaleY, drawing
// top→bottom) and each step becomes a dot-left / text-right row. Translated
// from the #process section of design-reference/hero.html. Reduced motion →
// line fully drawn, all dots lit, no animation.

// Shared positioning for the rail + fill: vertical left line on mobile,
// horizontal dot-center-to-dot-center line on desktop.
const railBase =
  "absolute left-[8px] top-[9px] bottom-[9px] w-[2px] " +
  "min-[880px]:left-[calc(100%/14)] min-[880px]:right-[calc(100%/14)] " +
  "min-[880px]:top-[9px] min-[880px]:bottom-auto min-[880px]:h-[2px] min-[880px]:w-auto";

export default function Process() {
  const procRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [lit, setLit] = useState<boolean[]>(
    () => processSteps.map(() => false),
  );

  useEffect(() => {
    const el = procRef.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setDrawn(true);
      setLit(processSteps.map(() => true));
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setDrawn(true);
          processSteps.forEach((_, i) => {
            timers.push(
              setTimeout(() => {
                setLit((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, 220 + i * 150),
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
  }, []);

  return (
    <section
      id="process"
      className="relative z-[1] bg-ink px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div className="mx-auto max-w-[1240px]">
        <RevealOnScroll className="mb-[clamp(8px,2vh,16px)]">
          <Eyebrow label="// PROCESS" />
          <h2 className="mt-[18px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.05] tracking-[-0.032em] text-paper">
            How we work
          </h2>
        </RevealOnScroll>

        <div ref={procRef} className="relative mt-[clamp(40px,6vh,64px)]">
          {/* Static rail */}
          <div className={`${railBase} bg-line`} />
          {/* Mint fill — draws on via --draw (scaleY mobile / scaleX desktop) */}
          <div
            className={`${railBase} origin-top [transform:scaleY(var(--draw,0))] min-[880px]:origin-left min-[880px]:[transform:scaleX(var(--draw,0))] bg-mint transition-transform duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] [box-shadow:0_0_10px_color-mix(in_oklab,var(--mint),transparent_50%)]`}
            style={{ "--draw": drawn ? 1 : 0 } as CSSProperties}
          />

          <div className="relative flex flex-col min-[880px]:flex-row min-[880px]:items-start">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="flex min-w-0 flex-row items-start gap-[18px] pb-[28px] text-left min-[880px]:flex-1 min-[880px]:flex-col min-[880px]:items-center min-[880px]:gap-0 min-[880px]:px-[10px] min-[880px]:pb-0 min-[880px]:text-center"
              >
                <div className="flex h-[18px] flex-none items-center justify-center">
                  <span
                    className={`h-4 w-4 rounded-full border transition-[background,border-color,box-shadow] duration-[400ms] ${
                      lit[i]
                        ? "border-mint bg-mint [animation:nodePulse_0.9s_ease-out_1] [box-shadow:0_0_12px_color-mix(in_oklab,var(--mint),transparent_35%)]"
                        : "border-line bg-hover"
                    }`}
                  />
                </div>
                <div className="mt-0 min-w-0 min-[880px]:mt-[20px]">
                  <div className="font-mono text-[11.5px] tracking-[0.12em] text-muted">
                    {step.number}
                  </div>
                  <h3 className="mt-2 mb-[7px] text-[16.5px] font-semibold tracking-[-0.015em] text-paper">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.5] text-pretty text-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <RevealOnScroll className="mt-[clamp(40px,6vh,60px)]">
          <div className="flex items-center justify-center gap-[10px]">
            <span
              aria-hidden
              className="h-[6px] w-[6px] shrink-0 rounded-full bg-mint [animation:livePulse_2.6s_var(--ease-build)_infinite] [box-shadow:0_0_9px_var(--mint)]"
            />
            <span className="font-mono text-[13px] tracking-[0.04em] text-slate">
              You talk to senior engineers at every step.
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
