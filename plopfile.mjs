import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

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
        type: "confirm",
        name: "internal",
        message: "Internal component?",
      },
      {
        type: "confirm",
        name: "isContainer",
        message: "Container component?",
      },
    ],
    actions(_data) {
      /**
       * @type {import("plop").ActionType[]}
       */
      const actions = [];

      const templateDir = path.join(
        __dirname,
        "materials",
        "components",
        "_template"
      );
      actions.push({
        type: "addMany",
        templateFiles: templateDir,
        base: templateDir,
        destination: path.join(
          __dirname,
          "materials",
          "components",
          "{{dashCase name}}"
        ),
      });

      return actions;
    },
  });

  plop.setGenerator("create editor project", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Editor name?",
      },
    ],
    actions() {
      /**
       * @type {import("plop").ActionType[]}
       */
      const actions = [];

      const templateDir = path.join(
        __dirname,
        "materials",
        "prop-editors",
        "_template"
      );
      actions.push({
        type: "addMany",
        templateFiles: templateDir,
        base: templateDir,
        destination: path.join(
          __dirname,
          "materials",
          "prop-editors",
          "{{dashCase name}}"
        ),
      });

      return actions;
    },
  });
}
