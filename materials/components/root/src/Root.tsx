import { type MaterialComponentProps } from "@sillage/props";
import { type Props } from "./props";

export function Root(props: MaterialComponentProps<Props>) {
  const { width, height, bridge } = props;
  return (
    <div style={{ width, height, background: "white" }}>
      {bridge.renderChildren()}
    </div>
  );
}
