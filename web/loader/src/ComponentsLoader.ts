import * as components from "virtual:material-components";
import { Loader } from "./Loader";
import type { ComponentType } from "react";

export class ComponentsLoader extends Loader<ComponentType> {
  protected static inst: ComponentsLoader = new ComponentsLoader();

  static get(): ComponentsLoader {
    return this.inst;
  }

  public loadFiles() {
    return components;
  }
}
