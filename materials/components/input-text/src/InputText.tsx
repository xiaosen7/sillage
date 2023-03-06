import { type MaterialComponentProps } from "@sillage/props";
import { Input } from "antd";
import { type Props } from "./props";

export function InputText(props: MaterialComponentProps<Props>) {
  return <Input {...props} />;
}
