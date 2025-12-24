import { calculateSejour } from "../../../components/common/utilities";
import Layout from "../../../components/layout";
import { ProjectDescription } from "../../../components/project/ProjectDescription";
import { buildMetadata, siteBaseUrl } from "../../../lib/metadata";

export const metadata = buildMetadata({
	title: "Working at Forma",
	description: "My experience working as a full stack developer at Forma.ai",
	path: "/project/forma",
	images: [
		{
			url: `${siteBaseUrl}/assets/images/projects/forma/forma-logo.png`,
			width: 1000,
			height: 400,
			alt: "Forma.ai logo",
		},
	],
});

export default function FormaPage() {
	return (
		<Layout>
			<h1>Working at Forma.ai</h1>
			<p>
				Full-stack React, Django and SQL developer at Forma.ai for{" "}
				{calculateSejour(new Date("2021-03-01"))} years (since March 2021).
			</p>

			<ProjectDescription
				image={{
					src: "/assets/images/projects/forma/react.png",
					width: 320,
					height: 226,
					alt: "React logo",
					onRight: false,
				}}
			>
				<p>
					<strong>Building Dashboards</strong>
				</p>
				<p>
					I build modern incentive compensation dashboards and core components
					to help sales people understand how they're getting paid.
				</p>
				<p>
					On the frontend, I use TypeScript and JavaScript with React. Some
					libraries that I've used are
				</p>
				<ul>
					<li>
						<a href="https://react-select.com">React Select</a>
					</li>
					<li>
						<a href="https://recharts.org/">Recharts</a>
					</li>
					<li>
						<a href="https://redux.js.org/">Redux</a>
					</li>
				</ul>

				<p>To test the frontend, we use Jest and React Testing Library</p>

				<p>For styling, we use SASS</p>

				<p>
					I also started an article club and heavily contributed to TIL channels
				</p>
			</ProjectDescription>

			<ProjectDescription
				image={{
					src: "/assets/images/projects/forma/storybook.png",
					width: 256,
					height: 256,
					alt: "Storybook logo",
					onRight: false,
				}}
			>
				<p>
					<strong>Taking ownership of our Storybook instance</strong>
				</p>
				<p>
					Our team was growing really quickly and we needed a way to communicate
					and document our components. I took initiative to update Storybook and
					add our components.
				</p>
				<p>
					We also wanted a way to work more closely with the design team. So I
					integrated Figma iframes into Storybook.
				</p>
			</ProjectDescription>

			<ProjectDescription
				image={{
					src: "/assets/images/projects/ibm/eslint.svg",
					width: 240,
					height: 120,
					alt: "ESLint logo",
					onRight: false,
				}}
			>
				<p>
					<strong>ESLint</strong>
				</p>
				<p>
					Spearheaded the push to update ESLint to support more modern features
					to make the developer experience nicer (eg: support for optional
					chaining)
				</p>
			</ProjectDescription>
		</Layout>
	);
}
