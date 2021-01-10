import { ProjectList, ProjectInfo } from "../project/ProjectList";

export const HighlightedProjects = () => {
  const projects: ProjectInfo[] = [
    {
      title: "Working at IBM",
      description: `Read about my experience working as a front-end developer at IBM Canada`,
      image: {
        alt: "screenshot of IBM's original eight stripe logo",
        path: "/assets/images/projects/IBM_logo.svg",
      },
      linkLabel: "Read story",
      url: "/project/ibm",
    },
    {
      title: "Toronto water monitor",
      description: `Check your Toronto water usage and send an email if usage spikes`,
      image: {
        alt: "screenshot of my Toronto water monitor project",
        path: "/assets/images/projects/toronto-water-monitor.png",
      },
      linkLabel: "View project tour",
      url: "/project/toronto-water-monitor",
    },
    {
      title: "HongFaGranite.com",
      description: `Static site for a local business in English and Chinese`,
      image: {
        alt: "screenshot of hong fa granite.com",
        path: "/assets/images/projects/hong-fa-granite.png",
      },
      linkLabel: "View project tour",
      url: "/project/hong-fa-granite",
    },
    {
      title: "Reminders",
      description: `Save and play videos and podcasts with personal notes`,
      image: {
        alt: "screenshot of my Reminders project",
        path: "/assets/images/projects/reminders.png",
      },
      linkLabel: "View project tour",
      url: "/project/reminders",
    },
    {
      title: "Batch calendar events",
      description: `Create batch calendar events to Google Calendar in seconds`,
      image: {
        alt: "screenshot of my Batch calendar events project",
        path: "/assets/images/projects/batch-calendar-events.png",
      },
      linkLabel: "View project tour",
      url: "/project/batch-calendar-events",
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
