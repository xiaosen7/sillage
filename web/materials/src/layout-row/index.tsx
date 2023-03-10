import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import metaConfig from "./meta.config";
import { Props } from "./Props";

LayoutRow.Props = Props;
LayoutRow.metaConfig = metaConfig;
export function LayoutRow({ style }: WithMaterialProps<Props>) {
  const bridge = useBridge();
  return <div style={{ ...style }}>{bridge!.renderChildren()}</div>;
}
