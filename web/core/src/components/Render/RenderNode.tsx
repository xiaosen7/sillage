import { type Node } from "../../models";
import {
  Draggable,
  Droppable,
  Locatable,
  Resizable,
  Selectable,
} from "./Enhancers";
import { Wrapped } from "./Wrapped";
import { RenderComponent } from "./RenderComponent";
import { Styled } from "./Enhancers/Styled";

export function RenderNode({ node }: { node: Node }) {
  return (
    <Selectable node={node}>
      <Locatable node={node}>
        <Draggable node={node}>
          <Styled node={node}>
            {node.isContainer() ? (
              <Droppable node={node}>
                <Wrapped node={node}>
                  <>
                    <RenderComponent node={node} />
                    <Resizable node={node} />
                  </>
                </Wrapped>
              </Droppable>
            ) : (
              <Wrapped node={node}>
                <>
                  <RenderComponent node={node} />
                  <Resizable node={node} />
                </>
              </Wrapped>
            )}
          </Styled>
        </Draggable>
      </Locatable>
    </Selectable>
  );
}
