import { SkillList, Skill } from "../common/SkillList";
import { Icon } from "../common/icons";
import Link from "next/link";

interface Props {
  demoUrl: string;
  skills: Skill[];
  githubProject?: string;
}

const Button = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: string;
  text: string;
}) => {
  return (
    <a
      href={href}
      className="pl-1 no-underline transform duration-300 hover:scale-105 focus:scale-105"
    >
      <div className="flex bg-blue-500 p-4 rounded-md text-white ">
        <Icon icon={icon} className="h-6 w-6 fill-current text-white" />
        <p className="m-0 p-0 pl-1">{text}</p>
      </div>
    </a>
  );
};

export const ProjectOverview = ({ skills, githubProject, demoUrl }: Props) => {
  return (
    <div className="grid max-w-lg">
      <div>
        <h2>Made with</h2>
        <ul className=" list-none grid sm:grid-cols-2 xl:grid-cols-3 pl-0">
          <SkillList skills={skills} />
        </ul>
      </div>
      <div className="flex flex-row items-center pt-4 space-x-4">
        {githubProject ? (
          <Button
            href={`https://www.github.com/Fullchee/${githubProject}`}
            icon="github"
            text="GitHub"
          />
        ) : null}
        <Button href={demoUrl} icon="launch" text="Launch" />
      </div>
    </div>
  );
};
