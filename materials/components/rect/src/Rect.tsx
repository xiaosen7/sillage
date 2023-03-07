import { type WithMaterialProps } from "@sillage/props";
import { type Props } from "./props";

export function Rect(props: WithMaterialProps<Props>) {
  const { style } = props;
  return <div style={{ ...style }}></div>;
}
