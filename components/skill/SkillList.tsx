import { Icon } from "#components/common/icons";
import { skills as skillCatalog, type SkillId } from "#lib/skills";

const SkillItem = ({ id }: { id: SkillId }) => {
  const { label, icon } = skillCatalog[id];

  return (
    <li className="flex items-center gap-4 py-2">
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-surface text-brand-400">
        <Icon icon={icon} />
      </div>
      {label}
    </li>
  );
};

interface SkillListProps {
  title?: string;
  skills: SkillId[];
}

export const SkillList = ({ title, skills }: SkillListProps) => {
  return (
    <section>
      {title === undefined ? null : <h3>{title}</h3>}
      <ul className="skills no-list-item flex flex-wrap">
        {skills.map((id) => (
          <SkillItem key={id} id={id} />
        ))}
      </ul>
    </section>
  );
};
