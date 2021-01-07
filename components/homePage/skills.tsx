import { Icon } from "../common/icons";

const SkillItem = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <li className="py-2">
      <SkillIcon>
        <Icon className="fill-current text-blue-400" name={icon} />
      </SkillIcon>
      {label}
    </li>
  );
};

const SkillIcon = ({ children }: { children: any }) => {
  return (
    <div className="w-8 h-8 mr-4 rounded-full bg-blue-50 inline-flex justify-center items-center">
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <section className="flex-col flex flex-wrap mt-16 mb-16">
      <h3 id="skills" className="font-monoDisplay text-3xl pb-4">
        skills
      </h3>
      <p>
        Through my studies at U of T, I've gathered a solid foundation of
        computer science concepts.{" "}
      </p>
      <p className="py-4">
        I stay up to date by listening to the{" "}
        <a className=" underline hover:text-blue-500" href="https://syntax.fm/">
          Syntax podcast
        </a>
        ,{" "}
        <a
          className="underline hover:text-blue-500"
          href="https://zerotomastery.io/blog/web-developer-monthly-dec-2020/"
        >
          ZTM web dev monthly newsletter
        </a>{" "}
        and working on side projects.
      </p>
      <ul className="grid sm:grid-cols-3 xl:grid-cols-4">
        <SkillItem icon="js" label="JavaScript ES6+" />
        <SkillItem icon="html5" label="HTML &amp; CSS" />
        <SkillItem icon="react" label="React" />
        <SkillItem icon="sass" label="LESS and SASS" />
        <SkillItem icon="code-branch" label="Git" />
        <SkillItem icon="database" label="SQL" />
        <SkillItem icon="node-js" label="Node.js" />
      </ul>
    </section>
  );
};

export default Skills;
