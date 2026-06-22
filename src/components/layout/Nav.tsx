"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#founders", label: "Founders" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 flex h-[72px] items-center border-b transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-line bg-ink/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-7 px-5 sm:px-10">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-[11px] rounded-md outline-none focus-visible:ring-2 focus-visible:ring-mint/60">
          <span
            className="h-[22px] w-[22px] rounded-md bg-gradient-to-br from-mint to-deep-mint"
            style={{
              boxShadow:
                "0 0 16px -2px color-mix(in oklab, var(--mint), transparent 50%), inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />
          <span className="text-[17px] font-semibold tracking-[-0.025em] text-paper">
            MintCode
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-[15px] text-slate outline-none transition-colors duration-200 hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="#call"
          className="group inline-flex items-center rounded-[10px] bg-mint px-[18px] py-[10px] text-[14.5px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform,background] duration-300 hover:-translate-y-px active:translate-y-0 active:bg-deep-mint focus-visible:ring-2 focus-visible:ring-mint/60 hover:[box-shadow:0_8px_28px_-8px_color-mix(in_oklab,var(--mint),transparent_45%)]"
        >
          Book a Discovery Call
        </a>
      </div>
    </nav>
  );
}
