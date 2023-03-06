import { type MaterialComponentProps } from "@sillage/props";
import { type Props } from "./props";

export function Rect(props: MaterialComponentProps<Props>) {
  const { bridge, style } = props;
  return (
    <div style={{ border: "1px solid gray", width: 50, height: 50, ...style }}>
      {bridge.renderChildren()}
    </div>
  );
}
