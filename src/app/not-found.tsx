// 404 — on-brand, minimal. Mono status line + a short line, buttons back to
// Home and Work. Renders inside the root layout, so the site Nav is present.

import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <section className="relative z-[1] flex min-h-[calc(100vh-72px)] flex-col items-center justify-center overflow-hidden px-[clamp(20px,4vw,40px)] py-[clamp(56px,9vh,96px)] text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34%] h-[520px] w-[900px] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 blur-[36px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint), transparent 88%), transparent 64%)",
          }}
        />
        <div className="relative flex flex-col items-center">
          <Eyebrow label="// 404 — NOT FOUND" className="justify-center" />
          <h1 className="mt-6 text-[clamp(56px,11vw,128px)] font-semibold leading-[0.95] tracking-[-0.04em] text-paper">
            404
          </h1>
          <p className="mt-5 max-w-[440px] text-[clamp(16px,1.5vw,18px)] leading-[1.55] text-pretty text-slate">
            This page doesn&rsquo;t exist — or it moved. Let&rsquo;s get you back
            to something real.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-[13px]">
            <Link
              href="/"
              className="inline-flex items-center rounded-[11px] bg-mint px-[24px] py-[13px] text-[15.5px] font-semibold tracking-[-0.01em] text-void outline-none transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:[box-shadow:0_14px_40px_-12px_color-mix(in_oklab,var(--mint),transparent_40%)] focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              Back to Home
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-[11px] border border-line bg-transparent px-[22px] py-[12px] text-[15.5px] font-medium text-paper outline-none transition-[border-color,background] duration-300 hover:bg-hover hover:border-[color-mix(in_oklab,var(--mint),transparent_45%)] focus-visible:ring-2 focus-visible:ring-mint/60"
            >
              See our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
