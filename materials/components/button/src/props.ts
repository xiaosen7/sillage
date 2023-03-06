// import Select from "@sillage-material-prop-editors/select";
import { editor, initialValue } from "@sillage/props";
import { Select } from "antd";
import InputText from "@sillage-material-prop-editors/input-text";
import Icon from "@sillage-material-prop-editors/icon";
import type React from "react";

const supportedTypes = ["primary", "secondary", "anchor", "danger"] as const;

export class Props {
  @initialValue("primary")
  @editor(Select, {
    options: supportedTypes.map((value) => ({ label: value, value })),
    style: { width: "100%" },
  })
  type?: string;

  @initialValue("button")
  @editor(InputText)
  text: string;

  @editor(InputText)
  href?: string;

  onMouseUp?: (event: React.MouseEvent | React.TouchEvent<Element>) => void;

  @editor(Icon)
  before?: string;
}
