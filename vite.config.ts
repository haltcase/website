import { createOxfmtConfig } from "@haltcase/style/oxfmt";
import { createOxlintConfig } from "@haltcase/style/oxlint";
import { defineConfig } from "vite-plus";

export default defineConfig({
	fmt: createOxfmtConfig(),
	lint: createOxlintConfig({
		jsPlugins: [
			{
				name: "vite-plus",
				specifier: "vite-plus/oxlint-plugin"
			}
		],
		rules: {
			"vite-plus/prefer-vite-plus-imports": "error"
		},
		overrides: [
			{
				files: ["**/*.astro"],
				rules: {
					// This rule erroneously flags script tags in Astro files
					"import/unambiguous": "off"
				}
			},
			{
				files: ["**/*.svelte"],
				rules: {
					// Re-assignments are not detected correctly in Svelte components
					"prefer-const": "off"
				}
			}
		]
	}),
	staged: {
		"*": "vp fmt --no-error-on-unmatched-pattern"
	}
});
