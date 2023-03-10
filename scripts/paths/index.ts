import path from "node:path";
import url from "node:url";

export const projRoot = path.join(
  path.dirname(url.fileURLToPath(import.meta.url)),
  "..",
  ".."
);

export const materialsRoot = path.join(projRoot, "materials");
export const websiteRoot = path.join(projRoot, "web", "website");
