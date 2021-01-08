import { ProjectList, ProjectInfo } from "../project/ProjectList";

export const HighlightedProjects = () => {
  const projects: ProjectInfo[] = [
    {
      description: `Static site for a local business in English and Chinese`,
      linkLabel: "View project",
      title: "HongFaGranite.com",
      url: "/project/hong-fa-granite",
      image: {
        alt: "screenshot of hong fa granite.com",
        path: "/assets/projects/hong-fa-granite.png",
      },
    },
    {
      description: `Static site for a local business in English and Chinese`,
      linkLabel: "View project",
      title: "HongFaGranite.com",
      url: "/project/hong-fa-granite",
      image: {
        alt: "screenshot of hong fa granite.com",
        path: "/assets/projects/hong-fa-granite.png",
      },
    },
  ];

  return (
    <>
      <h2 className="font-monoDisplay text-3xl pb-8">projects</h2>
      <ProjectList projects={projects} />
    </>
  );
};

export default HighlightedProjects;
