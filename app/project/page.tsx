import Layout from "../../components/layout";
import { MainProjects } from "../../components/project/MainProjects";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({
	title: "Projects",
	description: "Projects I've been working on",
	path: "/project",
});

export default function ProjectIndexPage() {
	return (
		<Layout>
			<h1>Projects</h1>
			<MainProjects />
		</Layout>
	);
}
