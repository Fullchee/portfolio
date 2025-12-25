import preview from "#.storybook/preview";
import Footer from "./footer";

const meta = preview.meta({
	title: "Components/Footer",
	component: Footer,
	parameters: {
		layout: "fullscreen",
	},
});

export const Primary = meta.story({});

export default meta;
