import { type Node } from "@sillage/core";
import { RenderComponent, Wrapped } from "@sillage/core";
import { Droppable } from "./Enhancers";
import { RenderNodeInEditor } from "./RenderNode";

export function RenderRootNodeInEditor({ root }: { root: Node }) {
  return (
    <Droppable node={root}>
      <Wrapped node={root}>
        <RenderComponent ChildRender={RenderNodeInEditor} node={root} />
      </Wrapped>
    </Droppable>
  );
}
