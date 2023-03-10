import { editor } from "@sillage/props";
import { InputText } from "@sillage/editors";

export class Props {
  @editor(InputText)
  text = "文本";
}
