import { buildMetadata } from "#lib/metadata";
import type { Skill } from "#lib/skills";

export type ProjectImage = {
  alt: string;
  path: string;
  width: number;
  height: number;
  placeholder?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  linkLabel: string;
  image: ProjectImage;
  hero?: ProjectImage;
  ogImage?: ProjectImage;
  demoUrl?: string;
  githubProject?: string;
  skills?: Skill[];
};

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==";

export const projects: Project[] = [
  {
    slug: "forma",
    title: "Working at Forma",
    description: "My time as a full-stack developer at Forma.ai",
    linkLabel: "My Forma.ai story",
    image: {
      alt: "Forma logo",
      path: "/assets/images/projects/forma/f-logo.png",
      width: 500,
      height: 300,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMUz74HwAETAI7zNe8cAAAAABJRU5ErkJggg==",
    },
  },
  {
    slug: "ibm",
    title: "Working at IBM",
    description: "My time as a front-end developer at IBM Canada",
    linkLabel: "My IBM story",
    image: {
      alt: "IBM's original eight stripe logo",
      path: "/assets/images/projects/ibm/IBM_logo.svg",
      width: 500,
      height: 300,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUitz8HwAD4gInyYWRnAAAAABJRU5ErkJggg==",
    },
    ogImage: {
      alt: "old 8 stripe IBM logo",
      path: "/assets/images/projects/ibm/ibm-logo.png",
      width: 1000,
      height: 400,
    },
  },
  {
    slug: "toronto-water-monitor",
    title: "Toronto water monitor",
    description: "Check your Toronto water usage and send an email if usage spikes",
    linkLabel: "View project",
    image: {
      alt: "screenshot of my Toronto water monitor project",
      path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224465/portfolio/toronto-water-monitor/toronto-water-monitor_nogsmd.png",
      width: 500,
      height: 300,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==",
    },
    hero: {
      alt: "Screenshot of toronto water monitor project on the Safari browser",
      path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224467/portfolio/toronto-water-monitor/desktop_shadow_kn9zco.png",
      width: 960,
      height: 624,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO89vz3fwAJDAO5snBJQwAAAABJRU5ErkJggg==",
    },
    demoUrl: "https://toronto-water-monitor.netlify.app/",
    githubProject: "toronto-water-monitor-backend",
    skills: [
      { icon: "react", label: "React" },
      { icon: "typescript-icon.svg", label: "TypeScript" },
      { icon: "sass", label: "SASS" },
      { icon: "node-js", label: "Node.js" },
      { icon: "database", label: "SQL" },
    ],
  },
  {
    slug: "hong-fa-granite",
    title: "Hong Fa Granite website",
    description: "Static site for a local business in English and Chinese",
    linkLabel: "View project",
    image: {
      alt: "Hong fa granite.com home page",
      path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650223661/portfolio/hong-fa-granite/hong-fa-granite_zgtsd1.png",
      width: 960,
      height: 601,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88eX9fwAJowPcYNPZ7gAAAABJRU5ErkJggg==",
    },
    demoUrl: "https://www.hongfagranite.com",
    skills: [
      { icon: "gatsby.svg", label: "Gatsby" },
      { icon: "react", label: "React" },
      { icon: "js", label: "JavaScript" },
      { icon: "sass", label: "SASS and Bulma" },
    ],
  },
  {
    slug: "reminders",
    title: "Reminders",
    description: "Save and play videos and podcasts with personal notes",
    linkLabel: "View project",
    image: {
      alt: "screenshot of the reminders project",
      path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224525/portfolio/reminders/reminders_ayjw5d.png",
      width: 960,
      height: 596,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+uz7fwAJfQPTibFsiQAAAABJRU5ErkJggg==",
    },
    demoUrl: "https://fullchee-reminders.netlify.app/",
    githubProject: "reminders-frontend",
    skills: [
      { icon: "react", label: "React" },
      { icon: "js", label: "JavaScript" },
      { icon: "sass", label: "SASS" },
      { icon: "node-js", label: "Node.js" },
      { icon: "database", label: "SQL" },
    ],
  },
  {
    slug: "batch-calendar-events",
    title: "Batch calendar events",
    description: "Project to create batch calendar events in less than 30 seconds",
    linkLabel: "View project",
    image: {
      alt: "Screenshot of the batch calendar events project on a mobile and desktop",
      path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224576/portfolio/batch-calendar-events/batch-calendar-events_x1fjcv.png",
      width: 960,
      height: 596,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+fznfwAJFAO6gSu5LgAAAABJRU5ErkJggg==",
    },
    demoUrl: "https://calendar-shifts.netlify.app/",
    githubProject: "calendar-shifts",
    skills: [
      { icon: "react", label: "React" },
      { icon: "js", label: "JavaScript" },
      { icon: "css", label: "CSS" },
    ],
  },
];

export const getProject = (slug: string): Project => {
  const project = projects.find((candidate) => candidate.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
};

export const projectUrl = (project: Project) => `/project/${project.slug}`;

export const projectImageProps = ({ alt, path, width, height, placeholder }: ProjectImage) => ({
  src: path,
  alt,
  width,
  height,
  placeholder: "blur" as const,
  blurDataURL: placeholder ?? defaultBlurDataURL,
});

export const projectMetadata = (project: Project) => {
  const image = project.ogImage ?? project.hero ?? project.image;
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: projectUrl(project),
    images: [{ url: image.path, width: image.width, height: image.height, alt: image.alt }],
  });
};
