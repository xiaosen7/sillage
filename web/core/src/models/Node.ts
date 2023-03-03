import { ComponentsLoader, PropsLoader } from "@sillage/loader";
import type { ComponentType } from "react";
import { ComponentProps } from "./ComponentProps";
import type { Constructable } from "@sillage/type-utils";

export class Node {
  private readonly props: ComponentProps;
  private readonly PropsConstructor: Constructable;

  private readonly Component: ComponentType<any>;
  private readonly type: string;

  constructor(Component: ComponentType, PropsConstructor: Constructable) {
    if (!Component.name) {
      throw new Error("Component should have name");
    }

    this.type = Component.name;
    this.Component = Component;
    this.PropsConstructor = PropsConstructor;
    this.props = new ComponentProps(PropsConstructor);
  }

  getType() {
    return this.type;
  }

  static fromName(name: string) {
    const Component = ComponentsLoader.get().loadByName(name);
    const Props = PropsLoader.get().loadByName(name);
    return new Node(Component, Props);
  }

  getPassProps() {
    return this.props.getValue();
  }

  getComponentProps() {
    return this.props;
  }

  getComponent() {
    return this.Component;
  }

  clone() {
    return new Node(this.Component, this.PropsConstructor);
  }

  //   toJson(): NodeDataJson {
  //     return {
  //       passProps: this.getComponentProps().getValue(),
  //     };
  //   }
}
