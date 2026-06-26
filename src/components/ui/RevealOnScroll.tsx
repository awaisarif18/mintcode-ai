"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Reusable scroll-reveal wrapper — translates the design export's `data-reveal`
// behavior into React. An IntersectionObserver fires the `buildIn` keyframe once
// the element enters view, with a small per-item stagger. SSR renders visible
// (content stays available to no-JS / crawlers); the hidden state is applied
// only on the client. Honors prefers-reduced-motion (renders static).

type RevealOnScrollProps = {
  children: ReactNode;
  /** Classes on the wrapper (e.g. grid-span when used as a grid child). */
  className?: string;
  /** Stagger position; delay = index * 0.08s. */
  index?: number;
};

export default function RevealOnScroll({
  children,
  className,
  index = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

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
      setShown(true);
      return;
    }

    // Hide only on the client, so SSR/no-JS still shows the content.
    el.style.opacity = "0";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.style.opacity = "";
          setShown(true);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        shown
          ? { animation: `buildIn 0.7s var(--ease-build) ${index * 0.08}s both` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
