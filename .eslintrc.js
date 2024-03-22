/* eslint-env node */
module.exports = {
	root: true,
	env: { node: true, es2024: true },
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', '@typescript-eslint', "vitest", "perfectionist", "deprecation"],
	extends: [
		'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:perfectionist/recommended-natural",
    'plugin:vue/vue3-recommended',
    "plugin:vitest/recommended",
	],
	rules: {
		'no-console': 0,
		'prettier/prettier': 'warn',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'vue/attribute-hyphenation': 0,
    'vue/v-on-event-hyphenation': 0,

    // These off/less-strict-by-default rules work well for this repo and we like them on.
		"@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],

		// These on-by-default rules don't work well for this repo and we like them off.
		"no-case-declarations": "off",
		"no-constant-condition": "off",
		"no-inner-declarations": "off",
		"no-mixed-spaces-and-tabs": "off",

		// Stylistic concerns that don't interfere with Prettier
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" },
		],
		"no-useless-rename": "error",
		"object-shorthand": "error",
		"perfectionist/sort-objects": [
			"error",
			{
				order: "asc",
				"partition-by-comment": true,
				type: "natural",
			},
		],
	},
  ignorePatterns: ["node_modules", "coverage*"],
  overrides: [
		{
			extends: [
				"plugin:@typescript-eslint/strict",
				"plugin:@typescript-eslint/stylistic",
			],
			files: ["**/*.ts", "**/*.vue"],
			parser: "@typescript-eslint/parser",
			rules: {
				// These off-by-default rules work well for this repo and we like them on.
				"logical-assignment-operators": [
					"error",
					"always",
					{ enforceForIfStatements: true },
				],
				"operator-assignment": "error",

				// These on-by-default rules don't work well for this repo and we like them off.
				"jsdoc/require-param": "off",
				"jsdoc/require-property": "off",
				"jsdoc/require-returns": "off",
			},
		},
		{
			files: "**/*.vue/*.ts",
			rules: {
				"n/no-missing-import": [
					"error",
					{ allowModules: ["create-typescript-app"] },
				],
			},
		},
		{
			excludedFiles: ["**/*.vue/*.ts"],
			extends: [
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
			],
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
			rules: {
				// These off-by-default rules work well for this repo and we like them on.
				"deprecation/deprecation": "error",

				// These more-strict-by-default rules don't work well for this repo and we like them less strict.
				"@typescript-eslint/no-unnecessary-condition": [
					"error",
					{
						allowConstantLoopConditions: true,
					},
				],
				"@typescript-eslint/prefer-nullish-coalescing": [
					"error",
					{ ignorePrimitives: true },
				],
			},
		},
		{
			files: "**/*.test.ts",
			rules: {
				// These on-by-default rules aren't useful in test files.
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
			},
		},
	],
  reportUnusedDisableDirectives: true,
};