# MintCode — Website · CLAUDE.md

Project memory for Claude Code. This loads into every session — keep it tight and current. Update the section checklist as you build.

## What this is
Marketing website for **MintCode**, a senior-led **product engineering studio** (deliberately *not* an "IT services company" or "software house"). A single-scroll homepage plus dedicated case-study pages. Audience: international startup founders, Gulf market first. Core message: **clients work directly with the senior engineers who build their product — no middlemen, no handoffs.**

## Stack & conventions
- **Next.js (App Router) + TypeScript + Tailwind CSS.**
- React Server Components by default. Add `"use client"` only on components that need animation, scroll listeners, or interactivity (Hero, Process, anything with reveal/hover logic).
- **Styling:** Tailwind utilities + design tokens defined as CSS variables in `src/app/globals.css`. Use the tokens — never hardcode raw hex in components.
- **Copy lives in `src/content/*`** as typed data (`services.ts`, `reasons.ts`, `process.ts`, `founders.ts`, `caseStudies.ts`). Section components render from that data. Case studies are fully data-driven so adding studies 3–4 later is just adding data, no new components.
- **Animation:** prefer CSS keyframes + the Web Animations API + a small `RevealOnScroll` hook in `src/lib`. No heavy animation libraries unless I ask. **Always honor `prefers-reduced-motion`.**
- Keep components small and composable across `components/layout`, `components/sections`, `components/ui`.
- Accessibility: WCAG AA. Semantic HTML, focus states, alt text. Mobile-first — Gulf/US buyers browse on phones.

## Commands
- `npm run dev` — local dev
- `npm run build` — production build (must pass clean before any deploy)
- `npm run lint` — lint

## Design system — single source of truth

**Dark-first.** Never pure `#000` or `#FFF`. Roughly 90% ink/paper/slate, ~10% mint, so mint stays electric.

Color tokens (define as CSS vars in `globals.css`):
- `--void #070C0A` — page background
- `--ink #0D1411` — section surfaces
- `--surface #121C17` — cards/panels
- `--hover #16241D` — card hover / pressed surfaces
- `--line #1E2D26` — borders, dividers, hairlines
- `--paper #EAF2EC` — primary text
- `--slate #8DA197` — secondary text / body
- `--muted #5E726A` — labels, metadata (large text only)
- `--mint #19D98C` — primary CTAs, links, active/"live" states
- `--deep-mint #0E8A63` — pressed states, darker mint fills
- mint glow: `rgba(25,217,140,0.14)` — ambient radial glows
- `--amber #F2B559` — RESERVED. Do not use unless explicitly asked.

Type:
- Headings + body: **General Sans** (Fontshare). Mono accent: **JetBrains Mono** for eyebrow labels, tech chips, terminal motifs. Load via `next/font` where possible.
- Tight heading tracking, generous body line-height, real size hierarchy.

Motion identity (keep consistent everywhere):
- **"Build-in":** elements assemble on scroll with precise machined easing `cubic-bezier(0.16, 1, 0.3, 1)` — never bouncy or springy.
- **"Live pulse":** mint signals living/active things (blinking cursor, pulsing node, draw-on connector line in the Process timeline).
- Subtle IntersectionObserver scroll reveals, glow-on-hover CTAs, restrained depth.

**Hero visual reference:** `design-reference/hero.html` has the exact look and motion. It is an export from a design tool in a **custom template format** — translate its styling and animations into React + Tailwind. Do **NOT** copy its `<x-dc>`, `support.js`, `{{ }}`, `sc-for`, `sc-if`, or `style-hover`/`style-active` syntax; those don't exist in React.

**Full section copy:** `design-reference/MintCode-Design-Prompts.md` contains the exact, approved copy for every section. Pull text from there.

## Honesty guardrails — hard rules, never violate
- **Only three founders appear anywhere on the site:** Muhammad Awais Arif (CEO & Founder), Huzaifa Shahid (Co-Founder, Engineering), Azhan Saeed (Co-Founder, Partnerships). Do NOT add any other named person, role, photo, or experience hint — not in copy, not in placeholder data, not in comments.
- **No fabricated testimonials, client names, logos, or metrics.** For any real content not yet provided, use a clearly-labeled placeholder (e.g. `{/* TODO: real metric from client */}`) — never invent it.
- **No "Inc" or any corporate suffix** — not incorporated yet.
- Do not describe the specialist bench as full-time staff; it's an on-call network.
- **No phone or WhatsApp numbers.** Contact = form + email + LinkedIn only. Include a GDPR consent checkbox (EU/UK clients).

## Sections — homepage scroll order & status
- [✅] Nav — sticky, transparent → blur/border on scroll
- [✅] 1. Hero — headline "Work directly with the engineers building your product." (build from hero.html reference)
- [✅] 2. Trust strip — factual tech + "senior-led", no fake logos
- [✅] 3. What We Build — 6 service cards
- [✅] 4. Why MintCode — 6 cards, "Direct founder & engineer access" first & emphasized
- [✅] 5. Process — 7-step timeline with draw-on mint line
- [✅] 6. Featured Work — 2 real studies (TradeSync Pro, Chronic Pain Free); layout grows to 4
- [✅] 7. Founders — 3 cards (photo slot, name, role, one line, LinkedIn)
- [ ] 8. Contact + Footer — form, email, LinkedIn, GDPR checkbox; footer with no "Inc"
- [ ] Case-study detail template — `/work/[slug]`, data-driven
- [ ] /work index page
- [ ] Legal/utility — `/privacy`, `/terms`, `not-found.tsx`
- [ ] Form handler — `api/contact/route.ts` (Resend or Formspree)
- [ ] SEO baseline — metadata, OG image, sitemap, Organization schema

# src/lib not created; Hero uses inline buildIn delays, not a shared hook

## Out of scope for launch — do not build yet
Blog, resources/downloads, careers page, full About page. These come later.

## Working agreement
- Build one section at a time, in order. Show a plan before large work.
- After each section: ensure `npm run build` passes, check mobile, then commit.
- Update the checklist above when a section is done.



Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
