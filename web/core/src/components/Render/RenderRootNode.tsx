import { type Node } from "../../models";
import { Droppable } from "./wrapper-components";
import { Wrapped } from "./Wrapped";
import { RenderComponent } from "./RenderComponent";

export function RenderRootNode({ root }: { root: Node }) {
  return (
    <Droppable node={root}>
      <Wrapped node={root} innerWrapperProps={{}} outerWrapperProps={{}}>
        <RenderComponent node={root} />
      </Wrapped>
    </Droppable>
  );
}
