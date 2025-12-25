import { ProjectCard, type ProjectInfo } from "#components/project/ProjectCard";

export const ProjectList = ({
	projects,
	skip,
}: {
	projects: ProjectInfo[];
	skip?: string;
}) => {
	const displayedProjects = projects.filter(({ title }) => title !== skip);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
			{displayedProjects.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</div>
	);
};
