import { type EditorProps } from "@sillage/props";
import { Switch } from "antd";

export default function Boolean(props: EditorProps) {
  return <Switch checked={props.value} onChange={props.onChange} />;
}
