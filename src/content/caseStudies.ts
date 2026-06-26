// Case-study data — typed, status-driven (see CLAUDE.md). Section components
// render real fields ONLY when status is "published". Honesty guardrail:
// in-progress studies carry no real content — placeholders live in the UI; and
// any metric/duration not yet verified stays a clearly-marked placeholder.

export type TimelinePhase = {
  phase: string;
  /** Placeholder until real durations are supplied — never invent week counts. */
  duration: string;
};

export type CaseMeta = {
  /** e.g. "Copy-trading platform" */
  type: string;
  /** e.g. "In production" */
  status: string;
  /** One-line headline result, shown in mint. */
  headline: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  status: "published" | "in-progress";

  // Card teaser (published only) ------------------------------------------
  /** One-line descriptor. */
  descriptor?: string;
  /** Concise tech chips for the teaser card. */
  tech?: string[];
  /** Headline result for the teaser card. */
  result?: string;

  // Detail page (published only) ------------------------------------------
  /** Hero meta row: type / status / headline result. */
  meta?: CaseMeta;
  /** The problem the client faced. */
  challenge?: string;
  /** What we built. */
  solution?: string;
  /** Key architectural/product decisions, shown under the solution. */
  keyDecisions?: string[];
  /** Real, verifiable outcomes only. */
  results?: string[];
  /** Full tech stack for the detail page. */
  techStack?: string[];
  /** Phases in order; durations are placeholders for now. */
  timeline?: TimelinePhase[];
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
    meta: {
      type: "Copy-trading platform",
      status: "In production",
      headline: "Eliminated manual position-sizing errors",
    },
    challenge:
      "The MT5 copy-trading sizing problem: mirroring a master account's trades across many follower accounts in real time, where each account has a different balance, leverage and risk — so the correct position size differs for every one. Doing that sizing by hand is slow and error-prone, and off-the-shelf copiers are expensive or infrastructure-heavy.",
    solution:
      "A three-layer microservices system. Lightweight Python desktop clients on each MT5 terminal stream trade events; a NestJS backend calculates the correct per-account position size and propagates trades in real time; and a Next.js dashboard handles control and monitoring. Sizing is now automatic and deterministic, architected to run lean.",
    keyDecisions: [
      "Desktop clients on each terminal to work within MT5's constraints, instead of fighting broker API limits.",
      "Event-driven microservices, so one account's issue never cascades to the rest.",
      "PostgreSQL as the single source of truth for every position and a full audit trail.",
      "Stateless services on AWS to keep the platform cheap to run at near-zero idle cost.",
    ],
    results: [
      "Eliminated manual position-sizing errors",
      "Near-zero infrastructure cost",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "Python (MT5 desktop clients)",
      "Microservices",
      "PostgreSQL",
      "AWS",
    ],
    // TODO: real durations from project records — do not invent week counts.
    timeline: [
      { phase: "Discovery & architecture", duration: "[ TBD ]" },
      { phase: "Real-time sync engine", duration: "[ TBD ]" },
      { phase: "Per-account position-sizing", duration: "[ TBD ]" },
      { phase: "Dashboard & monitoring", duration: "[ TBD ]" },
      { phase: "Testing & hardening", duration: "[ TBD ]" },
      { phase: "Launch", duration: "[ TBD ]" },
    ],
  },
  {
    slug: "chronic-pain-free",
    name: "Chronic Pain Free",
    status: "in-progress",
  },
];
