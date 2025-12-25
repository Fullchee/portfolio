import addonA11y from "@storybook/addon-a11y";
import { definePreview } from "@storybook/nextjs-vite";

export default definePreview({
	// 👇 Add your addons here
	addons: [addonA11y()],
	parameters: {
		// type-safe!
		a11y: {
			options: { xpath: true },
		},
	},
});
