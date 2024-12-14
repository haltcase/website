import prettierConfig from "@haltcase/style/prettier";

/**
 * @type {import("prettier").Config}
 */
export default {
	...prettierConfig,
	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-svelte",
		...prettierConfig.plugins
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte"
			}
		}
	],
	astroAllowShorthand: true,
	tailwindAttributes: [
		"classNames",
		"clsx",
		"cx",
		"classes",
		"class:list",
		"twMerge"
	]
};
