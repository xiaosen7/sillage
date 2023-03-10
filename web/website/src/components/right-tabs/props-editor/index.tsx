import { Materials, Node, useSubscribe } from "@sillage/core";
import { useCallback, useMemo, useReducer } from "react";

import { Descriptions } from "antd";
import { getEditor } from "@sillage/props";

export function PropsEditor({ node }: { node: Node }) {
  const [_, setVer] = useReducer((x: number) => x + 1, 0);
  const material = useMemo(
    () => Materials.get().getByComponentName(node.getComponentName()),
    [node]
  );

  const handleChange = useCallback(
    (prop: string, value: any) => {
      node.setPassProp(prop, value);
    },
    [node]
  );

  useSubscribe(node, Node.Topic.PropUpdate, () => {
    setVer();
  });

  if (!material) {
    return null;
  }

  const { Props } = material;
  const passProps = node.getPassProps();
  return (
    <Descriptions column={1} bordered>
      {Object.keys(Props).map((prop, index) => {
        const PropEditor = getEditor(Props, prop);
        if (!PropEditor) {
          return null;
        }

        const value = passProps[prop];
        const key = prop;
        return (
          <Descriptions.Item key={key} label={prop}>
            <PropEditor
              onChange={(value: any) => handleChange(prop, value)}
              value={value}
            />
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
}
