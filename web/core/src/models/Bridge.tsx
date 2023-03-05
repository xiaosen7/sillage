import { type ReactNode } from "react";
import { Render } from "../components";
import { type Node } from "./Node";

export class Bridge {
  constructor(private readonly node: Node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  renderChildren(): ReactNode {
    return (
      <>
        {this.node.getChildren().map((node) => (
          <Render key={node.getId()} node={node} />
        ))}
      </>
    );
  }
}
