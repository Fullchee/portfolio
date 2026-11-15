# A software-engineer portfolio in the age of AI (2025–2026)

Researched 2026-11-14 for fullchee.com. Goals come from `PRODUCT.md`: get interviews from hiring managers who skim on a phone, and lead with the team force-multiplier story.

## Summary of recommendations

- **Show judgment, not output.** Hiring orgs now grade how you steer, review and fix AI work. Case studies should show decisions, trade-offs and what you rejected ([Canva](https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews)).
- **Write it yourself.** Employers want your own thinking, and some select hard for writing. Human-written case studies and docs are the strongest signal you can post ([Anthropic](https://www.anthropic.com/candidate-ai-guidance), [Oxide RFD 3](https://rfd.shared.oxide.computer/rfd/3)).
- **Make every claim checkable.** Hiring managers fear fake experience. Link the docs, PRs, repos and live demos behind each claim ([Greenhouse](https://www.greenhouse.com/newsroom/an-ai-trust-crisis-70-of-hiring-managers-trust-ai-to-make-faster-and-better-hiring-decisions-only-8-of-job-seekers-call-it-fair)).
- **Add an analysis write-up.** One debugging or incident story shows skills that building alone hides ([Oxide RFD 3](https://rfd.shared.oxide.computer/rfd/3)).
- **Let AI search tools read the site.** Allow `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` and Googlebot. Blocking training bots is a separate choice and does not hide you from AI search ([OpenAI](https://developers.openai.com/api/docs/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).
- **Add `ProfilePage` + `Person` JSON-LD, a sitemap and full Open Graph tags.** These are cheap and owned by Google, schema.org and ogp.me. `llms.txt` is optional: Google says it does not need it ([Google AI features](https://developers.google.com/search/docs/appearance/ai-features)).
- **Hold the quality bars.** LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile, and WCAG 2.2 AA in both themes ([web.dev](https://web.dev/articles/vitals), [WCAG 2.2](https://www.w3.org/TR/WCAG22/)).

## 1. What hiring managers look for now

### The market signal

| Finding                                                                                                                                                                                                                                                                                            | Source                                                                                                                                                                                      | Type                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 65% of US hiring managers caught applicants using AI deceptively; 74% fear fake credentials or misrepresented experience more than a year ago; 39% run more in-person interviews to check authenticity. Survey of 4,136 people (1,236 recruiters and hiring managers) in US, UK, Ireland, Germany. | [Greenhouse, Nov 2025](https://www.greenhouse.com/newsroom/an-ai-trust-crisis-70-of-hiring-managers-trust-ai-to-make-faster-and-better-hiring-decisions-only-8-of-job-seekers-call-it-fair) | Survey, vendor-run                |
| 93% of talent pros say accurate skills assessment is key to quality of hire. Companies with the most skills-based searches are 12% more likely to make a quality hire. Survey of 1,271 recruiting managers, 23 countries, Sept 2024.                                                               | [LinkedIn Future of Recruiting 2025](https://business.linkedin.com/talent-solutions/resources/future-of-recruiting)                                                                         | Survey + platform data            |
| 84% of developers use or plan to use AI tools; only 33% trust its accuracy; 66% say the top frustration is output that is "almost right, but not quite".                                                                                                                                           | [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai)                                                                                                             | Survey with published methodology |

**Takeaway:** AI-made applications are cheap and distrusted. Proof that a human did the work, and that the reader can verify it, is now worth more.

### What hiring orgs say they assess

| Org                                                                                         | What they say                                                                                                                                                                                                        | Portfolio implication                                                  |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Canva](https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews) (Jun 2025) | Requires AI in coding interviews. Weak candidates "lacked the judgment to guide AI effectively". Asks: "Can they identify and fix issues in AI-generated code?" and "make sound technical decisions".                | Show review and decision skills: what you changed, rejected or caught. |
| [Anthropic](https://www.anthropic.com/candidate-ai-guidance)                                | "Create your first draft yourself, then use Claude to refine it." "We want to see your actual experience and how you think."                                                                                         | Write the case studies yourself. AI may edit, not author.              |
| [Oxide, RFD 3](https://rfd.shared.oxide.computer/rfd/3)                                     | Asks every candidate for work, writing and analysis samples. A work sample "can be the truest way to assess a candidate's ability". Analysis of a misbehaving system covers skills building "often left unexplored". | Publish a design doc, a writing sample and a debugging story.          |
| [Oxide, RFD 576](https://rfd.shared.oxide.computer/rfd/0576)                                | "Our hiring process very much selects for writers." Public writing must not "be read as LLM-authored."                                                                                                               | Writing that reads as generic AI text can count against you.           |

### Practitioner advice (secondary)

- **Josh Comeau** advises 2–5 projects, "a highlight reel", not an index of everything ([joshwcomeau.com](https://www.joshwcomeau.com/effective-portfolio/)). This is one hiring practitioner's opinion, with no data. Treat it as secondary.
- **Not found:** no primary source gives a measured time a reviewer spends on a portfolio. Claims like "recruiters spend 6 seconds" are unverified.

## 2. Being found and read by AI agents and LLMs

### Crawlers: who does what

| Bot                | Owner      | Purpose                                                                                                                                                                                                  | Honors robots.txt?  | Block it? |
| ------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------- |
| `Googlebot`        | Google     | Search, incl. AI Overviews and AI Mode                                                                                                                                                                   | Yes                 | No        |
| `Google-Extended`  | Google     | Token only. Controls Gemini training and grounding. "Does not impact a site's inclusion in Google Search" ([Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)) | Yes                 | Optional  |
| `OAI-SearchBot`    | OpenAI     | ChatGPT search results. Opted-out sites "will not be shown in ChatGPT search answers" ([OpenAI](https://developers.openai.com/api/docs/bots))                                                            | Yes                 | No        |
| `GPTBot`           | OpenAI     | Model training                                                                                                                                                                                           | Yes                 | Optional  |
| `ChatGPT-User`     | OpenAI     | User-triggered visits; robots.txt "may not apply"                                                                                                                                                        | Partly              | n/a       |
| `Claude-SearchBot` | Anthropic  | Search indexing ([Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler))                                           | Yes                 | No        |
| `ClaudeBot`        | Anthropic  | Training                                                                                                                                                                                                 | Yes                 | Optional  |
| `Claude-User`      | Anthropic  | Fetches pages when a user asks Claude                                                                                                                                                                    | Yes                 | No        |
| `PerplexityBot`    | Perplexity | Search results; "not used to crawl content for AI foundation models" ([Perplexity](https://docs.perplexity.ai/guides/bots))                                                                              | Implied, not stated | No        |
| `Perplexity-User`  | Perplexity | User-triggered; "generally ignores robots.txt rules"                                                                                                                                                     | No                  | n/a       |

- **robots.txt** must sit at `/robots.txt`, lowercase. It is advisory, "not a form of access authorization" ([RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html)).
- **For a portfolio,** the goal is to be found. Allow every search and user bot. Blocking training bots is a values choice; it does not change AI search visibility.

### What Google says you need for AI features

- "There are no additional requirements to appear in AI Overviews or AI Mode" ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- "You don't need to create new machine readable files, AI text files, or markup" ([same page](https://developers.google.com/search/docs/appearance/ai-features)).
- **What still matters:** indexable pages, text content (not text in images), and structured data that matches visible text.

### Structured data

| Item               | Spec                                                                                                                                        | Notes                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `ProfilePage`      | [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/profile-page)                                  | Valid for "blog 'About Me' pages". Requires `mainEntity` (Person). Recommends `dateCreated`, `dateModified`.                    |
| `Person`           | [schema.org/Person](https://schema.org/Person), [Google](https://developers.google.com/search/docs/appearance/structured-data/profile-page) | Requires `name`. Useful: `jobTitle`, `worksFor`, `sameAs` (GitHub, LinkedIn), `image`, `description`, `knowsAbout`, `alumniOf`. |
| JSON-LD in Next.js | `node_modules/next/dist/docs/01-app/02-guides/json-ld.md`                                                                                   | Render a `<script type="application/ld+json">` in `page.tsx`. Escape `<` as `<` to avoid XSS.                                   |

### llms.txt

- **What it is:** a Markdown file at `/llms.txt`. Only an H1 is required, then a blockquote summary and H2 link lists. It also suggests `.md` copies of pages ([llmstxt.org](https://llmstxt.org/)).
- **Who reads it:** the spec says it is "used on demand", mostly at inference. No crawler operator above says it reads it. Google says AI text files are not needed ([Google](https://developers.google.com/search/docs/appearance/ai-features)).
- **Verdict:** low cost, unproven benefit. It may help coding agents and tools a user points at the site. Add it after the items above.

### Open Graph and semantic HTML

- **Open Graph** requires `og:title`, `og:type`, `og:image`, `og:url`. Recommended: `og:description`, `og:site_name`, `og:image:alt` ([ogp.me](https://ogp.me/)). A `profile` type exists for a person.
- **Landmarks:** one `main`; `header`, `nav`, `footer` at body level; put all content in a landmark ([W3C APG](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)).
- **Bylines and dates:** Google asks whether content shows "first-hand expertise" and carries a byline that leads to author info ([Google helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **AI-written pages:** Google warns against content with "little to no originality" and says to fact-check all AI output ([Google gen-AI guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)).

## 3. Core quality bars

| Area               | Bar                                                                                                        | Source                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| LCP                | ≤ 2.5 s                                                                                                    | [web.dev Core Web Vitals](https://web.dev/articles/vitals)                                                                            |
| INP                | ≤ 200 ms                                                                                                   | same                                                                                                                                  |
| CLS                | ≤ 0.1                                                                                                      | same                                                                                                                                  |
| Measure at         | 75th percentile, mobile and desktop split                                                                  | same                                                                                                                                  |
| Text contrast      | 4.5:1 (3:1 large text), WCAG 1.4.3 AA                                                                      | [WCAG 2.2](https://www.w3.org/TR/WCAG22/)                                                                                             |
| Non-text contrast  | 3:1 for UI parts and focus rings, 1.4.11 AA                                                                | same                                                                                                                                  |
| Focus not obscured | Focused item not fully hidden by sticky headers, 2.4.11 AA (new in 2.2)                                    | same                                                                                                                                  |
| Target size        | ≥ 24×24 CSS px, with spacing/inline exceptions, 2.5.8 AA (new in 2.2)                                      | [W3C Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)                                       |
| Mobile             | Google indexes the mobile version. Keep the same content, structured data, title and description on mobile | [Google mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) |

## 4. Differentiators AI can't fake easily

| Differentiator                                         | Why it works                                                                                         | Evidence                                                                                                                                                                          |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Original writing** (docs, notes, articles)           | Hiring orgs select for writing; Google rewards first-hand, original content                          | [Oxide RFD 576](https://rfd.shared.oxide.computer/rfd/0576), [Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)                            |
| **Decision write-ups** (design docs, ADRs, trade-offs) | Matches what AI-era interviews grade: judgment over AI output                                        | [Canva](https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews)                                                                                                  |
| **Analysis / debugging story**                         | Shows skills building hides                                                                          | [Oxide RFD 3](https://rfd.shared.oxide.computer/rfd/3)                                                                                                                            |
| **Live demos and public repos**                        | Verifiable; counters fear of misrepresented experience                                               | [Greenhouse](https://www.greenhouse.com/newsroom/an-ai-trust-crisis-70-of-hiring-managers-trust-ai-to-make-faster-and-better-hiring-decisions-only-8-of-job-seekers-call-it-fair) |
| **Open-source contributions**                          | Public, dated, reviewed by others. GitHub counted 518.7M merged PRs in public repos in its 2025 year | [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)                             |
| **How you use AI** (tooling pages, review rules)       | Shows AI fluency with judgment, which Canva tests directly                                           | [Canva](https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews)                                                                                                  |

- **Gap:** no primary source measures how much a portfolio moves a hiring decision. The case above rests on what hiring orgs say they assess.

## Checklist for this repo

Each item maps a finding to a change. None are made.

### Content (biggest effect on interviews)

| #   | Change                                                                                           | Finding                         | Where                        |
| --- | ------------------------------------------------------------------------------------------------ | ------------------------------- | ---------------------------- |
| 1   | Rewrite case studies as decision write-ups: problem, options, choice, result, what you'd change. | §1 Canva, Oxide                 | `app/project/*/page.tsx`     |
| 2   | Add a Citylitics Role case study with linked evidence. No invented metrics.                      | §1 Greenhouse; `PRODUCT.md` gap | new `app/project/citylitics` |
| 3   | Add one analysis write-up: a bug or incident you traced.                                         | §4 Oxide RFD 3                  | new page                     |
| 4   | Link proof next to each force-multiplier claim: notes site, `/llm/*`, PRs, talks.                | §1 Greenhouse                   | `components/homePage/*`      |
| 5   | Add a "last updated" date and byline to case studies and `/llm/*`.                               | §2 Google helpful content       | page templates               |
| 6   | Cut the home project list to the 2–5 that prove the pitch.                                       | §1 Comeau (secondary)           | `lib/projects.ts`            |

### Discoverability

| #   | Change                                                                                                                                | Finding            | Where                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------- |
| 7   | Add `app/robots.ts`: allow all; link the sitemap. Decide on `GPTBot`, `ClaudeBot`, `Google-Extended` separately.                      | §2 crawler table   | `app/robots.ts` (none today)  |
| 8   | Add `app/sitemap.ts` listing every route.                                                                                             | §2 Google          | `app/sitemap.ts` (none today) |
| 9   | Add `ProfilePage` + `Person` JSON-LD on `/`: `name`, `jobTitle`, `worksFor` Citylitics, `sameAs` GitHub/LinkedIn/notes site, `image`. | §2 structured data | `app/page.tsx`                |
| 10  | Fix the root fallback description ("made with Next.js, Tailwind.css and love") to the pitch.                                          | §2 Google          | `app/layout.tsx`              |
| 11  | Add `og:site_name`; consider `og:type` `profile` on `/`. Per-page OG alt text already exists.                                         | §2 ogp.me          | `lib/metadata.ts`             |
| 12  | Optional: add `/llms.txt` with the pitch and links to case studies and `/llm/*`.                                                      | §2 llms.txt        | `public/llms.txt`             |

### Quality

| #   | Change                                                                                    | Finding               | Where                                 |
| --- | ----------------------------------------------------------------------------------------- | --------------------- | ------------------------------------- |
| 13  | Check field CWV in Vercel Speed Insights at p75 on mobile.                                | §3 web.dev            | Vercel dashboard                      |
| 14  | Audit focus visibility under the header and 24×24 px targets (footer links, skill icons). | §3 WCAG 2.5.8, 2.4.11 | `components/header.tsx`, `footer.tsx` |
| 15  | Make the job title in the intro a `<p>`, not an `<h2>`: it is a subtitle, not a section.  | §2 semantic HTML      | `components/homePage/intro.tsx`       |
