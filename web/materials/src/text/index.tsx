import { type WithMaterialProps } from "@sillage/props";
import metaConfig from "./meta.config";
import { Props } from "./Props";

Text.Props = Props;
Text.metaConfig = metaConfig;
export function Text(props: WithMaterialProps<Props>) {
  return <article {...props}>{props.text}</article>;
}
