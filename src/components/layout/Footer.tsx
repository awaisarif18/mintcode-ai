// Minimal site footer — reused on subpages (e.g. /work) and case-study pages.
// Wordmark + an honest copyright line. No "Inc" or corporate suffix (CLAUDE.md).
// Translated from design-reference/index.html.

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line bg-void px-[clamp(20px,4vw,40px)] py-[34px]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-[18px]">
        <Link href="/" className="flex items-center gap-[10px]">
          <span
            aria-hidden
            className="h-[19px] w-[19px] rounded-[5px] bg-gradient-to-br from-mint to-deep-mint"
          />
          <span className="text-[15px] font-semibold tracking-[-0.025em] text-paper">
            MintCode
          </span>
        </Link>
        <span className="font-mono text-[12px] tracking-[0.03em] text-muted">
          © 2026 MintCode · Remote-first across the Gulf, UK &amp; US
        </span>
      </div>
    </footer>
  );
}
