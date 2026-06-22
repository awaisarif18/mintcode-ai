# MintCode — Dark Design System & Claude Design Prompts

A working brief. Use the **Foundation prompt (Prompt 0)** first in a fresh Claude Design session — it sets the DNA. Then paste the section prompts **one at a time**, in order. Claude Design keeps context within a session, so later prompts can just say "the system we established" and it'll know.

Each prompt tells Claude Design *what the section must do, contain, and feel like* — and deliberately leaves the *how* (exact layout, spacing, animation timing) open so it can design, not just assemble.

---

## The dark color system

Dark UI needs layered surfaces, not one flat black. These are the tokens:

**Backgrounds (3 elevation levels — near-black with a faint green undertone, never pure `#000`)**
- `Void` **`#070C0A`** — deepest page background
- `Ink` **`#0D1411`** — primary section surface, slightly raised
- `Surface` **`#121C17`** — cards and panels
- `Hover` **`#16241D`** — card hover / pressed surfaces

**Hairlines (structure-defining in dark UI — don't skip)**
- `Line` **`#1E2D26`** — borders, dividers, card outlines

**Text**
- `Paper` **`#EAF2EC`** — primary text (off-white with a faint green-cool cast; never `#FFFFFF`, which is harsh and templated)
- `Slate` **`#8DA197`** — secondary text, body copy on dark, captions
- `Muted` **`#5E726A`** — metadata, labels, disabled (large text only)

**Accent — mint, used sparingly so it stays electric**
- `Mint` **`#19D98C`** — primary CTAs, links, active/"live" states, the signature glow. On dark this passes contrast even as smaller text, so we can use it for links too.
- `Deep Mint` **`#0E8A63`** — pressed states, darker mint fills
- `Mint Glow` **`rgba(25,217,140,0.14)`** — ambient radial glows behind hero/active elements (this replaces the loud linear gradients that cheap agency sites overuse)

**Held in reserve (do NOT ship at launch)**
- `Amber` **`#F2B559`** — a single warm contrast color, only if case-study data viz later needs it. One accent done with discipline beats two.

**Rule of thumb:** ~90% ink + paper + slate, ~10% mint. If mint is everywhere, it stops meaning "alive."

---

## Type direction

- **Headlines:** a confident, slightly technical geometric/grotesk sans — e.g. **General Sans, Satoshi, or Geist**. Tight tracking, large sizes, real hierarchy. (Avoid default Inter — it's the #1 "templated" tell.)
- **Body:** clean, highly legible sans, generous line-height, comfortable measure.
- **Mono accent:** a monospace (e.g. **JetBrains Mono / Geist Mono**) for small labels, section eyebrows, tech chips, the "build-in" type effects. This is a cheap, ownable way to signal "engineers, not marketers."

---

## Motion identity (this is what makes it not look like everyone else)

Give the whole site **one coherent motion language**, not a grab-bag of effects. Two ideas, both tied to the brand:

1. **"Build-in."** Elements assemble on scroll the way code compiles — lines *draw on*, panels *snap into place*, mono labels *type in*. Easing is precise and engineered (custom cubic-bezier), never bouncy, springy, or cartoonish. Motion should feel *machined*.
2. **"The live pulse."** Mint is the signal for things that are alive/active — a slow-blinking cursor, a softly pulsing node, a connector line that lights up. Tiny, rare, intentional.

Plus: subtle scroll-triggered reveals, restrained parallax/depth, magnetic or glow-on-hover CTAs, and a faint cursor-aware glow on key surfaces. **Always respect `prefers-reduced-motion`.** When in doubt, less and slower.

---

## What to actively avoid (the "every Pakistani software house" checklist)

No generic blue/teal corporate gradients · no stock 3D blobs, robots, or isometric clipart · no rotating client-logo carousels (especially fake ones) · no buzzword soup ("leading provider of cutting-edge solutions") · no Bootstrap/templated card grids · no carousels of stock "team at laptops" photos · no pure-white surfaces · no bouncy/elastic animations. The target reference class is top-tier product-studio sites (Linear / Vercel / Stripe-level restraint), adapted with mint and our own motion.

## Honesty guardrails (hard constraints — pass these to Claude Design every time they're relevant)

- No fabricated testimonials, metrics, client names, or logos.
- Use only real provided copy; for missing real content (photos, screenshots, numbers) use clearly-marked placeholders — **never invent it.**
- No "Inc" or any corporate suffix anywhere (not incorporated yet).
- Do **not** include the senior engineering collaborator anywhere — no name, role, photo, or experience hint. Only three founders appear.
- Don't overstate the specialist bench as full-time staff — it's an on-call network.

---

# THE PROMPTS

## Prompt 0 — Foundation + global frame + hero

> You're designing the website for **MintCode**, a senior-led **product engineering studio** (deliberately *not* an "IT services company" or "software house"). It's early-stage, founder-led, remote-first, serving international startup founders. The single most important message: **clients work directly with the senior engineers who actually build their product — no middlemen, no handoffs, no junior bait-and-switch.**
>
> **Design ambition:** This must NOT look like a typical offshore software-house site. Avoid generic corporate gradients, stock 3D illustrations, fake logo carousels, buzzword copy, and templated card grids. Aim for the restraint, confidence, and craft of a top-tier Silicon Valley product studio — intentional whitespace, editorial typography, precise engineered motion, dark and quietly premium.
>
> **Theme — dark-first. Color tokens:**
> Backgrounds: Void `#070C0A` (page), Ink `#0D1411` (sections), Surface `#121C17` (cards), Hover `#16241D`. Hairlines: `#1E2D26`. Text: Paper `#EAF2EC` (primary), Slate `#8DA197` (secondary), Muted `#5E726A` (labels). Accent: Mint `#19D98C` (CTAs/links/active), Deep Mint `#0E8A63` (pressed), Mint Glow `rgba(25,217,140,0.14)` (ambient radial glows). Use ~90% ink/paper/slate and only ~10% mint, so mint stays electric. Never pure black or pure white.
>
> **Type:** technical geometric sans for headlines (General Sans / Satoshi / Geist — not Inter), clean legible sans for body, and a monospace for small eyebrow labels and tech chips.
>
> **Motion identity (one coherent language):** "build-in" — elements assemble on scroll like code compiling, with precise machined easing (never bouncy); and "the live pulse" — mint signals things that are alive (a blinking cursor, a pulsing node). Subtle scroll reveals, restrained depth, glow-on-hover CTAs. Respect `prefers-reduced-motion`.
>
> **Now build two things:**
> 1. A **minimal sticky top nav**: small wordmark (placeholder logo fine), links to Work / Process / Founders, and one mint primary CTA "Book a Discovery Call." It should feel light and get a subtle backdrop/blur on scroll.
> 2. The **hero**. Headline: *"Work directly with the engineers building your product."* Subheading: *"MintCode helps startups and businesses design, build and scale SaaS platforms, AI-powered applications and custom software — with no middlemen and no handoffs."* Two buttons: **Book a Discovery Call** (mint, primary) and **See Our Work** (secondary/ghost). The hero is the first impression and the place to establish the motion identity — surprise me with something intentional and ownable (not a stock illustration): consider a restrained code/terminal/architecture motif, a subtle mint glow, a typed-in mono line, or a quiet animated grid. Keep it confident and uncrowded.

## Prompt 1 — Trust strip

> Below the hero, add a slim **trust strip** — a single factual credibility band, no fake client logos and no testimonials. Content is the real tech we work in plus honest signals: **Senior-led · React · Next.js · NestJS · Node · Python · PostgreSQL · AWS · Production SaaS shipped · Remote-first across the Gulf, UK & US.** Treat the tech names as small mono chips or a quiet marquee. It should read as "real engineers, real stack," understated — a breath between the hero and the content, not a loud banner.

## Prompt 2 — What We Build (services)

> Add a **"What We Build"** section: six service cards. Each card is a short title + one outcome-focused line (no buzzwords). Use the Surface card color with hairline borders and a subtle mint glow or border-light on hover (the "live" cue). Lay them out with rhythm, not a flat 3×2 grid if you can make it more interesting. Content:
> 1. **SaaS Platforms** — Subscription products, dashboards and portals built to handle real users and grow with your revenue.
> 2. **AI Solutions** — Chatbots, automation and agentic workflows that do real work, not demos that break in production.
> 3. **MVP Development** — From idea to a live, usable MVP in weeks, so you can put it in front of customers fast.
> 4. **Custom Software & Internal Tools** — The system your business actually runs on, built around your workflow, not a template.
> 5. **Product Design & Strategy** — UI/UX and product thinking that make the software clear to use and worth paying for.
> 6. **Scale & Support** — We don't disappear at launch; we keep it stable, fast and improving as you grow.

## Prompt 3 — Why MintCode

> Add a **"Why MintCode"** section: six reasons, the first one visually emphasized because it's our core differentiator. Keep the same dark card language but make it feel distinct from the services section (different rhythm/layout). Content, first one strongest:
> 1. **Direct founder & engineer access** *(lead, emphasize)* — Talk to the senior people building your product, every week — not through an account manager.
> 2. **Senior-led work** — Principal-level engineering shapes every decision, from architecture to the last detail.
> 3. **Fast iteration** — A small, low-overhead team means working software in days, not quarters.
> 4. **Startup-friendly** — We work the way founders do: lean budgets, fast calls, no enterprise bureaucracy.
> 5. **Product thinking** — We care whether it works for your users and your business, not just whether it compiles.
> 6. **Honest partner** — Straight answers, real timelines, no fabricated metrics or hidden junior staff.

## Prompt 4 — Process timeline

> Add the **Process** section: a 7-step flow shown as an intentional timeline (horizontal on desktop, vertical on mobile). Steps: **Discovery → Planning → Design → Build → Test → Launch → Support & Scale.** Give each a one-line description. This is a strong place for the "build-in" motion: as the user scrolls, the connector line **draws on** in mint and each node **lights up / pulses** in sequence. Keep a persistent, quiet line near it: *"You talk to senior engineers at every step."* One-liners:
> - **Discovery** — We dig into the problem, users and goals before writing a line of code.
> - **Planning** — A clear scope, milestones and timeline you actually understand.
> - **Design** — UI/UX that's clean, usable and built around how people really work.
> - **Build** — Visible, working increments every week — no black box.
> - **Test** — We break it before your users do.
> - **Launch** — Shipped to production, set up to scale.
> - **Support & Scale** — We stay on to keep it stable, fast and growing.

## Prompt 5 — Featured Work (homepage teaser)

> Add a **Featured Work** teaser section with two project cards that link out to full case-study pages (don't build the full pages here). Each card: project name, a one-line descriptor, a couple of tech chips, and one honest headline result — designed to make someone want to click. No screenshots needed yet (use a tasteful placeholder slot). Make these cards feel like the most premium element on the page — this is what sells. Cards:
> - **TradeSync Pro** — Real-time MT5 copy-trading platform. Chips: Next.js · NestJS · Python · Microservices. Result line: *"Eliminated manual position-sizing errors at near-zero infrastructure cost."*
> - **Chronic Pain Free** — [placeholder — real one-liner, chips and result to be supplied; use a clearly-marked placeholder, do not invent details].
>
> Leave the layout able to grow to 3–4 cards later without redesign.

## Prompt 6 — Founders

> Add a **Founders** section: three cards, each with a real-photo slot (placeholder for now), name, role, one honest expertise line, and a LinkedIn link. Honest and human, not corporate headshots-on-white. Only these three people appear — no one else.
> - **Muhammad Awais Arif — CEO & Founder** — Full-stack engineer (Next.js, NestJS, .NET, Python); shipped a real-time trading platform and multiple production apps.
> - **Huzaifa Shahid — Co-Founder, Engineering** — CS graduate focused on engineering and delivery.
> - **Azhan Saeed — Co-Founder, Partnerships** — Leads client relationships — usually your first point of contact.

## Prompt 7 — Contact + footer

> Add the closing **Contact / CTA band** and the **footer**.
> Contact: a confident closing headline (something like "Tell us what you're building"), a short form (Name, Email, Company, "What are you building?", optional budget/timeline), a **GDPR consent checkbox** (we serve EU/UK clients), plus a direct email and a LinkedIn link. Add a note that a Calendly booking link will go here later. **No phone or WhatsApp numbers.**
> Footer: wordmark + the tagline, the nav links, LinkedIn, email, and a copyright line with **no "Inc" or corporate suffix**, plus links to Privacy and Terms. Keep it minimal and dark.

## Prompt 8 — Case study detail page (reusable template)

> Now design a **case-study detail page template** (separate page) using TradeSync Pro as the live example. Same dark system and motion. Structure, in order:
> - **Hero:** project name, one-line descriptor, and one headline result, with a placeholder for a primary product shot.
> - **Challenge** — the problem the client faced.
> - **Solution** — what we built and the key decisions.
> - **Tech Stack** — mono chips: Next.js · NestJS · Python desktop clients · Microservices · PostgreSQL · AWS.
> - **Timeline** — a simple visual of phases/weeks (placeholder durations for now).
> - **Results** — real, verifiable outcomes only (start with: eliminated manual position-sizing errors; near-zero infrastructure cost). Clearly-marked placeholders for any metric not yet supplied — do not invent numbers.
> - **Screenshots** — a clean gallery with placeholder slots.
> - **Bottom CTA:** "Want something like this? Book a discovery call."
> Make this template reusable so Chronic Pain Free and two future studies drop straight in.

## Prompt 9 — Work index page (optional, quick)

> Design a simple **Work index page** (`/work`): a short heading, and the same project cards from the Featured Work teaser in a clean grid that can grow to 3–4. No new content needed — reuse the cards and link each to its detail page.

---

### Working tips for the Claude Design session
- Do **Prompt 0** in a fresh session and get the hero/nav feeling right *before* adding sections — the foundation is what everything inherits.
- After each section, it's fine to refine in plain language ("make the mint glow softer," "tighten the headline spacing," "the cards feel too generic — give them more edge") before moving to the next prompt.
- Keep reminding it of the honesty guardrails whenever a section involves people, clients, metrics, or logos.
- Check every section on **mobile** — your Gulf and US buyers browse on phones first.
