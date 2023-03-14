import { type CSSProperties } from "react";
import {
  Color,
  type EditorComponentType,
  InputCssLength,
  Url,
} from "@sillage/editors";

export const styleList: Array<{
  group: string;
  list: Array<{
    name: keyof CSSProperties;
    Editor: EditorComponentType<string | number>;
  }>;
}> = [
  {
    group: "Position",
    list: [
      {
        name: "left",
        Editor: InputCssLength,
      },
      {
        name: "top",
        Editor: InputCssLength,
      },
      {
        name: "marginLeft",
        Editor: InputCssLength,
      },
      {
        name: "marginRight",
        Editor: InputCssLength,
      },
      {
        name: "marginTop",
        Editor: InputCssLength,
      },
      {
        name: "marginBottom",
        Editor: InputCssLength,
      },
      {
        name: "paddingLeft",
        Editor: InputCssLength,
      },
      {
        name: "paddingRight",
        Editor: InputCssLength,
      },
      {
        name: "paddingTop",
        Editor: InputCssLength,
      },
      {
        name: "paddingBottom",
        Editor: InputCssLength,
      },
    ],
  },

  // /////////////////////////////////////////////////////////////////////////////
  // #region Size
  // /////////////////////////////////////////////////////////////////////////////
  {
    group: "Size",
    list: [
      {
        name: "width",
        Editor: InputCssLength,
      },
      {
        name: "height",
        Editor: InputCssLength,
      },
    ],
  },
  // /////////////////////////////////////////////////////////////////////////////
  // #endregion Size
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region font
  // /////////////////////////////////////////////////////////////////////////////
  {
    group: "font",
    list: [
      {
        name: "fontSize",
        Editor: InputCssLength,
      },
      {
        name: "color",
        Editor: Color,
      },
    ],
  },
  // /////////////////////////////////////////////////////////////////////////////
  // #endregion font
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region Background
  // /////////////////////////////////////////////////////////////////////////////
  {
    group: "Background",
    list: [
      {
        name: "backgroundColor",
        Editor: Color,
      },
      {
        name: "backgroundImage",
        Editor: ({ onChange, value }: any) => (
          <Url
            accept="image/*"
            value={value ? value.slice(4, -1) : ""} // url(xxx) => xxx
            onChange={(url: string) => onChange(url ? `url(${url})` : "")} // xxx => url(xxx)
          />
        ),
      },
    ],
  },
  // /////////////////////////////////////////////////////////////////////////////
  // #endregion Background
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region Border
  // /////////////////////////////////////////////////////////////////////////////
  {
    group: "Border",
    list: [
      {
        name: "borderWidth",
        Editor: InputCssLength,
      },
      {
        name: "borderColor",
        Editor: Color,
      },
    ],
  },
  // /////////////////////////////////////////////////////////////////////////////
  // #endregion Border
  // /////////////////////////////////////////////////////////////////////////////
];
