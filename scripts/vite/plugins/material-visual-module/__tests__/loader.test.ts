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
    vt.expect(loadedMap.size).toMatchInlineSnapshot("0");
  });

  vt.test("materialMetaConfig", async () => {
    const content = await materialMetaConfigs(componentsRoot);
    vt.expect(content).toMatchInlineSnapshot('""');
  });

  vt.test("materialComponents", async () => {
    const content = await materialComponents(componentsRoot);
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
        "

        export {
            
        }"
      `);
  });

  vt.test("materialProps", async () => {
    const content = await materialProps(componentsRoot);
    vt.expect(content.replaceAll(componentsRoot, "$componentsRoot"))
      .toMatchInlineSnapshot(`
        "

        export {
            
        }"
      `);
  });
});
