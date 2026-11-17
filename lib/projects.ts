import type { CaseStudyFields, CaseStudyImage } from "#lib/caseStudy";
import type { Skill } from "#lib/skills";

export type Project = CaseStudyFields & {
  kind: "project";
  hero?: CaseStudyImage;
  demoUrl?: string;
  githubProject?: string;
  skills?: Skill[];
};

const hongFaGraniteImage: CaseStudyImage = {
  alt: "Hong fa granite.com home page",
  path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650223661/portfolio/hong-fa-granite/hong-fa-granite_zgtsd1.png",
  width: 960,
  height: 601,
  placeholder:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP88eX9fwAJowPcYNPZ7gAAAABJRU5ErkJggg==",
};

const remindersImage: CaseStudyImage = {
  alt: "screenshot of the reminders project",
  path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224525/portfolio/reminders/reminders_ayjw5d.png",
  width: 960,
  height: 596,
  placeholder:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+uz7fwAJfQPTibFsiQAAAABJRU5ErkJggg==",
};

const batchCalendarEventsImage: CaseStudyImage = {
  alt: "Screenshot of the batch calendar events project on a mobile and desktop",
  path: "https://res.cloudinary.com/dnboci3v7/image/upload/v1650224576/portfolio/batch-calendar-events/batch-calendar-events_x1fjcv.png",
  width: 960,
  height: 596,
  placeholder:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+fznfwAJFAO6gSu5LgAAAABJRU5ErkJggg==",
};

export const projects: Project[] = [
  {
    kind: "project",
    slug: "toronto-water-monitor",
    title: "Toronto water monitor",
    description: "Check your Toronto water usage and send an email if usage spikes",
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
    kind: "project",
    slug: "hong-fa-granite",
    title: "Hong Fa Granite website",
    description: "Static site for a local business in English and Chinese",
    image: hongFaGraniteImage,
    hero: hongFaGraniteImage,
    demoUrl: "https://www.hongfagranite.com",
    skills: [
      { icon: "gatsby.svg", label: "Gatsby" },
      { icon: "react", label: "React" },
      { icon: "js", label: "JavaScript" },
      { icon: "sass", label: "SASS and Bulma" },
    ],
  },
  {
    kind: "project",
    slug: "reminders",
    title: "Reminders",
    description: "Save and play videos and podcasts with personal notes",
    image: remindersImage,
    hero: remindersImage,
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
    kind: "project",
    slug: "batch-calendar-events",
    title: "Batch calendar events",
    description: "Project to create batch calendar events in less than 30 seconds",
    image: batchCalendarEventsImage,
    hero: batchCalendarEventsImage,
    demoUrl: "https://calendar-shifts.netlify.app/",
    githubProject: "calendar-shifts",
    skills: [
      { icon: "react", label: "React" },
      { icon: "js", label: "JavaScript" },
      { icon: "css", label: "CSS" },
    ],
  },
];
