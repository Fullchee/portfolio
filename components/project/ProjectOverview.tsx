import { Icon } from "#components/common/icons";
import { SkillList } from "#components/skill/SkillList";
import type { Skill } from "#lib/skills";

interface Props {
  demoUrl?: string | undefined;
  skills?: Skill[] | undefined;
  githubProject?: string | undefined;
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
  className: string;
}) => {
  return (
    <a
      href={href}
      className="no-link-underline transform pl-1 no-underline duration-300 motion-safe:hover:scale-105 motion-safe:focus:scale-105"
    >
      <div className={`flex ${className}`}>
        <p className="m-0 p-0 pr-1">{text}</p>
        <span className="inline-flex h-4 w-4 items-center justify-center self-center">
          <Icon icon={icon} />
        </span>
      </div>
    </a>
  );
};

const ProjectLinks = ({ demoUrl, githubProject }: Omit<Props, "skills">) => {
  if (demoUrl === undefined && githubProject === undefined) return null;

  return (
    <div className="flex flex-row items-center space-x-4 pt-4">
      {demoUrl === undefined ? null : (
        <Button href={demoUrl} icon="launch" text="Launch" className="primary-button" />
      )}
      {githubProject === undefined ? null : (
        <Button
          href={`https://www.github.com/Fullchee/${githubProject}`}
          icon="github"
          text="GitHub"
          className="secondary-button"
        />
      )}
    </div>
  );
};

const ProjectSkills = ({ skills }: { skills: Skill[] }) => {
  if (skills.length === 0) return null;

  return (
    <div>
      <h2>Made with</h2>
      <SkillList skills={skills} />
    </div>
  );
};

export const ProjectOverview = ({ skills = [], githubProject, demoUrl }: Props) => {
  if (demoUrl === undefined && githubProject === undefined && skills.length === 0) return null;

  return (
    <div className="mb-8 grid max-w-2xl">
      <ProjectLinks demoUrl={demoUrl} githubProject={githubProject} />
      <ProjectSkills skills={skills} />
    </div>
  );
};
