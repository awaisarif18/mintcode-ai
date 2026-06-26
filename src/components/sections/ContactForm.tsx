"use client";

// Contact form — posts to /api/contact with success/error states. Submit stays
// disabled until the GDPR consent box is checked. Includes a hidden honeypot
// ("website") that real users never see; bots that fill it are dropped server-side.
//
// NOTE: This is the wired form only — the full Contact section #8 (final copy,
// layout and surrounding design from design-reference) is not built yet.

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-[10px] border border-line bg-void px-[14px] py-[11px] text-[15px] text-paper placeholder:text-muted outline-none transition-colors focus-visible:border-[color-mix(in_oklab,var(--mint),transparent_45%)] focus-visible:ring-2 focus-visible:ring-mint/40";
const labelBase = "mb-2 block text-[13px] font-medium text-slate";

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
        className="rounded-[14px] border border-line bg-surface p-7 text-center"
      >
        <p className="font-mono text-[12.5px] tracking-[0.16em] text-mint">
          // MESSAGE SENT
        </p>
        <p className="mt-3 text-[16px] leading-[1.6] text-slate">
          Thanks — we&rsquo;ve got your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot — visually hidden, off the tab order, ignored by humans. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 min-[560px]:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelBase}>
          Company <span className="text-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company or project"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building?"
          className={`${inputBase} resize-y`}
        />
      </div>

      <label className="flex items-start gap-3 text-[14px] leading-[1.55] text-slate">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-[3px] h-[18px] w-[18px] flex-none accent-mint"
        />
        <span>
          I agree that MintCode may store and use the details above to respond to
          my enquiry, as described in the{" "}
          <Link
            href="/privacy"
            className="text-mint underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-[10px] border border-line bg-surface px-[14px] py-[11px] text-[14px] text-paper"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!consent || status === "submitting"}
        className="inline-flex w-fit items-center rounded-[11px] bg-mint px-[24px] py-[13px] text-[15.5px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform,opacity] duration-300 hover:-translate-y-0.5 hover:[box-shadow:0_14px_40px_-12px_color-mix(in_oklab,var(--mint),transparent_40%)] focus-visible:ring-2 focus-visible:ring-mint/60 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
