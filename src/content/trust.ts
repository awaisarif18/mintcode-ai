// Trust strip copy — typed data. Section renders from this (see CLAUDE.md).
// Approved copy lives in design-reference/MintCode-Design-Prompts.md (Prompt 1).
// No fake logos, no testimonials — only the real stack + honest signals.

/** One marquee item: a bordered tech chip, or a dot-prefixed honest signal. */
export type TrustItem = { label: string; chip: boolean };

/** Single ordered list (chips interleaved with signals), mirrors the design
    reference order. Signals bookend the real stack. */
export const trust: TrustItem[] = [
  { label: "Senior-led", chip: false },
  { label: "React", chip: true },
  { label: "Next.js", chip: true },
  { label: "NestJS", chip: true },
  { label: "Node", chip: true },
  { label: "Python", chip: true },
  { label: "PostgreSQL", chip: true },
  { label: "AWS", chip: true },
  { label: "Production SaaS shipped", chip: false },
  { label: "Remote-first across the Gulf, UK & US", chip: false },
];
