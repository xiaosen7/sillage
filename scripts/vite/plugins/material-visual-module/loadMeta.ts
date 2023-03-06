import path from "node:path";
import { type ComponentMetaConfig } from "@sillage/meta";
import fg from "fast-glob";

export async function loadMeta(componentsRoot: string) {
  const files = fg.sync(["*/meta.config.js"], {
    cwd: componentsRoot,
    absolute: true,
  });

  const projectFolderToMetaConfig = new Map<string, ComponentMetaConfig>();

  await Promise.all(
    files.map(async (file) => {
      await import(/* remove '.ts' */ file).then((m) => {
        projectFolderToMetaConfig.set(path.dirname(file), m.default);
      });
    })
  );

  return projectFolderToMetaConfig;
}
