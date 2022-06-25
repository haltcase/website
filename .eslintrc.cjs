const [_, warn, error] = [0, 1, 2];

// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "simple-import-sort"],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			warn,
			{
				argsIgnorePattern: "^_",
				ignoreRestSiblings: true,
				varsIgnorePattern: "^_"
			}
		],
		"simple-import-sort/imports": error,
		"simple-import-sort/exports": error
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
