import { Icon } from "#components/common/icons";
import type { Skill } from "#lib/skills";

const SkillItem = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <li className="flex items-center gap-4 py-2">
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-400">
        <Icon icon={icon} />
      </div>
      {label}
    </li>
  );
};

interface SkillListProps {
  title?: string;
  skills: Skill[];
}

export const SkillList = ({ title, skills }: SkillListProps) => {
  return (
    <section>
      {title === undefined ? null : <h3>{title}</h3>}
      <ul className="skills no-list-item flex flex-wrap">
        {skills.map(({ icon, label }) => (
          <SkillItem key={icon} icon={icon} label={label} />
        ))}
      </ul>
    </section>
  );
};
