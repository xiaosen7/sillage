import { type ComponentType } from "react";
import { BridgeContext } from "../../context";
import { type Node } from "../../models";
import { useComponent } from "../../hooks";

export function RenderComponent({
  node,
  Render,
}: {
  node: Node;
  Render: ComponentType<any>;
}) {
  const { Component, key, props, bridge } = useComponent(node, Render);
  return (
    <BridgeContext.Provider key={key} value={bridge}>
      <Component {...props} />
    </BridgeContext.Provider>
  );
}
