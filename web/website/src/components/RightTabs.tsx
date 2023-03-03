import { Node } from "@sillage/core";
import { PropertyEditor } from "./PropertyEditor";

export function RightTabs(): JSX.Element {
  return (
    <div>
      <PropertyEditor node={Node.fromName("Button")} />
    </div>
  );
}
