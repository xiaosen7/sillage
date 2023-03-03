import Select from "@sillage-material-prop-editors/select";
import { editor, initialValue } from "@sillage/Props";

const supportedTypes = ["primary", "secondary", "anchor", "danger"] as const;

export class Props {
  @initialValue("secondary")
  @editor(Select, { options: supportedTypes })
  type!: string;
}
