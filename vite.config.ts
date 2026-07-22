import { defineConfig } from "vite-plus";

export default defineConfig({
	lint: {
		jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
		rules: { "vite-plus/prefer-vite-plus-imports": "error" },
		options: { typeAware: true, typeCheck: true }
	},
	staged: {
		"*": "vp fmt"
	},
	fmt: {
		endOfLine: "lf",
		printWidth: 80,
		tabWidth: 2,
		useTabs: true,
		singleQuote: false,
		trailingComma: "none",
		astroAllowShorthand: true,
		sortPackageJson: false,
		svelte: {},
		ignorePatterns: []
	}
});
