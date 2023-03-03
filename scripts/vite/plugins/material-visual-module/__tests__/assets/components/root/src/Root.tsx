import { type Props } from "./props";
import { type PropsWithBridge } from "@sillage/props";

export function Root(props: PropsWithBridge<Props>) {
  const { width, height } = props;
  return <div style={{ width, height }}>{props.bridge.renderChildren()}</div>;
}
