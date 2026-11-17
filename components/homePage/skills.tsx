import { SkillList } from "#components/skill/SkillList";
import type { SkillId } from "#lib/skills";

// TODO: clicking on the skill will filter the projects with that skill

const frontendSkills: SkillId[] = [
  "react",
  "typescript",
  "javascript",
  "html",
  "storybook",
  "sass",
];

const backendSkills: SkillId[] = ["django", "python", "sql", "postgres", "node"];

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
