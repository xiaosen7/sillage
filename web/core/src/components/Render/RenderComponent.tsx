import { BridgeContext } from "../../context";
import { type Node } from "../../models";
import { useComponent } from "./hooks";

export function RenderComponent({ node }: { node: Node }) {
  const { Component, key, props, bridge } = useComponent(node);
  return (
    <BridgeContext.Provider key={key} value={bridge}>
      <Component {...props} />
    </BridgeContext.Provider>
  );
}
