import { Input } from "antd";
import type { EditorProps } from "@sillage/props";

interface Props extends EditorProps {}

export function InputText(props: Props) {
  return (
    <Input
      defaultValue={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
