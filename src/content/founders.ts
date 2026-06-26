// Founders data — typed (see CLAUDE.md). HARD GUARDRAIL: exactly these three
// people appear anywhere on the site — no fourth founder, collaborator, or any
// other named person. LinkedIn URLs are the founders' real, provided profiles —
// never invent a URL.

export type Founder = {
  name: string;
  role: string;
  /** Initials shown on the gradient placeholder until a real photo exists. */
  initials: string;
  bio: string;
  /** Real LinkedIn profile URL. */
  linkedin: string;
};

export const founders: Founder[] = [
  {
    name: "Muhammad Awais Arif",
    role: "CEO & Founder",
    initials: "MA",
    bio: "Full-stack engineer (Next.js, NestJS, .NET, Python); shipped a real-time trading platform and multiple production apps.",
    linkedin: "https://www.linkedin.com/in/muhammadawaisarif/",
  },
  {
    name: "Huzaifa Shahid",
    role: "Co-Founder, Engineering",
    initials: "HS",
    bio: "CS graduate focused on engineering and delivery.",
    linkedin: "https://www.linkedin.com/in/huzaifashahid17/",
  },
  {
    name: "Azhan Saeed",
    role: "Co-Founder, Partnerships",
    initials: "AS",
    bio: "Leads client relationships — usually your first point of contact.",
    linkedin: "https://www.linkedin.com/in/azhan-codebricks/",
  },
];
