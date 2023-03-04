import { getEditor, getInitialValue } from "@sillage/props";
import { Map } from "immutable";
import { type Constructable } from "@sillage/type-utils";

export class ComponentProp {
  private readonly name: string;
  private readonly data: Map<string, any>;
  private readonly PropsConstructor: Constructable;

  constructor(PropsConstructor: Constructable, name: string, value?: any) {
    this.name = name;
    this.PropsConstructor = PropsConstructor;

    if (value === undefined) {
      value = getInitialValue(PropsConstructor, name);
    }

    this.data = Map([[name, value]]);
  }

  public getName(): string {
    return this.name;
  }

  public get(): any {
    return this.data.get(this.name);
  }

  public set(newValue: any) {
    this.data.set(this.name, newValue);
  }

  public getEditor() {
    return getEditor(this.PropsConstructor, this.name);
  }
}
