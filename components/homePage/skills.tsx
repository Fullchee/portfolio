import { SkillList } from "../common/SkillList";

const Skills = () => {
  const skills = [
    { icon: "js", label: "JavaScript ES6+" },
    { icon: "html5", label: "HTML & CSS" },
    { icon: "react", label: "React" },
    { icon: "sass", label: "LESS and SASS" },
    { icon: "code-branch", label: "Git" },
    { icon: "database", label: "SQL" },
    { icon: "node-js", label: "Node.js" },
    { icon: "typescript-icon.svg", label: "TypeScript" },
  ];
  return (
    <section className="flex-col flex flex-wrap mb-8">
      <h2 id="skills" className="font-monoDisplay text-2xl pb-4">
        skills
      </h2>
      <ul className="flex flex-wrap skills no-list-item">
        <SkillList skills={skills} />
      </ul>
      <p className="pt-10">
        I learn and stay up to date by
        <ul>
          <li>
            listening to the <a href="https://syntax.fm/">Syntax podcast</a>
          </li>
          <li>
            <a href="https://zerotomastery.io/blog/web-developer-monthly-dec-2020/">
              ZTM web dev monthly newsletter
            </a>
          </li>
          <li>working on open source side projects</li>
          <li>
            I remember what I learn with{" "}
            <a href="https://apps.ankiweb.net/">Anki</a>
          </li>
        </ul>
      </p>
    </section>
  );
};

export default Skills;
