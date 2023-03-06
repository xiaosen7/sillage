import { type PropsWithBridge } from "@sillage/props";
import { type Props } from "./props";
import { Input } from "antd";

export function InputText(props: PropsWithBridge<Props>) {
  return <Input {...props} />;
}
