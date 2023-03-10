import { Input } from "antd";
import { Props } from "./Props";
import metaConfig from "./meta.config";

InputText.metaConfig = metaConfig;
InputText.Props = Props;

export function InputText(props: Props) {
  return <Input {...props} />;
}
