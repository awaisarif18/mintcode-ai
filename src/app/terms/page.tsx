// Terms of Service — single-column legal layout on --ink. Standard scaffolding
// for a studio engagement; specifics (legal entity, contact email, governing
// law) are {/* REVIEW */} placeholders. NOTE: scaffolding only — have a lawyer
// review before launch.

import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — MintCode",
  description:
    "The terms governing use of the MintCode website and initial enquiries.",
};

const LAST_UPDATED = "26 June 2026";

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

export default function TermsPage() {
  return (
    <main>
      <article className="relative z-[1] bg-ink px-[clamp(20px,4vw,40px)] pt-[clamp(56px,9vh,96px)] pb-[clamp(64px,10vh,116px)]">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow label="// TERMS" pulse={false} />
          <h1 className="mt-6 text-[clamp(34px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance text-paper">
            Terms of Service
          </h1>
          <p className="mt-5 font-mono text-[12.5px] tracking-[0.04em] text-muted">
            Last updated: {LAST_UPDATED}
          </p>

          <Section title="Overview">
            <p>
              These terms govern your use of the MintCode
              {/* REVIEW: legal entity name */} website and any enquiry you make
              through it. By using this site or contacting us, you agree to these
              terms. If you do not agree, please do not use the site.
            </p>
          </Section>

          <Section title="About MintCode">
            <p>
              MintCode is a senior-led product engineering studio. This website
              is an information and contact resource; submitting an enquiry does
              not by itself create a contract for services. Any engagement is
              governed by a separate written agreement.
              {/* REVIEW: confirm legal entity status and registered details */}
            </p>
          </Section>

          <Section title="Use of this website">
            <p>You agree to use this website lawfully and not to:</p>
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-mint">
              <li>
                Attempt to disrupt, attack or gain unauthorised access to the
                site or its infrastructure
              </li>
              <li>
                Submit unlawful, misleading or infringing content through the
                contact form
              </li>
              <li>Use the site to send spam or automated bulk enquiries</li>
            </ul>
          </Section>

          <Section title="Enquiries and proposals">
            <p>
              Information on this site, including descriptions of our work and
              process, is provided for general guidance and may change without
              notice. Any quote, scope or timeline is indicative until set out in
              a signed agreement between you and MintCode.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              The content, design, code and branding of this website are owned by
              MintCode or its licensors and are protected by applicable law. You
              may not copy, reproduce or reuse them without our prior written
              permission. Case-study material is shown with the relevant
              client&rsquo;s permission and remains their property where
              applicable.
            </p>
          </Section>

          <Section title="Disclaimer and liability">
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of
              any kind. To the fullest extent permitted by law, MintCode is not
              liable for any loss arising from your use of, or reliance on, this
              website. Nothing in these terms limits liability that cannot be
              limited under applicable law.
              {/* REVIEW: align liability wording with the studio's service agreement */}
            </p>
          </Section>

          <Section title="Privacy">
            <p>
              Our handling of personal data submitted through the contact form is
              described in our{" "}
              <Link
                href="/privacy"
                className="text-mint underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              , which forms part of these terms.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of{" "}
              {/* REVIEW: governing jurisdiction, e.g. England & Wales */}
              <span className="text-paper">[ jurisdiction to be confirmed ]</span>
              , and any disputes are subject to the exclusive jurisdiction of its
              courts.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:hello@mintcode.dev"
                className="text-mint underline-offset-4 hover:underline"
              >
                hello@mintcode.dev
              </a>
              {/* REVIEW: real contact email + legal entity details */}.
            </p>
          </Section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
