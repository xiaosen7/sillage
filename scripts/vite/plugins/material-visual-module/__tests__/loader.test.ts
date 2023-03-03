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
    vt.expect(loadedMap.size).toMatchInlineSnapshot("2");
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
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
      "import { default as button } from \\"$componentsRoot/button/src/index.ts\\";
      import { default as root } from \\"$componentsRoot/root/src/index.ts\\";

      export {
          button,
          root
      }"
    `);
  });

  vt.test("materialProps", async () => {
    const content = await materialProps(componentsRoot);
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
      "import { Props as button } from \\"$componentsRoot/button/src/index.ts\\";
      import { Props as root } from \\"$componentsRoot/root/src/index.ts\\";

      export {
          button,
          root
      }"
    `);
  });
});
