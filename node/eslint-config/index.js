/* eslint-disable unicorn/prefer-module */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.lint.json",
    sourceType: "module",
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  overrides: [
    // material
    {
      files: ["materials/*/*/src/**", "materials/components/*/meta.config.ts"],
      rules: {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
      },
    },
    // tests
    {
      files: ["**/*.test.*"],
      rules: {
        "unicorn/consistent-function-scoping": "off",
      },
    },
    // vite env
    {
      files: ["**/vite-env.d.ts"],
      rules: {
        "unicorn/filename-case": "off",
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],

  plugins: ["react", "jsx-a11y", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],

        pathGroups: [
          {
            pattern: "vue",
            group: "external",
            position: "before",
          },
          {
            pattern: "@vue/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@element-plus/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["type"],
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "jsonc/sort-keys": [
      "error",
      {
        pathPattern: "^$",
        order: [
          "name",
          "version",
          "private",
          "packageManager",
          "description",
          "type",
          "keywords",
          "homepage",
          "bugs",
          "license",
          "author",
          "contributors",
          "funding",
          "files",
          "main",
          "module",
          "exports",
          "unpkg",
          "jsdelivr",
          "browser",
          "bin",
          "man",
          "directories",
          "repository",
          "publishConfig",
          "scripts",
          "peerDependencies",
          "peerDependenciesMeta",
          "optionalDependencies",
          "dependencies",
          "devDependencies",
          "engines",
          "config",
          "overrides",
          "pnpm",
          "husky",
          "lint-staged",
          "eslintConfig",
        ],
      },
      {
        pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
        order: { type: "asc" },
      },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "warn",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-ternary": "off",
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
});
