import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import { Props } from "./Props";
import metaConfig from "./meta.config";

LayoutColumn.Props = Props;
LayoutColumn.metaConfig = metaConfig;
export function LayoutColumn({ style }: WithMaterialProps<Props>) {
  const bridge = useBridge();
  return <div style={{ ...style }}>{bridge?.renderChildren()}</div>;
}
