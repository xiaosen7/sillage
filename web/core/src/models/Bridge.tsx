import { type CSSProperties, type ComponentType, type ReactNode } from "react";
import { type Node } from "./Node";

export class Bridge {
  constructor(
    private readonly node: Node,
    private readonly NodeRender: ComponentType<any>
  ) {
    this.node = node;
  }

  renderChildren(): ReactNode {
    const layoutType = this.node.getLayoutType();
    const layoutStyle: CSSProperties =
      layoutType === "free"
        ? {
            position: "relative",
          }
        : {
            display: "flex",
            flexDirection: layoutType,
          };

    const Render = this.NodeRender;
    return (
      <div style={{ width: "100%", height: "100%", ...layoutStyle }}>
        {this.node.getChildren().map((node) => (
          <Render key={node.getId()} node={node} />
        ))}
      </div>
    );
  }
}
