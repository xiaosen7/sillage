import { editor } from "@sillage/props";
import { InputText } from "@sillage/editors";

export class Props {
  @editor(InputText)
  placeholder: string = "请输入文本";
}
