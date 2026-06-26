// Contact — the "// LET'S TALK" / #call section. Two columns: a detail rail
// (eyebrow, headline, subline, mono EMAIL/LINKEDIN/CALL list) and the elevated,
// wired form card (ContactForm). Subtle radial mint glow behind. Stacks at ≤820px
// (rail above form). Translated from #call in design-reference/hero.html.

import Eyebrow from "@/components/ui/Eyebrow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ContactForm from "@/components/sections/ContactForm";
import { contactEmail, companyLinkedIn } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="call"
      className="relative z-[1] overflow-hidden bg-void px-[clamp(20px,4vw,40px)] py-[clamp(74px,11vh,124px)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[620px] w-[980px] max-w-[96vw] -translate-x-1/2 blur-[36px]"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(28px,4vw,64px)] min-[820px]:grid-cols-2">
        {/* Detail rail */}
        <RevealOnScroll>
          <Eyebrow label="// LET'S TALK" />
          <h2 className="mt-5 text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance text-paper">
            Tell us what you&rsquo;re building.
          </h2>
          <p className="mt-[22px] max-w-[460px] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-pretty text-slate">
            A short note is enough. You&rsquo;ll hear back from a founder — not a
            sales pipeline.
          </p>

          <div className="mt-[34px] flex flex-col gap-[14px]">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex min-h-[44px] items-center gap-[11px] text-[16px] text-paper outline-none transition-colors hover:text-mint focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              <span className="w-[76px] flex-none font-mono text-[11px] tracking-[0.12em] text-muted">
                EMAIL
              </span>
              {contactEmail}
            </a>
            <a
              href={companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-[11px] text-[16px] text-paper outline-none transition-colors hover:text-mint focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              <span className="w-[76px] flex-none font-mono text-[11px] tracking-[0.12em] text-muted">
                LINKEDIN
              </span>
              linkedin.com/company/mintcode ↗
            </a>
            {/* CALL — explicit placeholder; no fake Calendly link yet. */}
            <div className="inline-flex items-center gap-[11px] text-[13.5px] text-muted">
              <span className="w-[76px] flex-none font-mono text-[11px] tracking-[0.12em] text-muted">
                CALL
              </span>
              <span className="font-mono tracking-[0.03em]">
                Calendly booking link coming here soon
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Form card */}
        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
