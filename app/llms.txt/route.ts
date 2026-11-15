import { siteBaseUrl } from "#lib/metadata";
import { projects } from "#lib/projects";

// Format follows the llms.txt proposal: https://llmstxt.org/
export const dynamic = "force-static";

export function GET() {
  const projectLinks = projects
    .map(
      ({ slug, title, description }) =>
        `- [${title}](${siteBaseUrl}/project/${slug}): ${description}`,
    )
    .join("\n");

  const body = `# Fullchee Zhang

> Full-stack developer at Citylitics who makes teams faster with docs, tooling and teaching.

## Projects

${projectLinks}

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
