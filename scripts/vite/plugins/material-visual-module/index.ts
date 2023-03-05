import { type Plugin } from "vite";
import { componentsRoot } from "../../../paths";
import { materialComponents } from "./materialComponents";
import { materialMetaConfigs } from "./materialMetaConfigs";
import { materialProps } from "./materialProps";

export function MaterialVisualModule(): Plugin {
  const m = {
    "virtual:material-components": null,
    "virtual:material-props": null,
    "virtual:material-meta-configs": null,
  };
  const n = {
    "\0virtual:material-components": materialComponents,
    "\0virtual:material-props": materialProps,
    "\0virtual:material-meta-configs": materialMetaConfigs,
  };

  return {
    name: "material-visual-module", // required, will show up in warnings and errors
    resolveId(id) {
      if (id in m) {
        return "\0" + id;
      }
    },
    load(id) {
      if (id in n) {
        // @ts-expect-error it's ok
        return n[id](componentsRoot);
      }
    },
  };
}
