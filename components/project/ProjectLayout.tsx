import type { Skill } from "../homePage/SkillList";
import { Layout } from "../layout";
import { MainProjects } from "./MainProjects";
import { ProjectOverview } from "./ProjectOverview";

interface Props {
	children: React.ReactNode;
	title: string;
	skills: Skill[];
	demoUrl: string;
	githubProject?: string;
}

export const ProjectLayout = ({
	children,
	title,
	skills,
	demoUrl,
	githubProject,
}: Props) => {
	return (
		<Layout>
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
