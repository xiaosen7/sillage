const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
  },
});
