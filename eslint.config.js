import { getEslintConfig } from "@haltcase/style/eslint";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
	{
		ignores: ["**/.*/", "src/env.d.ts"]
	},

	...getEslintConfig()
];
