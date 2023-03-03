import { type Plugin } from "vite";
import { componentsRoot } from "../../../paths";
import { materialComponents } from "./materialComponents";
import { materialMetaConfigs } from "./materialMetaConfigs";
import { materialProps } from "./materialProps";

export function MaterialVisualModule(): Plugin {
  const m = {
    "virtual:material-components": materialComponents,
    "virtual:material-props": materialProps,
    "virtual:material-meta-configs": materialMetaConfigs,
  };

  return {
    name: "material-visual-module", // required, will show up in warnings and errors
    resolveId(id) {
      if (id in m) {
        return id;
      }
    },
    load(id) {
      const module = id as keyof typeof m;
      if (module in m) {
        return m[module](componentsRoot);
      }
    },
  };
}
