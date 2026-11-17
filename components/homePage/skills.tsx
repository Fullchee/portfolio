import { SkillList } from "#components/skill/SkillList";

// TODO: clicking on the skill will filter the projects with that skill

const frontendSkills = [
  { icon: "react", label: "React" },
  { icon: "typescript-icon.svg", label: "TypeScript" },
  { icon: "js", label: "JavaScript" },
  { icon: "html5", label: "HTML & CSS" },
  { icon: "storybook.svg", label: "Storybook" },
  { icon: "sass", label: "LESS and SASS" },
];

const backendSkills = [
  { icon: "django.svg", label: "Django" },
  { icon: "python.svg", label: "Python" },
  { icon: "database", label: "SQL" },
  { icon: "postgresql.svg", label: "Postgres" },
  { icon: "node-js", label: "Node.js" },
];

export const Skills = () => {
  return (
    <section className="mb-8 flex flex-col flex-wrap">
      <h2 id="skills" className="pb-4 font-mono-display text-2xl tracking-wider">
        Skills
      </h2>
      <SkillList title="Frontend" skills={frontendSkills} />
      <SkillList title="Backend" skills={backendSkills} />
      <p className="pt-10">I stay up to date by</p>
      <ul>
        <li>
          listening to the <a href="https://syntax.fm/">Syntax.FM podcast</a>
        </li>
        <li>
          <a href="https://zerotomastery.io/blog/?tag=WDM#monthly">
            reading Zero To Mastery's web dev newsletter
          </a>
        </li>
        <li>
          working on <a href="https://github.com/Fullchee">side projects</a>
        </li>
      </ul>
    </section>
  );
};
