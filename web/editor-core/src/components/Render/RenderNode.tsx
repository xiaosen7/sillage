import {
  Locatable,
  type Node,
  RenderComponent,
  Styled,
  Wrapped,
} from "@sillage/core";
import { Draggable, Droppable, Resizable, Selectable } from "./Enhancers";

export function RenderNodeInEditor({ node }: { node: Node }) {
  return (
    <Selectable node={node}>
      <Locatable node={node}>
        <Draggable node={node}>
          <Styled node={node}>
            {node.isContainer() ? (
              <Droppable node={node}>
                <Wrapped node={node}>
                  <>
                    <RenderComponent Render={RenderNodeInEditor} node={node} />
                    <Resizable node={node} />
                  </>
                </Wrapped>
              </Droppable>
            ) : (
              <Wrapped node={node}>
                <>
                  <RenderComponent Render={RenderNodeInEditor} node={node} />
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
