import { Loader } from "./Loader";
import * as props from "virtual:material-props";
import type { Constructable } from "@sillage/type-utils";

export class PropsLoader extends Loader<Constructable> {
  protected static inst: PropsLoader = new PropsLoader();

  static get(): PropsLoader {
    return this.inst;
  }

  public loadFiles() {
    return props;
  }
}
