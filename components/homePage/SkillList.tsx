import { Icon } from "../common/icons";

const SkillItem = ({ label, icon }: { label: string; icon: string }) => {
	return (
		<li className="py-2">
			<div className="w-8 h-8 mr-4 rounded-full bg-blue-50 inline-flex justify-center items-center">
				<Icon className="fill-current text-blue-400" icon={icon} />
			</div>
			{label}
		</li>
	);
};

export type Skill = {
	icon: string;
	label: string;
};

interface SkillListProps {
	title?: string;
	skills: Skill[];
}

export const SkillList = ({ title, skills }: SkillListProps) => {
	return (
		<section>
			{title && <h3>{title}</h3>}
			<ul className="flex flex-wrap skills no-list-item">
				{skills.map(({ icon, label }) => (
					<SkillItem key={icon} icon={icon} label={label} />
				))}
			</ul>
		</section>
	);
};

export default SkillList;
