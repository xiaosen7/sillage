import { loadMeta } from "./loadMeta";

export async function materialMetaConfigs(componentsRoot: string) {
  const metaConfigs = await loadMeta(componentsRoot);

  return [...metaConfigs.values()]
    .map((c) => `export const ${c.name} = ${JSON.stringify(c, null, 2)};`)
    .join("\n\n");
}
