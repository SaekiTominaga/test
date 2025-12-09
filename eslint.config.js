// @ts-check

import w0sConfig from "@w0s/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...w0sConfig,
	{
		ignores: ["packages/*/dist"],
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				project: "./packages/*/tsconfig.json",
			},
		},
	},
];
