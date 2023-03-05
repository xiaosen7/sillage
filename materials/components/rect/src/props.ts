import { editor, initialValue } from "@sillage/props";
import { InputNumber } from "antd";

export class Props {
  @editor(InputNumber)
  @initialValue(100)
  width: number;

  @editor(InputNumber)
  @initialValue(100)
  height: number;
}
