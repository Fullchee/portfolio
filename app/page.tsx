import AboutMe from "#components/homePage/aboutMe";
import Intro from "#components/homePage/intro";
import Skills from "#components/homePage/skills";
import { ProjectList } from "#components/project/ProjectList";
import { buildMetadata } from "#lib/metadata";
import { projects } from "#lib/projects";

export const metadata = buildMetadata({
  title: "Full-stack developer | Fullchee Zhang",
  description:
    "Fullchee Zhang is a full-stack developer who makes teams faster with docs, tooling and teaching.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Skills />
      <h2 className="font-mono-display tracking-wider pb-8 text-2xl">Projects</h2>
      <ProjectList projects={projects} />
    </>
  );
}
