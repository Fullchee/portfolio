import { Layout } from "../layout";
import { ProjectOverview } from "./ProjectOverview";
import { Skill } from "../common/SkillList";
import { MainProjects } from "./MainProjects";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
  demoUrl: string;
  githubProject?: string;
}

export const ProjectLayout = ({
  children,
  title,
  description,
  skills,
  demoUrl,
  githubProject,
}: Props) => {
  return (
    <Layout title={`${title} - Fullchee Zhang`} description={description}>
      <h1>{title}</h1>
      <ProjectOverview
        demoUrl={demoUrl}
        githubProject={githubProject}
        skills={skills}
      />
      {children}
      <h2 className="pt-12 pb-6">Other projects</h2>
      <MainProjects skip={title} />
    </Layout>
  );
};
