import { loadMeta } from "./loadMeta";
import { toExportName } from "./toExportName";

export async function materialMetaConfigs(componentsRoot: string) {
  const metaConfigs = await loadMeta(componentsRoot);

  return [...metaConfigs.values()]
    .map(
      (c) =>
        `export const ${toExportName(c.name)} = ${JSON.stringify(c, null, 2)};`
    )
    .join("\n\n");
}
