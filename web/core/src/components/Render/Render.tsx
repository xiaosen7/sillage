import { type Node } from "../../models";
import { Locatable } from "./Enhancers";
import { Styled } from "./Enhancers/Styled";
import { Wrapped } from "./Wrapped";
import { RenderComponent } from "./RenderComponent";

export function Render({ node }: { node: Node }) {
  return (
    <Locatable node={node}>
      <Styled node={node}>
        <Wrapped node={node}>
          <RenderComponent Render={Render} node={node} />
        </Wrapped>
      </Styled>
    </Locatable>
  );
}
