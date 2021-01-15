import { SkillList, Skill } from "../common/SkillList";
import { Icon } from "../common/icons";

interface Props {
  demoUrl: string;
  skills: Skill[];
  githubProject?: string;
}

const Button = ({
  href,
  icon,
  text,
  className,
}: {
  href: string;
  icon: string;
  text: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className="pl-1 no-underline transform duration-300 hover:scale-105 focus:scale-105"
    >
      <div className={`flex ${className}`}>
        <p className="m-0 p-0 pr-1">{text}</p>
        <Icon icon={icon} className="h-4 w-4 fill-current self-center" />
      </div>
    </a>
  );
};

export const ProjectOverview = ({ skills, githubProject, demoUrl }: Props) => {
  return (
    <div className="grid max-w-lg mb-8">
      <div className="flex flex-row items-center pt-4 space-x-4">
        <Button
          href={demoUrl}
          icon="launch"
          text="Launch"
          className="primary-button"
        />
        {githubProject ? (
          <Button
            href={`https://www.github.com/Fullchee/${githubProject}`}
            icon="github"
            text="GitHub"
            className="secondary-button "
          />
        ) : null}
      </div>
      <div>
        <h2>Made with</h2>
        <ul className=" list-none grid sm:grid-cols-2 xl:grid-cols-3 pl-0 no-list-item">
          <SkillList skills={skills} />
        </ul>
      </div>
    </div>
  );
};
