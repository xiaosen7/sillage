import { type ReactNode } from "react";
import { type Node } from "./Node";

export class Bridge {
  private readonly node: Node;
  constructor(node: Node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  renderChildren(): ReactNode {
    return null;
  }
}
