# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers: recruiters and engineering leads deciding whether to interview Fullchee. They skim the home page, open one or two case studies, and decide in minutes.

## Product Purpose

fullchee.com is Fullchee Zhang's personal portfolio. It exists to get Fullchee interviews. Success means a hiring manager leaves able to say what Fullchee does differently and wants an interview.

## Positioning

A team force multiplier: a full-stack developer who makes the whole team faster through docs, tooling and teaching. Shipped apps are supporting proof, not the headline. Most dev portfolios show only apps; this one shows how Fullchee raises a team's output.

## Operating Context

- Current role: full-stack developer at Citylitics. The home intro and case studies still name Forma.ai as current and must be updated.
- Visitors arrive from a résumé, LinkedIn or a shared link, often on a phone.
- Reference pages (`/uses`, `/llm/tooling`, `/llm/code-review`) double as evidence of opinionated tooling practice.

## Capabilities and Constraints

- Next.js App Router, Tailwind CSS 4, TypeScript, MDX, Storybook; hosted on Vercel.
- Routes: `/` home, `/project` and `/project/<slug>` case studies, `/uses`, `/llm/*`, `/attributions`.
- Project records live in `lib/projects.ts`; terms are defined in `CONTEXT.md` (Project, Case study, Skill).
- Dark mode is required.

## Brand Commitments

- Name: Fullchee Zhang. The home intro splits the name as "Full / chee".
- Existing assets, not binding: the stacked full/chee logo (`public/fullchee.svg`, `public/fullchee-og.png`) and headshot (`public/professional-face.jpg`).

## Evidence on Hand

- Docs-as-code: built Forma's internal MkDocs site alone, 30k+ words; public notes at fullcheezhang.com.
- Teaching: led a monthly Dev Article Club at Forma; top contributor to TIL Slack channels.
- Case studies: Forma, IBM, Toronto water monitor, Hong Fa Granite, Reminders, Batch calendar events (`lib/projects.ts`).
- Tooling pages: `/uses`, `/llm/tooling`, `/llm/code-review`.
- Absent: Citylitics case study, testimonials, metrics on team impact. Do not invent them.

## Product Principles

1. Lead with the force-multiplier story; apps prove it, they don't replace it.
2. Show evidence, not adjectives: link the docs, the tooling pages, the shipped work.
3. Respect a skimming hiring manager: the pitch lands in the first screen.
4. Keep copy current; a stale employer undermines every other claim.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, keyboard access and focus states, in light and dark themes.
