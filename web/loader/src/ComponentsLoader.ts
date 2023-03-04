import * as components from "virtual:material-components";
import { Loader } from "./Loader";
import type { ComponentType } from "react";

const componentToNameMap = new WeakMap<ComponentType, string>();
for (const [name, Component] of Object.entries(components)) {
  componentToNameMap.set(Component, name);
}

export class ComponentsLoader extends Loader<ComponentType> {
  protected static inst: ComponentsLoader = new ComponentsLoader();

  static get(): ComponentsLoader {
    return this.inst;
  }

  public loadFiles() {
    return components;
  }

  getNameByComponent(Component: ComponentType) {
    return componentToNameMap.get(Component);
  }
}
