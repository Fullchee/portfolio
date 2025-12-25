import preview from "#.storybook/preview";
import Header from "./header";

const meta = preview.meta({
	title: "Components/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
});

export const Primary = meta.story({});

export default meta;
