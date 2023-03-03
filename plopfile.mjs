import * as path from "path";

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator("create component project", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
      {
        type: "input",
        name: "title",
        message: "Component title?",
      },
      {
        type: "confirm",
        name: "internal",
        message: "Internal component?",
      },
    ],
    actions(_data) {
      /**
       * @type {import("plop").ActionType[]}
       */
      const actions = [];

      const templateDir = path.resolve(
        "web",
        "materials",
        "components",
        "_template"
      );
      actions.push({
        type: "addMany",
        templateFiles: templateDir,
        base: templateDir,
        destination: path.resolve(
          "web",
          "materials",
          "components",
          "{{dashCase name}}"
        ),
      });

      return actions;
    },
  });
}
