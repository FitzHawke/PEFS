module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	rules: {
		"react/prop-types": 0,
	},
};
