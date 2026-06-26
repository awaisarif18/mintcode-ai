// Process copy — typed data. Section renders from this (see CLAUDE.md).
// Approved copy lives in design-reference/MintCode-Design-Prompts.md (Prompt 4).

export type ProcessStep = {
  /** Mono index label, "01".."07". */
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dig into the problem, users and goals before writing a line of code.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A clear scope, milestones and timeline you actually understand.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "UI/UX that's clean, usable and built around how people really work.",
  },
  {
    number: "04",
    title: "Build",
    description: "Visible, working increments every week — no black box.",
  },
  {
    number: "05",
    title: "Test",
    description: "We break it before your users do.",
  },
  {
    number: "06",
    title: "Launch",
    description: "Shipped to production, set up to scale.",
  },
  {
    number: "07",
    title: "Support & Scale",
    description: "We stay on to keep it stable, fast and growing.",
  },
];
