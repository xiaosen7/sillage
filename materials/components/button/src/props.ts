// import Select from "@sillage-material-prop-editors/select";
import { editor, initialValue } from "@sillage/props";
import { Select } from "antd";

const supportedTypes = ["primary", "secondary", "anchor", "danger"] as const;

export class Props {
  @initialValue("secondary")
  @editor(Select, {
    options: supportedTypes.map((value) => ({ label: value, value })),
    style: { width: "100%" },
  })
  type!: string;
}
