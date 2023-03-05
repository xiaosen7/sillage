import { type Node } from "../../models";
import { RenderRootNode } from "./RenderRootNode";
import { RenderNode } from "./RenderNode";

export function Render({ node }: { node: Node }) {
  if (node.isRoot()) {
    return <RenderRootNode root={node} />;
  }

  return <RenderNode node={node} />;
}
