import { type WithMaterialProps, getInitialProps } from "@sillage/props";
import { type Constructable } from "@sillage/type-utils";
import * as materials from "@sillage/materials";
import { type ComponentMetaConfig } from "..";

export class Material {
  /**
   * 组件的初始props
   */
  public readonly initialProps: any;

  constructor(
    public readonly componentName: string,
    public readonly Component: WithMaterialProps<React.ComponentType<any>>,
    public readonly Props: Constructable,
    public readonly metaConfig: ComponentMetaConfig
  ) {
    this.initialProps = getInitialProps(Props);
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
    for (const [componentName, Component] of Object.entries(materials)) {
      if (!Component.metaConfig) {
        continue;
      }

      const material = new Material(
        componentName,
        Component,
        Component.Props,
        Component.metaConfig
      );
      data.set(componentName, material);
    }

    this.data = data;
  }

  static get() {
    return Materials.inst;
  }

  getByComponentName(componentName: string) {
    const material = this.data.get(componentName);
    if (!material) {
      throw new Error(`Can't get Material from name ${componentName}`);
    }

    return material;
  }

  map<T>(cb: (material: Material, componentName: string) => T): T[] {
    return [...this.data.entries()].map(([name, m]) => cb(m, name));
  }
}
