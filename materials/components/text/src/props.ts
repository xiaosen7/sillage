import { editor } from "@sillage/props";
import InputText from "@sillage-material-prop-editors/input-text";

export class Props {
  @editor(InputText)
  text = "文本";
}
