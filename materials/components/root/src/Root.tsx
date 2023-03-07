import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import { type Props } from "./props";

export function Root(props: WithMaterialProps<Props>) {
  console.log(props);
  const bridge = useBridge();
  return <div {...props}>{bridge?.renderChildren()}</div>;
}
