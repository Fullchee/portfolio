import { ProjectList } from "#components/project/ProjectList";
import { buildMetadata } from "#lib/metadata";
import { projects } from "#lib/projects";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Projects I've been working on",
  path: "/project",
});

export default function ProjectIndexPage() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}
