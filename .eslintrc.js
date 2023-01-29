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
	extends: ["eslint:recommended", "plugin:css-import-order/recommended", "prettier"],
	plugins: ["import", "unused-imports"],
	rules: {
		"import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type"],
        "newlines-between": "never",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
		"unused-imports/no-unused-imports": "error",
	},
};
