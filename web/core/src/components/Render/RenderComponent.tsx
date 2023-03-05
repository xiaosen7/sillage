import { type Node } from "../../models";
import { useComponent } from "./hooks";

export function RenderComponent({ node }: { node: Node }) {
  const { Component, key, props } = useComponent(node);
  return <Component key={key} {...props} />;
}
