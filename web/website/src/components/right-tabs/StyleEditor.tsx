import { type EditorComponentType, Node, useSubscribe } from "@sillage/core";
import { type CSSProperties, useCallback, useReducer } from "react";
import InputCssLength from "@sillage-material-prop-editors/input-css-length";
import { Descriptions } from "antd";
import Color from "@sillage-material-prop-editors/color";

const styleList: Array<{
  name: keyof CSSProperties;
  Editor: EditorComponentType<string | number>;
}> = [
  {
    name: "width",
    Editor: InputCssLength,
  },
  {
    name: "height",
    Editor: InputCssLength,
  },
  {
    name: "fontSize",
    Editor: InputCssLength,
  },
  {
    name: "backgroundColor",
    Editor: Color,
  },
  {
    name: "color",
    Editor: Color,
  },
  {
    name: "borderWidth",
    Editor: InputCssLength,
  },
  {
    name: "borderColor",
    Editor: Color,
  },
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
];

interface StyleEditorProps {
  node: Node;
}

export function StyleEditor({ node }: StyleEditorProps) {
  const [_, setVer] = useReducer((x: number) => x + 1, 0);
  const handleChange = useCallback(
    (name: keyof CSSProperties, value: number | string) => {
      node.setStyleProperty(name, value);
    },
    [node]
  );

  useSubscribe(node, Node.Topic.StylePropertyChange, () => {
    setVer();
  });

  return (
    <Descriptions column={1} bordered>
      {styleList.map(({ name, Editor }) => {
        return (
          <Descriptions.Item key={name} label={name}>
            <Editor
              onChange={(value) => handleChange(name, value)}
              value={node.getStyleProperty(name)}
            />
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
}
