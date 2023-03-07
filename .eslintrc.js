module.exports = {
  root: true,
  extends: ["@sillage/eslint-config"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "tsconfig.node.json",
      "tsconfig.web.json",
      "tsconfig.extraneous.json",
      "tsconfig.test.json",
    ],
  },
};
