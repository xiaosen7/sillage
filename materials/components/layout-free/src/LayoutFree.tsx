import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import { type Props } from "./props";

export function LayoutFree(props: WithMaterialProps<Props>) {
  const bridge = useBridge();
  return (
    <div
      style={{
        ...props.style,
      }}
    >
      {bridge?.renderChildren()}
    </div>
  );
}
