import { join } from "node:path";
import { loadMeta } from "./loadMeta";
import { toExportName } from "./toExportName";

export async function genByName(root: string, exportName: string) {
  const loadedMap = await loadMeta(root);

  const entries = [...loadedMap.entries()];
  const imports = entries
    .map(
      ([folder, metaConfig]) =>
        `import { ${exportName} as ${toExportName(
          metaConfig.name
        )} } from "${join(folder, "src/index.ts")}";`
    )
    .join("\n");
  const exports = `export {\n    ${entries
    .map(([_, metaConfig]) => toExportName(metaConfig.name))
    .join(",\n    ")}\n}`;

  return `${imports}\n\n${exports}`;
}
