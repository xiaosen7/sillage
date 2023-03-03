import { type ComponentMetaConfig } from "@sillage/meta";
import fg from "fast-glob";
import * as path from "path";

export async function loadMeta(componentsRoot: string) {
  const files = fg.sync(["*/meta.config.ts"], {
    cwd: componentsRoot,
    absolute: true,
  });

  const projectFolderToMetaConfig = new Map<string, ComponentMetaConfig>();

  await Promise.all(
    files.map(async (file) => {
      await import(file).then((m) => {
        projectFolderToMetaConfig.set(path.dirname(file), m.default);
      });
    })
  );

  return projectFolderToMetaConfig;
}
