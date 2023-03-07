import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import { type Props } from "./props";

export function LayoutRow({ style }: WithMaterialProps<Props>) {
  const bridge = useBridge();
  return <div style={{ ...style }}>{bridge!.renderChildren()}</div>;
}
