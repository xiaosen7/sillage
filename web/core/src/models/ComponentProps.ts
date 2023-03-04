import { PropsLoader } from "@sillage/loader";
import { Map } from "immutable";
import { type Constructable } from "@sillage/type-utils";
import { ComponentProp } from "./ComponentProp";

export class ComponentProps {
  private readonly data: Map<string, ComponentProp>;

  constructor(PropsConstructor: Constructable, passProps: any = {}) {
    const data = Map<string, ComponentProp>();
    for (const propName of Object.keys(PropsConstructor)) {
      data.set(
        propName,
        new ComponentProp(PropsConstructor, passProps[propName])
      );
    }

    this.data = data;
  }

  static fromName(componentName: string) {
    const PropsConstructor = PropsLoader.get().loadByName(componentName);

    return new ComponentProps(PropsConstructor);
  }

  public getPassProps() {
    const props = {} as any;
    for (const [propName, prop] of this.data.entries()) {
      props[propName] = prop.get();
    }

    return props;
  }

  public setPassProps(partial: any) {
    for (const [name, value] of Object.entries(partial)) {
      if (this.data.has(name)) {
        this.data.get(name)?.set(value);
      }
    }
  }

  public getEditorOfProp(propName: string) {
    return this.data.get(propName)?.getEditor();
  }

  public getNames() {
    return [...this.data.keys()];
  }
}
