import { SkillList, Skill } from "../common/SkillList";
import { Icon } from "../common/icons";
import Link from "next/link";

interface Props {
  demoUrl: string;
  skills: Skill[];
  githubUrl?: string;
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
    <Link href={href}>
      <Icon icon={icon} className="h-8 w-8" />
      <a className="">{text}</a>
    </Link>
  );
};

export const ProjectOverview = ({ skills, githubUrl, demoUrl }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-row">
        {githubUrl ? (
          <Button href="github.com/Fullchee/" icon="github" text="GitHub" />
        ) : null}
        <Button href="hongfagranite.com" icon="launch" text="Launch" />
      </div>
      <div>
        <h2>Made with</h2>
        <ul className=" list-none grid sm:grid-cols-2 xl:grid-cols-3">
          <SkillList skills={skills} />
        </ul>
      </div>
    </div>
  );
};
