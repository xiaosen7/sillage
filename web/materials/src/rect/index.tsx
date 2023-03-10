import { type WithMaterialProps } from "@sillage/props";
import metaConfig from "./meta.config";
import { Props } from "./Props";

Rect.Props = Props;
Rect.metaConfig = metaConfig;
export function Rect(props: WithMaterialProps<Props>) {
  const { style } = props;
  return <div style={{ ...style }}></div>;
}
