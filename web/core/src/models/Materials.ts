import { type ComponentMetaConfig } from "@sillage/core";
import { type MaterialComponentProps, getInitialValue } from "@sillage/props";
import { type Constructable } from "@sillage/type-utils";
import * as components from "virtual:material-components";
import * as metaConfigs from "virtual:material-meta-configs";
import * as props from "virtual:material-props";

export class Material {
  /**
   * 组件的初始props
   */
  public readonly initialProps: any;

  constructor(
    public readonly name: string,
    public readonly Component: MaterialComponentProps<React.ComponentType<any>>,
    public readonly Props: Constructable,
    public readonly metaConfig: ComponentMetaConfig
  ) {
    const initialProps = {} as any;
    for (const prop of Object.keys(Props)) {
      initialProps[prop] = getInitialValue(Props, prop);
    }

    this.initialProps = initialProps;
  }

  isInternal() {
    return this.metaConfig.isInternal;
  }

  getPropNames() {
    return Object.keys(this.Props);
  }
}

export class Materials {
  private static readonly inst = new Materials();
  private readonly data: Map<string, Material>;

  private constructor() {
    const data = new Map();
    for (const [exportName, metaConfig] of Object.entries(metaConfigs)) {
      const { name } = metaConfig;
      const material = new Material(
        name,
        components[exportName],
        props[exportName],
        metaConfig
      );
      data.set(name, material);
    }

    this.data = data;
  }

  static get() {
    return Materials.inst;
  }

  getByName(name: string) {
    return this.data.get(name);
  }

  map<T>(cb: (material: Material, name: string) => T): T[] {
    return [...this.data.entries()].map(([name, m]) => cb(m, name));
  }
}
