import Image from "next/image";

const SkillIcon = ({ name }: { name: string }) => {
  return (
    <Image
      src={`/static/${name}.svg`}
      className="pr-4"
      alt=""
      width={16}
      height={16}
    ></Image>
  );
};

const Skills = () => {
  return (
    <section className="flex-col flex flex-wrap mt-16 mb-16">
      <h3 id="skills" className="font-mono text-3xl pb-4">
        My skills
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
      <ul className="flex flex-col">
        <li className="py-2">
          <SkillIcon name="js" />
          JavaScript ES6
        </li>
        <li className="py-2">
          <SkillIcon name="html5" />
          HTML &amp; CSS
        </li>
        <li className="py-2">
          <SkillIcon name="react" />
          React
        </li>
        <li className="py-2">
          <SkillIcon name="sass" />
          LESS and SASS
        </li>
        <li className="py-2">
          <SkillIcon name="code-branch" />
          Git
        </li>
        <li className="py-2">
          <SkillIcon name="database" />
          SQL
        </li>
        <li className="py-2">
          <SkillIcon name="node-js" />
          Node.js
        </li>
        <li className="py-2"></li>
      </ul>
    </section>
  );
};

export default Skills;
