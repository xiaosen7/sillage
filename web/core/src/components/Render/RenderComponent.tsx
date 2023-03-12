import { type ComponentType } from "react";
import { BridgeContext } from "../../context";
import { type Node } from "../../models";
import { useComponent } from "../../hooks";

export function RenderComponent({
  node,
  ChildRender,
}: {
  node: Node;
  ChildRender: ComponentType<{ node: Node }>;
}) {
  const { Component, key, props, bridge } = useComponent(node, ChildRender);
  return (
    <BridgeContext.Provider key={key} value={bridge}>
      <Component {...props} />
    </BridgeContext.Provider>
  );
}
