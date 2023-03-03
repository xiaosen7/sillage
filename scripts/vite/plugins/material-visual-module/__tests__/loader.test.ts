import * as vt from "vitest";
import { materialMetaConfigs } from "../materialMetaConfigs";
import * as path from "path";
import { loadMeta } from "../loadMeta";
import { materialComponents } from "../materialComponents";
import { materialProps } from "../materialProps";

const componentsRoot = path.join(__dirname, "assets", "components");
vt.describe("material-visual-module", () => {
  vt.test("loadMeta", async () => {
    const loadedMap = await loadMeta(componentsRoot);
    vt.expect(loadedMap).toMatchInlineSnapshot(`
      Map {
        "/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/button" => {
          "box": {
            "height": {
              "mode": "auto",
            },
            "width": {
              "mode": "auto",
            },
          },
          "name": "button",
          "title": "按钮",
        },
        "/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/root" => {
          "box": {
            "height": {
              "mode": "auto",
            },
            "width": {
              "mode": "auto",
            },
          },
          "internal": true,
          "name": "root",
          "title": "根组件",
        },
      }
    `);
  });

  vt.test("materialMetaConfig", async () => {
    const content = await materialMetaConfigs(componentsRoot);
    vt.expect(content).toMatchInlineSnapshot(`
      "export const button = {
        \\"name\\": \\"button\\",
        \\"title\\": \\"按钮\\",
        \\"box\\": {
          \\"width\\": {
            \\"mode\\": \\"auto\\"
          },
          \\"height\\": {
            \\"mode\\": \\"auto\\"
          }
        }
      };

      export const root = {
        \\"name\\": \\"root\\",
        \\"title\\": \\"根组件\\",
        \\"box\\": {
          \\"width\\": {
            \\"mode\\": \\"auto\\"
          },
          \\"height\\": {
            \\"mode\\": \\"auto\\"
          }
        },
        \\"internal\\": true
      };"
    `);
  });

  vt.test("materialComponents", async () => {
    const content = await materialComponents(componentsRoot);
    vt.expect(content).toMatchInlineSnapshot(`
      "import { default as button } from \\"/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/button/src/index.ts\\";
      import { default as root } from \\"/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/root/src/index.ts\\";

      export {
          button,
          root
      }"
    `);
  });

  vt.test("materialProps", async () => {
    const content = await materialProps(componentsRoot);
    vt.expect(content).toMatchInlineSnapshot(`
      "import { Props as button } from \\"/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/button/src/index.ts\\";
      import { Props as root } from \\"/Users/apple/Workspace/sillage/scripts/plugins/material-visual-module/__tests__/assets/components/root/src/index.ts\\";

      export {
          button,
          root
      }"
    `);
  });
});
