import { getEditor, getInitialValue } from "@sillage/props";
import { type ComponentType } from "react";
import { Map } from "immutable";

export class ComponentProp {
  private readonly name: string;
  private readonly value: any;
  private readonly editor: ComponentType;
  private readonly data: Map<string, any>;

  constructor(propsInstance: any, name: string) {
    this.name = name;

    const value = getInitialValue(propsInstance, name);
    this.data = Map([[name, value]]);

    this.editor = getEditor(propsInstance, name);
  }

  public getName(): string {
    return this.name;
  }

  public getValue(): any {
    return this.data.get(this.name);
  }

  public getEditor(): ComponentType {
    return this.editor;
  }
}
