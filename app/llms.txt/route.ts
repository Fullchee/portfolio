import { siteBaseUrl } from "#lib/metadata";
import type { CaseStudy } from "#lib/caseStudy";
import { projects, projectUrl } from "#lib/projects";
import { roles, roleUrl } from "#lib/roles";

// Format follows the llms.txt proposal: https://llmstxt.org/
export const dynamic = "force-static";

const caseStudyLinks = <T extends CaseStudy>(caseStudies: T[], url: (caseStudy: T) => string) =>
  caseStudies
    .map(
      (caseStudy) =>
        `- [${caseStudy.title}](${siteBaseUrl}${url(caseStudy)}): ${caseStudy.description}`,
    )
    .join("\n");

export function GET() {
  const body = `# Fullchee Zhang

> Full-stack developer at Citylitics who makes teams faster with docs, tooling and teaching.

## Experience

${caseStudyLinks(roles, roleUrl)}

## Projects

${caseStudyLinks(projects, projectUrl)}

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
