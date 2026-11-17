import type { IconName } from "#components/common/icons";

/** Every Skill the site shows; Projects and the home page refer to them by id. */
export const skills = {
  css: { label: "CSS", icon: "css" },
  django: { label: "Django", icon: "django" },
  gatsby: { label: "Gatsby", icon: "gatsby" },
  html: { label: "HTML & CSS", icon: "html5" },
  javascript: { label: "JavaScript", icon: "js" },
  node: { label: "Node.js", icon: "node-js" },
  postgres: { label: "Postgres", icon: "postgresql" },
  python: { label: "Python", icon: "python" },
  react: { label: "React", icon: "react" },
  sass: { label: "Sass", icon: "sass" },
  sql: { label: "SQL", icon: "database" },
  storybook: { label: "Storybook", icon: "storybook" },
  typescript: { label: "TypeScript", icon: "typescript" },
} satisfies Record<string, { label: string; icon: IconName }>;

export type SkillId = keyof typeof skills;
