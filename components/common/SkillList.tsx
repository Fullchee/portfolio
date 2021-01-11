import { Icon } from "./icons";

const SkillItem = ({ label, icon }: { label: string; icon: string }) => {
  return (
    <li className="py-2">
      <SkillIcon>
        <Icon className="fill-current text-blue-400" icon={icon} />
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

export type Skill = {
  icon: string;
  label: string;
};

export const SkillList = ({ skills }: { skills: Skill[] }) => {
  return (
    <>
      {skills.map(({ icon, label }) => (
        <SkillItem key={icon} icon={icon} label={label} />
      ))}
    </>
  );
};

export default SkillList;
