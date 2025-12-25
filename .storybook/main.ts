import { defineMain } from "@storybook/nextjs-vite/node";

export default defineMain({
	framework: "@storybook/nextjs-vite",
	stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
	],
});
