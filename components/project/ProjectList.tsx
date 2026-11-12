import { ProjectCard } from "#components/project/ProjectCard";
import type { Project } from "#lib/projects";

export const ProjectList = ({ projects, skipSlug }: { projects: Project[]; skipSlug?: string }) => {
  const displayedProjects = projects.filter(({ slug }) => slug !== skipSlug);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};
