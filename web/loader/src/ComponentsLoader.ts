import type { ComponentType } from "react";
import { Loader } from "./Loader";
import * as components from "virtual:material-components";

export class ComponentsLoader extends Loader<ComponentType> {
  protected static inst: ComponentsLoader = new ComponentsLoader();

  static get(): ComponentsLoader {
    return this.inst;
  }

  public loadFiles() {
    return components;
  }
}
