import { siteBaseUrl } from "#lib/metadata";
import { caseStudiesOf, caseStudyUrl, type CaseStudyKind } from "#lib/caseStudy";

export const dynamic = "force-static";

const caseStudyLinks = (kind: CaseStudyKind) =>
  caseStudiesOf(kind)
    .map(
      (caseStudy) =>
        `- [${caseStudy.title}](${siteBaseUrl}${caseStudyUrl(caseStudy)}): ${caseStudy.description}`,
    )
    .join("\n");

/** Lists the site's pages for language models, per https://llmstxt.org/. */
export function GET() {
  const body = `# Fullchee Zhang

> Full-stack developer at Citylitics who makes teams faster with docs, tooling and teaching.

## Experience

${caseStudyLinks("role")}

## Projects

${caseStudyLinks("project")}

## Writing

- [LLM tooling](${siteBaseUrl}/llm/tooling): AI models and dev tools I use or dropped, and why
- [LLM code review](${siteBaseUrl}/llm/code-review): tools for reviewing AI-written plans, diagrams and UI

## Contact

- [Resume (PDF)](${siteBaseUrl}/assets/Fullchee-Resume.pdf)
- [GitHub](https://github.com/Fullchee)
- [LinkedIn](https://www.linkedin.com/in/fullchee)

## Optional

- [Uses](${siteBaseUrl}/uses): hardware and software I use
- [Attributions](${siteBaseUrl}/attributions): credits for images and icons
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
