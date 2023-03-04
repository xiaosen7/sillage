import { Node } from "@sillage/core";
import { PropertyEditor } from "./PropertyEditor";

export function RightTabs(): JSX.Element {
  return (
    <div>
      <PropertyEditor node={new Node("Button")} />
    </div>
  );
}
