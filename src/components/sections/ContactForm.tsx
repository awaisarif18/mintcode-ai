"use client";

// Contact form — the elevated card on the right of the Contact section. Posts to
// /api/contact with idle/submitting/success/error states; submit stays disabled
// until the GDPR consent box is checked; a hidden honeypot ("website") drops bots
// server-side. This file owns the card styling so both the form and the success
// panel render inside the same designed card (see design-reference/hero.html).

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

const cardBase =
  "rounded-[16px] border border-line bg-surface p-[clamp(22px,2.6vw,34px)] [box-shadow:0_36px_90px_-44px_color-mix(in_oklab,var(--mint),transparent_50%)]";
const labelBase =
  "font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase";
const inputBase =
  "w-full rounded-[10px] border border-line bg-void px-[13px] py-3 text-[15px] text-paper placeholder:text-muted outline-none transition-colors focus-visible:border-[color-mix(in_oklab,var(--mint),transparent_45%)] focus-visible:ring-2 focus-visible:ring-mint/40";

export default function ContactForm() {
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent || status === "submitting") return;

    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      budget: String(data.get("budget") ?? ""),
      consent,
      website: String(data.get("website") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setError(
          json.error ?? "Something went wrong. Please try again or email us.",
        );
        setStatus("error");
        return;
      }
      form.reset();
      setConsent(false);
      setStatus("success");
    } catch {
      setError("Network error. Please try again or email us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`flex min-h-[320px] flex-col items-start justify-center gap-4 ${cardBase}`}
      >
        <span
          aria-hidden
          className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full text-[22px] text-mint [animation:nodePulse_1.1s_ease-out_1] [background:color-mix(in_oklab,var(--mint),transparent_80%)]"
        >
          ✓
        </span>
        <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-paper">
          Message sent.
        </h3>
        <p className="max-w-[360px] text-[15.5px] leading-[1.6] text-slate">
          Thanks — a founder will read this and get back to you directly. No
          account managers in between.
        </p>
        <div className="inline-flex items-center gap-[9px] font-mono text-[12.5px] text-muted">
          <span className="text-mint">›</span>you ↔ senior engineer
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex flex-col gap-4 ${cardBase}`}>
      {/* Honeypot — visually hidden, off the tab order, ignored by humans. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-[14px] min-[560px]:grid-cols-2">
        <label className="flex flex-col gap-[7px]">
          <span className={labelBase}>Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputBase}
          />
        </label>
        <label className="flex flex-col gap-[7px]">
          <span className={labelBase}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputBase}
          />
        </label>
      </div>

      <label className="flex flex-col gap-[7px]">
        <span className={labelBase}>Company</span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company or project"
          className={inputBase}
        />
      </label>

      <label className="flex flex-col gap-[7px]">
        <span className={labelBase}>What are you building?</span>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="A sentence or two about the product."
          className={`${inputBase} resize-y leading-[1.5]`}
        />
      </label>

      <label className="flex flex-col gap-[7px]">
        <span className={labelBase}>
          Budget / Timeline <span className="text-line">(optional)</span>
        </span>
        <input
          name="budget"
          type="text"
          placeholder="e.g. ~$30k · launch in Q4"
          className={inputBase}
        />
      </label>

      <label className="mt-[2px] flex cursor-pointer items-start gap-[11px] text-[13px] leading-[1.5] text-slate">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-[3px] h-4 w-4 flex-none accent-mint"
        />
        <span>
          I consent to MintCode storing the details I&rsquo;ve submitted so they
          can respond to my enquiry, in line with their{" "}
          <Link
            href="/privacy"
            className="text-mint underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          (GDPR).
        </span>
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-[10px] border border-line bg-void px-[13px] py-3 text-[14px] text-paper"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!consent || status === "submitting"}
        className="mt-[6px] w-full rounded-[11px] bg-mint px-[22px] py-[15px] text-[16px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform,background,opacity] duration-300 hover:-translate-y-0.5 hover:[box-shadow:0_14px_40px_-12px_color-mix(in_oklab,var(--mint),transparent_42%)] active:translate-y-0 active:bg-deep-mint focus-visible:ring-2 focus-visible:ring-mint/60 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {status === "submitting" ? "Sending…" : "Book a Discovery Call"}
      </button>
    </form>
  );
}
