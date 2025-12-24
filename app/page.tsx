import AboutMe from "../components/homePage/aboutMe";
import Intro from "../components/homePage/intro";
import Skills from "../components/homePage/skills";
import Layout from "../components/layout";
import { MainProjects } from "../components/project/MainProjects";
import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
	title: "Fullstack Engineer | Fullchee Zhang",
	description:
		"Portfolio made with Next.js, Tailwind.css and love by Fullchee Zhang",
	path: "/",
});

export default function HomePage() {
	return (
		<Layout>
			<Intro />
			<AboutMe />
			<Skills />
			<h2 className="font-mono-display tracking-wider pb-8 text-2xl">
				Projects
			</h2>
			<MainProjects />
		</Layout>
	);
}
