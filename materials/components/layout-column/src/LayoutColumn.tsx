import { type MaterialComponentProps } from "@sillage/props";
import { type Props } from "./props";

export function LayoutColumn(props: MaterialComponentProps<Props>) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid gray",
        ...props.style,
      }}
    >
      {props.bridge.renderChildren()}
    </div>
  );
}
