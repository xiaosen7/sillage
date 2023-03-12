import { Materials, Node, useSubscribe } from "@sillage/core";
import React, { useCallback, useMemo, useReducer } from "react";

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

  const { Props } = material;
  const passProps = node.getPassProps();
  return (
    <Descriptions column={1} bordered>
      {Object.keys(Props).map((prop) => {
        const PropEditor = getEditor(Props, prop);
        if (!PropEditor) {
          return null;
        }

        const value = passProps[prop];
        const key = prop;
        return (
          <Descriptions.Item key={key} label={prop}>
            <React.Suspense fallback="loading...">
              <PropEditor
                onChange={(value: any) => handleChange(prop, value)}
                value={value}
              />
            </React.Suspense>
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  );
}
