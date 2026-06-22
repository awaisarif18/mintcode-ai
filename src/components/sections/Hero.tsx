"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import { hero } from "@/content/hero";

const EASE = "cubic-bezier(0.16,1,0.3,1)";

/** Combined plain text of a terminal row, as typed before it "completes". */
const plainFor = (row: { mark: string; label: string }) =>
  `${row.mark} ${row.label}`;

/**
 * How the ambient mint glow behaves:
 *  - "follow": tracks the pointer (fine-pointer devices).
 *  - "static": a fixed centered glow (touch / no pointer).
 *  - "off":    no cursor glow at all (prefers-reduced-motion).
 */
type GlowMode = "follow" | "static" | "off";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Typing state: eyebrow text, current line index, char index, done flag.
  const [eyebrow, setEyebrow] = useState("");
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);
  const [done, setDone] = useState(false);

  // Default to "static" so SSR / touch render a centered glow, never an
  // off-screen pointer glow that could add horizontal scroll on mobile.
  const [glowMode, setGlowMode] = useState<GlowMode>("static");

  // Typing sequence: eyebrow char-by-char, then each terminal row in order.
  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Reduced motion -> collapse to the finished static state. Deferred a
    // tick so we never call setState synchronously inside the effect body.
    if (reduced) {
      const id = setTimeout(() => {
        setEyebrow(hero.eyebrow);
        setLi(hero.terminal.rows.length);
        setDone(true);
      }, 0);
      return () => clearTimeout(id);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const after = (ms: number, fn: () => void) =>
      timers.push(setTimeout(fn, ms));

    let l = 0;
    let c = 0;
    const typeLines = () => {
      if (l >= hero.terminal.rows.length) {
        setDone(true);
        return;
      }
      const plain = plainFor(hero.terminal.rows[l]);
      if (c < plain.length) {
        c += 1;
        setCi(c);
        after(17, typeLines);
      } else {
        l += 1;
        c = 0;
        setLi(l);
        setCi(0);
        after(260, typeLines);
      }
    };

    let e = 0;
    const typeEyebrow = () => {
      e += 1;
      setEyebrow(hero.eyebrow.slice(0, e));
      if (e < hero.eyebrow.length) after(26, typeEyebrow);
      else after(380, typeLines);
    };

    after(450, typeEyebrow);
    return () => timers.forEach(clearTimeout);
  }, []);

  // Decide glow behaviour + wire pointer-follow only on fine-pointer devices.
  // Work happens in a rAF callback so setGlowMode isn't called synchronously
  // in the effect body; "static" stays the default until then.
  useEffect(() => {
    let cleanupMove: (() => void) | undefined;

    const id = requestAnimationFrame(() => {
      const reduced = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) {
        setGlowMode("off");
        return;
      }

      const canFollow = window.matchMedia?.(
        "(hover: hover) and (pointer: fine)",
      ).matches;
      if (!canFollow) {
        setGlowMode("static");
        return;
      }

      setGlowMode("follow");
      const onMove = (ev: PointerEvent) => {
        const g = glowRef.current;
        if (!g) return;
        g.style.left = `${ev.clientX}px`;
        g.style.top = `${ev.clientY}px`;
      };
      window.addEventListener("pointermove", onMove);
      cleanupMove = () => window.removeEventListener("pointermove", onMove);
    });

    return () => {
      cancelAnimationFrame(id);
      cleanupMove?.();
    };
  }, []);

  return (
    <section className="relative z-[1] flex min-h-[calc(100vh-72px)] items-center">
      {/* Background layers — clipped to the hero (prevents mobile overflow). */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        {/* Masked grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            opacity: 0.32,
            maskImage:
              "radial-gradient(ellipse 78% 68% at 56% 36%, #000 0%, transparent 74%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 68% at 56% 36%, #000 0%, transparent 74%)",
          }}
        />
        {/* Static top-right radial glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: "-6%",
            top: "4%",
            width: 760,
            height: 760,
            maxWidth: "90vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--mint), transparent 87%), transparent 62%)",
            opacity: 0.85,
            filter: "blur(34px)",
          }}
        />
        {/* Static centered glow — used on touch / no-pointer devices. Lives
            inside the clipped wrapper so it can never cause horizontal scroll. */}
        {glowMode === "static" && (
          <div
            className="pointer-events-none absolute"
            style={{
              left: "50%",
              top: "40%",
              width: 640,
              height: 640,
              maxWidth: "120vw",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
              opacity: 0.85,
              mixBlendMode: "screen",
              filter: "blur(26px)",
            }}
          />
        )}
      </div>

      {/* Cursor-following glow (fixed -> tracks the viewport, eased lag).
          Only rendered on fine-pointer devices, so the off-screen box never
          appears on mobile. */}
      {glowMode === "follow" && (
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none fixed z-0"
          style={{
            left: "60%",
            top: "34%",
            width: 640,
            height: 640,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
            opacity: 0.85,
            mixBlendMode: "screen",
            filter: "blur(26px)",
            transition: `left 0.3s ${EASE}, top 0.3s ${EASE}`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-[1] mx-auto grid w-full max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(44px,5vw,84px)] px-5 py-[clamp(56px,9vh,110px)] sm:px-10">
        {/* Left column */}
        <div className="max-w-[600px]">
          <div style={{ animation: `buildIn 0.8s ${EASE} 0.05s both` }}>
            <Eyebrow label={eyebrow} />
          </div>

          <h1
            className="mt-[26px] text-[clamp(36px,5.6vw,74px)] font-semibold leading-[1.03] tracking-[-0.035em] text-balance [overflow-wrap:break-word]"
            style={{ animation: `buildIn 0.85s ${EASE} 0.15s both` }}
          >
            {hero.headline.before}
            <span className="text-mint">{hero.headline.accent}</span>
            {hero.headline.after}
          </h1>

          <p
            className="mt-7 max-w-[540px] text-[clamp(16px,1.35vw,19px)] leading-[1.62] text-pretty text-slate"
            style={{ animation: `buildIn 0.85s ${EASE} 0.28s both` }}
          >
            {hero.subhead}
          </p>

          <div
            className="mt-[38px] flex flex-wrap gap-[14px]"
            style={{ animation: `buildIn 0.85s ${EASE} 0.4s both` }}
          >
            <a
              href={hero.ctas.primary.href}
              className="inline-flex min-h-[44px] items-center rounded-[11px] bg-mint px-[26px] py-[15px] text-[16px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform,background] duration-300 hover:-translate-y-0.5 active:translate-y-0 active:bg-deep-mint focus-visible:ring-2 focus-visible:ring-mint/60 hover:[box-shadow:0_0_0_1px_color-mix(in_oklab,var(--mint),transparent_55%),0_14px_40px_-12px_color-mix(in_oklab,var(--mint),transparent_40%)]"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="inline-flex min-h-[44px] items-center gap-[9px] rounded-[11px] border border-line bg-transparent px-[24px] py-[14px] text-[16px] font-medium tracking-[-0.01em] text-paper outline-none transition-[border-color,background,transform] duration-300 hover:-translate-y-0.5 hover:border-mint/55 hover:bg-hover focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              {hero.ctas.secondary.label}
            </a>
          </div>

          <div
            className="mt-[26px] flex flex-wrap items-center gap-x-[10px] gap-y-1 font-mono text-[12px] tracking-[0.04em] text-muted"
            style={{ animation: `buildIn 0.85s ${EASE} 0.52s both` }}
          >
            {hero.microline.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && <span className="text-line">·</span>}
                {item}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Right column — terminal panel */}
        <div style={{ animation: `panelIn 0.95s ${EASE} 0.35s both` }}>
          <div
            className="relative overflow-hidden rounded-[14px] border border-line bg-surface"
            style={{
              boxShadow:
                "0 36px 90px -34px rgba(0,0,0,0.85), 0 0 70px -26px color-mix(in oklab, var(--mint), transparent 78%)",
            }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-line px-[18px] py-[14px]">
              <div className="flex items-center gap-[9px]">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-mint [animation:livePulse_2.6s_var(--ease-build)_infinite]"
                />
                <span className="font-mono text-[12px] tracking-[0.05em] text-muted">
                  {hero.terminal.label}
                </span>
              </div>
              <div className="flex gap-[6px]">
                <span className="h-[9px] w-[9px] rounded-full bg-line" />
                <span className="h-[9px] w-[9px] rounded-full bg-line" />
                <span className="h-[9px] w-[9px] rounded-full bg-line" />
              </div>
            </div>

            {/* Typed rows */}
            <div className="min-h-[232px] px-5 pb-[22px] pt-[18px] font-mono text-[13.5px] leading-[1.95]">
              {hero.terminal.rows.map((row, idx) => {
                const finished = done || idx < li;
                const active = !done && idx === li;

                if (finished) {
                  return (
                    <div
                      key={idx}
                      className="flex justify-between gap-6 py-[2px]"
                    >
                      <span>
                        <span className="text-mint">{row.mark}</span>{" "}
                        <span className="text-slate">{row.label}</span>
                      </span>
                      {row.status && (
                        <span
                          className="text-muted"
                          style={{ animation: `statusIn 0.45s ${EASE} both` }}
                        >
                          {row.status}
                        </span>
                      )}
                    </div>
                  );
                }

                if (active) {
                  return (
                    <div key={idx} className="py-[2px] text-paper">
                      {plainFor(row).slice(0, ci)}
                      <span
                        aria-hidden
                        className="ml-[3px] inline-block h-[1em] w-[7px] bg-mint align-[-2px] [animation:blink_1.1s_steps(1)_infinite]"
                      />
                    </div>
                  );
                }

                return null;
              })}

              {/* Final blinking prompt */}
              {done && (
                <div className="pb-[2px] pt-2 text-paper">
                  <span className="text-mint">›</span>
                  <span
                    aria-hidden
                    className="ml-[6px] inline-block h-[1em] w-[7px] bg-mint align-[-2px] [animation:blink_1.1s_steps(1)_infinite]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
