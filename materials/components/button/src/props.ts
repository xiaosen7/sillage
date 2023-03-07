// import Select from "@sillage-material-prop-editors/select";
import { editor } from "@sillage/props";
import { Select } from "antd";
import InputText from "@sillage-material-prop-editors/input-text";
import Icon from "@sillage-material-prop-editors/icon";
import type React from "react";

const supportedTypes = ["primary", "secondary", "anchor", "danger"] as const;

export class Props {
  @editor(Select, {
    options: supportedTypes.map((value) => ({ label: value, value })),
    style: { width: "100%" },
  })
  type: string = "primary";

  @editor(InputText)
  text: string = "button";

  @editor(InputText)
  href?: string;

  @editor(Icon)
  before?: string;

  onMouseUp?: (event: React.MouseEvent | React.TouchEvent<Element>) => void;
}
