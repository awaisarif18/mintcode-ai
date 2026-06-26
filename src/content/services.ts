// "What We Build" copy — typed data. Section renders from this (see CLAUDE.md).
// Approved copy lives in design-reference/MintCode-Design-Prompts.md (Prompt 2).
// Outcome-focused lines only — no buzzwords, no invented claims.

export type Service = {
  /** Mono index label, "01".."06". */
  number: string;
  title: string;
  description: string;
  /** Desktop column span on the 6-col grid. */
  span: 3 | 2 | 6;
  /** The wide 06 card uses a horizontal layout. */
  wide?: boolean;
};

export const services: Service[] = [
  {
    number: "01",
    title: "SaaS Platforms",
    description:
      "Subscription products, dashboards and portals built to handle real users and grow with your revenue.",
    span: 3,
  },
  {
    number: "02",
    title: "AI Solutions",
    description:
      "Chatbots, automation and agentic workflows that do real work, not demos that break in production.",
    span: 3,
  },
  {
    number: "03",
    title: "MVP Development",
    description:
      "From idea to a live, usable MVP in weeks, so you can put it in front of customers fast.",
    span: 2,
  },
  {
    number: "04",
    title: "Custom Software & Internal Tools",
    description:
      "The system your business actually runs on, built around your workflow, not a template.",
    span: 2,
  },
  {
    number: "05",
    title: "Product Design & Strategy",
    description:
      "UI/UX and product thinking that make the software clear to use and worth paying for.",
    span: 2,
  },
  {
    number: "06",
    title: "Scale & Support",
    description:
      "We don't disappear at launch; we keep it stable, fast and improving as you grow.",
    span: 6,
    wide: true,
  },
];
