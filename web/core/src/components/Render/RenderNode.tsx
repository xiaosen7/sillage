import { type Node } from "../../models";
import {
  Draggable,
  Droppable,
  Locatable,
  Selectable,
} from "./wrapper-components";
import { Wrapped } from "./Wrapped";
import { RenderComponent } from "./RenderComponent";

export function RenderNode({ node }: { node: Node }) {
  return (
    <Selectable node={node}>
      {/* <Locatable node={node}> */}
      <Draggable node={node}>
        {node.isContainer() ? (
          <Droppable node={node}>
            <Wrapped node={node} innerWrapperProps={{}} outerWrapperProps={{}}>
              <RenderComponent node={node} />
            </Wrapped>
          </Droppable>
        ) : (
          <Wrapped node={node} innerWrapperProps={{}} outerWrapperProps={{}}>
            <RenderComponent node={node} />
          </Wrapped>
        )}
      </Draggable>
      {/* </Locatable> */}
    </Selectable>
  );
}
