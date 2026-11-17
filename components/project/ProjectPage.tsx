import Image from "next/image";
import { CaseStudyList } from "#components/caseStudy/CaseStudyList";
import { ProjectOverview } from "#components/project/ProjectOverview";
import { caseStudyImageProps } from "#lib/caseStudy";
import type { Project } from "#lib/projects";

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
      {project.hero ? <Image {...caseStudyImageProps(project.hero)} /> : null}
      {children}
      <h2 className="pt-12 pb-6">Other projects</h2>
      <CaseStudyList kind="project" skipSlug={project.slug} />
    </>
  );
};
