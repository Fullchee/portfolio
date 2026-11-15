import type { MetadataRoute } from "next";
import { siteBaseUrl } from "#lib/metadata";
import { projects, projectUrl } from "#lib/projects";
import { roles, roleUrl } from "#lib/roles";

const staticPaths = ["/", "/project", "/llm/tooling", "/llm/code-review", "/uses", "/attributions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyPaths = [...roles.map(roleUrl), ...projects.map(projectUrl)];
  return [...staticPaths, ...caseStudyPaths].map((path) => ({ url: `${siteBaseUrl}${path}` }));
}
