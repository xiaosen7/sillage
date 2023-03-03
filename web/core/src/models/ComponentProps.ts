import { PropsLoader } from "@sillage/loader";
import { ComponentProp } from "./ComponentProp";
import { Map } from "immutable";
import { type Constructable } from "@sillage/type-utils";

export class ComponentProps {
  private readonly data: Map<string, ComponentProp>;

  constructor(PropsConstructor: Constructable) {
    const data = Map<string, ComponentProp>();
    Object.keys(new PropsConstructor()).forEach((propKey) => {
      data.set(propKey, new ComponentProp(PropsConstructor, propKey));
    });
    this.data = data;
  }

  static fromName(componentName: string) {
    const PropsConstructor = PropsLoader.get().loadByName(componentName);

    return new ComponentProps(PropsConstructor);
  }

  public getValue() {
    const ret = {} as any;
    this.data.forEach((prop, key) => {
      ret[key] = prop.getValue();
    });

    return ret;
  }

  public getEditorOfProp(prop: string) {
    return this.data.get(prop)?.getEditor();
  }

  public getNames() {
    return [...this.data.keys()];
  }
}
