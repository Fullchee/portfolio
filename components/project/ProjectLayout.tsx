import { Layout } from "../layout";
import { ProjectOverview } from "./ProjectOverview";
import { Skill } from "../common/SkillList";
import { MainProjects } from "./MainProjects";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  skills: Skill[];
}

export const ProjectLayout = ({
  children,
  title,
  description,
  skills,
}: Props) => {
  <Layout title={`${title} - Fullchee Zhang`} description={description}>
    <h1>{title}</h1>
    <ProjectOverview
      demoUrl="https://calendar-shifts.netlify.app/"
      githubProject="calendar-shifts"
      skills={skills}
    />
    {children}
    <MainProjects skip={title} />
  </Layout>;
};
