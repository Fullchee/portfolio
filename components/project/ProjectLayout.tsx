import type { Skill } from "../homePage/SkillList";
import { Layout } from "../layout";
import { MainProjects } from "./MainProjects";
import { ProjectOverview } from "./ProjectOverview";

interface Props {
	children: React.ReactNode;
	title: string;
	description: string;
	skills: Skill[];
	demoUrl: string;
	githubProject?: string;
	imageProps: NextImageProps;
}

type NextImageProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const ProjectLayout = ({
	children,
	title,
	description,
	skills,
	demoUrl,
	githubProject,
	imageProps,
}: Props) => {
	return (
		<Layout
			title={title}
			description={description}
			imageProps={{
				url: imageProps.src,
				...imageProps,
			}}
		>
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
