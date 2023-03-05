import { type PropsWithBridge } from "@sillage/props";
import { type Props } from "./props";

export function Rect(props: PropsWithBridge<Props>) {
  const { width, height, bridge } = props;
  return (
    <div style={{ width, height, border: "1px solid black" }}>
      {bridge.renderChildren()}
    </div>
  );
}
