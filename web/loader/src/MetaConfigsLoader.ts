import type { ComponentMetaConfig } from "@sillage/meta";
import { Loader } from "./Loader";
import * as metaConfigs from "virtual:material-meta-configs";

export class MetaConfigsLoader extends Loader<ComponentMetaConfig> {
  protected static inst: MetaConfigsLoader = new MetaConfigsLoader();

  static get(): MetaConfigsLoader {
    return this.inst;
  }

  protected loadFiles() {
    return metaConfigs;
  }
}
