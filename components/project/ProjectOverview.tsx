import { Icon } from "#components/common/icons";
import { SkillList } from "#components/homePage/SkillList";
import type { Skill } from "#lib/skills";

interface Props {
  demoUrl?: string;
  skills?: Skill[];
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
      className="pl-1 no-underline transform duration-300 hover:scale-105 focus:scale-105 no-link-underline"
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

export const ProjectOverview = ({ skills = [], githubProject, demoUrl }: Props) => {
  const hasLinks = Boolean(demoUrl || githubProject);
  if (!hasLinks && skills.length === 0) return null;

  return (
    <div className="grid max-w-2xl mb-8">
      {hasLinks ? (
        <div className="flex flex-row items-center pt-4 space-x-4">
          {demoUrl ? (
            <Button href={demoUrl} icon="launch" text="Launch" className="primary-button" />
          ) : null}
          {githubProject ? (
            <Button
              href={`https://www.github.com/Fullchee/${githubProject}`}
              icon="github"
              text="GitHub"
              className="secondary-button"
            />
          ) : null}
        </div>
      ) : null}
      {skills.length > 0 ? (
        <div>
          <h2>Made with</h2>
          <SkillList skills={skills} />
        </div>
      ) : null}
    </div>
  );
};
