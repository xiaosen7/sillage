import { type Node } from "../../models";
import { Droppable } from "./Enhancers";
import { Wrapped } from "./Wrapped";
import { RenderComponent } from "./RenderComponent";

export function RenderRootNode({ root }: { root: Node }) {
  return (
    <Droppable node={root}>
      <Wrapped node={root}>
        <RenderComponent node={root} />
      </Wrapped>
    </Droppable>
  );
}
