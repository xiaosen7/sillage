import { PropsLoader } from "@sillage/loader";
import { Set } from "immutable";
import { type JsonNode } from "../types";
import { ComponentProps } from "./ComponentProps";

export class Node {
  private readonly materialName: string;
  private readonly componentProps: ComponentProps;

  children: Set<Node>;

  constructor(materialName: string) {
    this.materialName = materialName;

    const PropsConstructor = PropsLoader.get().loadByName(materialName);
    this.componentProps = new ComponentProps(PropsConstructor);

    this.children = Set();
  }

  static fromJson(jsonNode: JsonNode) {
    const { passProps, children, type } = jsonNode;
    const node = new Node(type);
    node.setPassProps(passProps);
    for (const childJsonNode of children) {
      const child = Node.fromJson(childJsonNode);
      node.addChild(child);
    }

    return node;
  }

  getComponentProps() {
    return this.componentProps;
  }

  getPassProps() {
    return this.componentProps.getPassProps();
  }

  setPassProps(partial: any) {
    this.componentProps.setPassProps(partial);
  }

  clone() {
    return new Node(this.materialName);
  }

  addChild(node: Node) {
    this.children.add(node);
  }

  getMaterialName() {
    return this.materialName;
  }
}
