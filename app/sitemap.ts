import type { MetadataRoute } from "next";
import { siteBaseUrl } from "#lib/metadata";
import { caseStudies, caseStudyUrl } from "#lib/caseStudy";

const staticPaths = ["/", "/project", "/llm/tooling", "/llm/code-review", "/uses", "/attributions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPaths = caseStudies.map((caseStudy) => caseStudyUrl(caseStudy));

  return [...staticPaths, ...caseStudyPaths].map((path) => ({ url: `${siteBaseUrl}${path}` }));
}
