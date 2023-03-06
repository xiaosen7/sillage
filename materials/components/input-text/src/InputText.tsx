import { type PropsWithBridge } from "@sillage/props";
import { Input } from "antd";
import { type Props } from "./props";

export function InputText(props: PropsWithBridge<Props>) {
  return <Input {...props} />;
}
