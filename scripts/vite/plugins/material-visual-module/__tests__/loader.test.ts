import path from "node:path";
import url from "node:url";
import * as vt from "vitest";
import { materialMetaConfigs } from "../materialMetaConfigs";
import { loadMeta } from "../loadMeta";
import { materialComponents } from "../materialComponents";
import { materialProps } from "../materialProps";

const componentsRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  "assets",
  "components"
);
vt.describe("material-visual-module", () => {
  vt.test("loadMeta", async () => {
    const loadedMap = await loadMeta(componentsRoot);
    vt.expect(loadedMap.size).toMatchInlineSnapshot("3");
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

      export const input_text = {
        \\"name\\": \\"input-text\\",
        \\"internal\\": false,
        \\"isContainer\\": false
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
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
        "import { default as button } from \\"$componentsRoot/button/src\\";
        import { default as input_text } from \\"$componentsRoot/input-text/src\\";
        import { default as root } from \\"$componentsRoot/root/src\\";

        export {
            button,
            input_text,
            root
        }"
      `);
  });

  vt.test("materialProps", async () => {
    const content = await materialProps(componentsRoot);
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
        "import { Props as button } from \\"$componentsRoot/button/src\\";
        import { Props as input_text } from \\"$componentsRoot/input-text/src\\";
        import { Props as root } from \\"$componentsRoot/root/src\\";

        export {
            button,
            input_text,
            root
        }"
      `);
  });
});
