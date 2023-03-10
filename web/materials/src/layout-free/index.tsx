import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import metaConfig from "./meta.config";
import { Props } from "./Props";

LayoutFree.Props = Props;
LayoutFree.metaConfig = metaConfig;

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
