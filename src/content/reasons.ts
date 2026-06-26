// "Why MintCode" copy — typed data. Section renders from this (see CLAUDE.md).
// Approved copy lives in design-reference/MintCode-Design-Prompts.md (Prompt 3).
// Honest reasons only — the first is our core differentiator (emphasized card).

export type Reason = {
  /** Mono index label, "01".."06". */
  number: string;
  title: string;
  description: string;
  /** First item — rendered as the emphasized left card. */
  differentiator?: boolean;
};

export const reasons: Reason[] = [
  {
    number: "01",
    title: "Direct founder & engineer access",
    description:
      "Talk to the senior people building your product, every week — not through an account manager.",
    differentiator: true,
  },
  {
    number: "02",
    title: "Senior-led work",
    description:
      "Principal-level engineering shapes every decision, from architecture to the last detail.",
  },
  {
    number: "03",
    title: "Fast iteration",
    description:
      "A small, low-overhead team means working software in days, not quarters.",
  },
  {
    number: "04",
    title: "Startup-friendly",
    description:
      "We work the way founders do: lean budgets, fast calls, no enterprise bureaucracy.",
  },
  {
    number: "05",
    title: "Product thinking",
    description:
      "We care whether it works for your users and your business, not just whether it compiles.",
  },
  {
    number: "06",
    title: "Honest partner",
    description:
      "Straight answers, real timelines, no fabricated metrics or hidden junior staff.",
  },
];
