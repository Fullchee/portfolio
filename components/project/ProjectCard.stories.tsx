import preview from "#.storybook/preview";
import type { ProjectInfo } from "./ProjectCard";
import { ProjectCard } from "./ProjectCard";

const meta = preview.meta({
	title: "Components/ProjectCard",
	component: ProjectCard,
	parameters: {
		layout: "centered",
	},
});

const mockProject: ProjectInfo = {
	title: "Sample Project",
	description:
		"This is a sample project card description showcasing the component.",
	linkLabel: "View Project",
	url: "",
	image: {
		alt: "Sample project image",
		path: "/assets/images/projects/ibm/IBM_logo.svg",
	},
};

export const Primary = meta.story({
	args: {
		project: mockProject,
	},
});

export const WithCustomDimensions = meta.story({
	args: {
		project: {
			...mockProject,
			title: "Project with Custom Size",
			image: {
				...mockProject.image,
				width: 600,
				height: 400,
			},
		},
	},
});

export default meta;
