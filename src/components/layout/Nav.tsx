"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#founders", label: "Founders" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape or when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 880) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const opaque = scrolled || open;

  return (
    <nav
      className={`sticky top-0 z-30 flex h-[72px] items-center border-b transition-[background,backdrop-filter,border-color] duration-300 ${
        opaque
          ? "border-line bg-ink/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-7 px-5 sm:px-10">
        {/* Wordmark */}
        <a
          href="#"
          className="flex items-center gap-[11px] rounded-md outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
        >
          <span
            className="h-[22px] w-[22px] rounded-md bg-gradient-to-br from-mint to-deep-mint"
            style={{
              boxShadow:
                "0 0 16px -2px color-mix(in oklab, var(--mint), transparent 50%), inset 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />
          <span className="text-[17px] font-semibold tracking-[-0.025em] text-paper">
            MintCode AI
          </span>
        </a>

        {/* Center links — desktop only */}
        <div className="hidden items-center gap-8 min-[880px]:flex">
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

        {/* Primary CTA — desktop only */}
        <a
          href="#call"
          className="hidden items-center rounded-[10px] bg-mint px-[18px] py-[10px] text-[14.5px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform,background] duration-300 hover:-translate-y-px active:translate-y-0 active:bg-deep-mint focus-visible:ring-2 focus-visible:ring-mint/60 hover:[box-shadow:0_8px_28px_-8px_color-mix(in_oklab,var(--mint),transparent_45%)] min-[880px]:inline-flex"
        >
          Book a Discovery Call
        </a>

        {/* Hamburger — mobile only (44px tap target) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-paper outline-none transition-colors hover:bg-hover focus-visible:ring-2 focus-visible:ring-mint/60 min-[880px]:hidden"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu sheet */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-[72px] border-b border-line bg-ink/95 backdrop-blur-md min-[880px]:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-1 px-5 py-4 sm:px-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-[17px] text-slate outline-none transition-colors hover:bg-hover hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#call"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-mint px-[18px] text-[15px] font-semibold tracking-[-0.01em] text-void outline-none transition-[background] duration-300 active:bg-deep-mint focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
