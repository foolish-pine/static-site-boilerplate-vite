module.exports = {
	env: {
		es2022: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	extends: ["eslint:recommended", "plugin:css-import-order/recommended"],
	plugins: ["import", "unused-imports"],
	rules: {
		"import/order": [2, { alphabetize: { order: "asc" } }],
		"unused-imports/no-unused-imports": "error",
	},
};
