// Privacy Policy — single-column legal layout on --ink. GDPR-aware scaffolding
// for the contact form; specifics (legal entity, contact email, processors)
// are {/* REVIEW */} placeholders. NOTE: scaffolding only — have a lawyer
// review before launch, since the form collects EU/UK personal data.

import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — MintCode",
  description:
    "How MintCode collects, uses and protects personal data submitted through our contact form.",
};

const LAST_UPDATED = "26 June 2026";

// Reusable legal section: heading + prose, consistent spacing.
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-[clamp(20px,2vw,26px)] font-semibold tracking-[-0.02em] text-paper">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-[16px] leading-[1.7] text-slate">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <article className="relative z-[1] bg-ink px-[clamp(20px,4vw,40px)] pt-[clamp(56px,9vh,96px)] pb-[clamp(64px,10vh,116px)]">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow label="// PRIVACY" pulse={false} />
          <h1 className="mt-6 text-[clamp(34px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance text-paper">
            Privacy Policy
          </h1>
          <p className="mt-5 font-mono text-[12.5px] tracking-[0.04em] text-muted">
            Last updated: {LAST_UPDATED}
          </p>

          <Section title="Introduction">
            <p>
              This policy explains how MintCode{/* REVIEW: legal entity name */}{" "}
              (&ldquo;MintCode&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              collects and processes personal data when you contact us through
              this website. We are committed to handling your data lawfully,
              transparently and only for the purposes described below, in line
              with the EU General Data Protection Regulation (GDPR) and the UK
              GDPR.
            </p>
          </Section>

          <Section title="What we collect">
            <p>
              When you submit our contact form, we collect the information you
              choose to provide, which may include:
            </p>
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-mint">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your company or organisation (if provided)</li>
              <li>The contents of your message</li>
              <li>
                Your consent to be contacted, and the date and time it was given
              </li>
            </ul>
            <p>
              We do not collect special categories of data, and we ask that you
              do not include sensitive personal information in your message.
            </p>
          </Section>

          <Section title="How we use your data">
            <p>We use the information you submit to:</p>
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-mint">
              <li>Respond to your enquiry and correspond with you</li>
              <li>
                Discuss a potential project and, where relevant, provide a
                proposal
              </li>
              <li>Keep a record of our communications</li>
            </ul>
            <p>
              We do not use your data for automated decision-making or profiling,
              and we do not sell it to third parties.
            </p>
          </Section>

          <Section title="Legal basis">
            <p>
              We process your data on the basis of your{" "}
              <strong className="font-medium text-paper">consent</strong>, which
              you give by ticking the consent box and submitting the form, and on
              the basis of our{" "}
              <strong className="font-medium text-paper">
                legitimate interest
              </strong>{" "}
              in responding to enquiries about our services. You may withdraw your
              consent at any time (see &ldquo;Your rights&rdquo; below).
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              We keep enquiry data only as long as necessary to respond to you
              and, where a working relationship begins, for the duration of that
              relationship and a reasonable period afterwards for our records and
              legal obligations.{" "}
              {/* REVIEW: confirm the exact retention period, e.g. 24 months after last contact */}
              If no relationship develops, we delete or anonymise your enquiry
              within a defined period.
            </p>
          </Section>

          <Section title="Sharing and processors">
            <p>
              We use a small number of trusted service providers to operate this
              website and handle enquiries on our behalf. These may include:
            </p>
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-mint">
              <li>
                An email / form-delivery provider{" "}
                {/* REVIEW: name the processor, e.g. Resend / Formspree */}
              </li>
              <li>
                Our website hosting provider{" "}
                {/* REVIEW: name the host, e.g. Vercel */}
              </li>
            </ul>
            <p>
              Each processor handles data only on our instructions and under an
              appropriate data-processing agreement. Where data is transferred
              outside the EEA or UK, we rely on appropriate safeguards such as
              Standard Contractual Clauses.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under the GDPR and UK GDPR you have the right to access, rectify,
              erase, restrict or object to the processing of your personal data,
              the right to data portability, and the right to withdraw consent at
              any time. You also have the right to lodge a complaint with your
              local supervisory authority{" "}
              {/* REVIEW: e.g. the UK ICO, or the relevant EU authority */}.
            </p>
            <p>
              To exercise any of these rights, contact us using the details
              below.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              This website uses only the cookies strictly necessary for it to
              function. We do not use advertising or cross-site tracking cookies.
              {/* REVIEW: update if analytics are added later */}
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              For any privacy question or to exercise your rights, email us at{" "}
              <a
                href="mailto:hello@mintcode.dev"
                className="text-mint underline-offset-4 hover:underline"
              >
                hello@mintcode.dev
              </a>
              {/* REVIEW: real contact email + postal/legal entity details */}.
            </p>
          </Section>

          <p className="mt-12 text-[15px] leading-[1.6] text-muted">
            See also our{" "}
            <Link
              href="/terms"
              className="text-slate underline-offset-4 hover:text-paper hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
