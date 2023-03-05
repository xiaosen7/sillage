import path from "node:path";
import url from "node:url";

export const projRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  "..",
  ".."
);

export const componentsRoot = path.join(projRoot, "materials/components");
