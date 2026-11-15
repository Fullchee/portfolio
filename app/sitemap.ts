import type { MetadataRoute } from "next";
import { siteBaseUrl } from "#lib/metadata";
import { projects } from "#lib/projects";

const staticPaths = ["/", "/project", "/llm/tooling", "/llm/code-review", "/uses", "/attributions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = projects.map((project) => `/project/${project.slug}`);
  return [...staticPaths, ...projectPaths].map((path) => ({ url: `${siteBaseUrl}${path}` }));
}
