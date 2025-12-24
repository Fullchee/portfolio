import { SkillList } from "./SkillList";

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

const Skills = () => {
  return (
    <section className="flex-col flex flex-wrap mb-8">
      <h2
        id="skills"
        className="font-mono-display tracking-wider text-2xl pb-4"
      >
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
            reading newsletters
          </a>
        </li>
        <li>
          working on <a href="https://github.com/Fullchee">side projects</a>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
