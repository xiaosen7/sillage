import { useBridge } from "@sillage/core";
import { type WithMaterialProps } from "@sillage/props";
import metaConfig from "./meta.config";
import { Props } from "./Props";

Root.Props = Props;
Root.metaConfig = metaConfig;
export function Root(props: WithMaterialProps<Props>) {
  console.log(props);
  const bridge = useBridge();
  return <div {...props}>{bridge?.renderChildren()}</div>;
}
