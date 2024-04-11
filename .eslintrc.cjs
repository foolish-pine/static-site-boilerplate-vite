module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	extends: ["eslint:recommended", "prettier"],
	plugins: ["simple-import-sort", "unused-imports"],
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"unused-imports/no-unused-imports": "error",
	},
};
