// Site footer — reused on the homepage and every subpage. Wordmark + tagline,
// EXPLORE + CONNECT link columns, and a © line with no "Inc" (CLAUDE.md).
// Since this renders on subpages too, homepage-section anchors are root-absolute
// (/#…) so they resolve from anywhere. Translated from design-reference/hero.html.

import Link from "next/link";
import { contactEmail, companyLinkedIn } from "@/lib/site";

const exploreLinks = [
  { href: "/#work-featured", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#founders", label: "Founders" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line bg-void px-[clamp(20px,4vw,40px)] pt-[clamp(48px,7vh,76px)] pb-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-start justify-between gap-10 min-[820px]:flex-row">
          {/* Wordmark + tagline */}
          <div className="max-w-[320px]">
            <Link href="/" className="flex items-center gap-[11px]">
              <span
                aria-hidden
                className="h-[22px] w-[22px] rounded-[6px] bg-gradient-to-br from-mint to-deep-mint"
                style={{
                  boxShadow:
                    "0 0 16px -2px color-mix(in oklab, var(--mint), transparent 50%), inset 0 0 0 1px rgba(255,255,255,0.12)",
                }}
              />
              <span className="text-[17px] font-semibold tracking-[-0.025em] text-paper">
                Mint Code
              </span>
            </Link>
            <p className="mt-4 text-[14.5px] leading-[1.6] text-pretty text-slate">
              A senior-led product engineering studio. You work directly with the
              engineers building your product.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-[clamp(32px,5vw,72px)]">
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted">
                EXPLORE
              </span>
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[28px] items-center text-[14.5px] text-slate outline-none transition-colors hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-muted">
                CONNECT
              </span>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex min-h-[28px] items-center text-[14.5px] text-slate outline-none transition-colors hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
              >
                {contactEmail}
              </a>
              <a
                href={companyLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[28px] items-center text-[14.5px] text-slate outline-none transition-colors hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
              >
                LinkedIn ↗
              </a>
              <Link
                href="/#call"
                className="inline-flex min-h-[28px] items-center text-[14.5px] text-slate outline-none transition-colors hover:text-paper focus-visible:ring-2 focus-visible:ring-mint/60"
              >
                Start a project
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-[clamp(40px,6vh,64px)] flex flex-wrap items-center justify-between gap-[18px] border-t border-line pt-[26px]">
          <span className="font-mono text-[12px] tracking-[0.03em] text-muted">
            © 2026 MintCode · Remote-first across the Gulf, UK &amp; US
          </span>
          <div className="flex gap-[22px]">
            <Link
              href="/privacy"
              className="inline-flex min-h-[44px] items-center text-[13px] text-muted outline-none transition-colors hover:text-slate focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-[44px] items-center text-[13px] text-muted outline-none transition-colors hover:text-slate focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
