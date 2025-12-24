const Attribution = ({ name }: { name: string }) => {
	return (
		<li>
			<a href={`https://fontawesome.com/icons/${name}?style=brands`}>
				"{name}" by Brands Style (fab) is licensed under CC Attribution 4.0
			</a>
		</li>
	);
};

export default function AttributionsPage() {
	return (
		<ul className="p-10">
			<Attribution name="js-square" />
			<Attribution name="html5" />
			<Attribution name="github" />
			<Attribution name="code-branch" />
			<Attribution name="database" />
			<Attribution name="node-js" />
			<Attribution name="sass" />
			<Attribution name="react" />
			<Attribution name="css3-alt" />
		</ul>
	);
}
