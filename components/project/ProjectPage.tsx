import Image from "next/image";
import { projectImageProps, projects, type Project } from "#lib/projects";
import { ProjectList } from "./ProjectList";
import { ProjectOverview } from "./ProjectOverview";

interface Props {
  children: React.ReactNode;
  project: Project;
}

export const ProjectPage = ({ children, project }: Props) => {
  return (
    <>
      <h1>{project.title}</h1>
      <ProjectOverview
        demoUrl={project.demoUrl}
        githubProject={project.githubProject}
        skills={project.skills}
      />
      {project.hero ? <Image {...projectImageProps(project.hero)} /> : null}
      {children}
      <h2 className="pt-12 pb-6">Other projects</h2>
      <ProjectList projects={projects} skipSlug={project.slug} />
    </>
  );
};
