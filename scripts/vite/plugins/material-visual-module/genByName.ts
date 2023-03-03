import { join } from "path";
import { loadMeta } from "./loadMeta";

export async function genByName(root: string, exportName: string) {
  const loadedMap = await loadMeta(root);

  const entries = [...loadedMap.entries()];
  const imports = entries
    .map(
      ([folder, metaConfig]) =>
        `import { ${exportName} as ${metaConfig.name} } from "${join(
          folder,
          "src/index.ts"
        )}";`
    )
    .join("\n");
  const exports = `export {\n    ${entries
    .map(([_, metaConfig]) => metaConfig.name)
    .join(",\n    ")}\n}`;

  return `${imports}\n\n${exports}`;
}
