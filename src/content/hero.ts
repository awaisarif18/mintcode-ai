// Hero copy — typed data. Section component renders from this (see CLAUDE.md).
// Approved copy lives in design-reference/MintCode-Design-Prompts.md.

export type CTA = { label: string; href: string };

/** A row in the "direct-line · session live" terminal panel. */
export type TerminalRow = {
  /** Leading glyph — "›" for the in-progress line, "✓" for completed. */
  mark: string;
  label: string;
  /** Right-aligned status; empty for the opening line. */
  status: string;
};

export const hero = {
  /** Mono eyebrow — typed character by character on mount. */
  eyebrow: "// SENIOR-LED PRODUCT ENGINEERING STUDIO",

  /** H1 split so "directly" can render in mint. */
  headline: {
    before: "Work ",
    accent: "directly",
    after: " with the engineers building your product.",
  },

  subhead:
    "MintCode helps startups and businesses design, build and scale SaaS platforms, AI-powered applications and custom software — with no middlemen and no handoffs.",

  ctas: {
    primary: { label: "Book a Discovery Call", href: "#call" },
    secondary: { label: "See Our Work", href: "#work" },
  } satisfies Record<string, CTA>,

  /** Mono microline, rendered with hairline "·" separators between items. */
  microline: ["No middlemen", "No handoffs", "You meet the makers"],

  terminal: {
    label: "direct-line · session live",
    rows: [
      { mark: "›", label: "establishing direct line", status: "" },
      { mark: "✓", label: "senior engineers", status: "assigned" },
      { mark: "✓", label: "middlemen", status: "removed" },
      { mark: "✓", label: "handoffs", status: "removed" },
      { mark: "✓", label: "junior bait-and-switch", status: "removed" },
    ] satisfies TerminalRow[],
  },
} as const;
