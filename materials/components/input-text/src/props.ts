import { editor, initialValue } from "@sillage/props";
import InputText from "@sillage-material-prop-editors/input-text";

export class Props {
  @initialValue("请输入文本")
  @editor(InputText)
  placeholder: string;
}
