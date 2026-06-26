// Case-study data — typed, status-driven (see CLAUDE.md). Section components
// render real fields ONLY when status is "published". Honesty guardrail:
// in-progress studies carry no real content — placeholders live in the UI.

export type CaseStudy = {
  slug: string;
  name: string;
  status: "published" | "in-progress";
  /** Published only — real, provided content. */
  descriptor?: string;
  tech?: string[];
  result?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tradesync-pro",
    name: "TradeSync Pro",
    status: "published",
    descriptor: "Real-time MT5 copy-trading platform.",
    tech: ["Next.js", "NestJS", "Python", "Microservices"],
    result:
      "Eliminated manual position-sizing errors at near-zero infrastructure cost.",
  },
  {
    slug: "chronic-pain-free",
    name: "Chronic Pain Free",
    status: "in-progress",
  },
];
