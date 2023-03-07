import { type WithMaterialProps } from "@sillage/props";
import { type Props } from "./props";

export function Text(props: WithMaterialProps<Props>) {
  return <article {...props}>{props.text}</article>;
}
