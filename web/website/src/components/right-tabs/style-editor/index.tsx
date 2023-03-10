import { Materials, Node, useSubscribe } from "@sillage/core";
import { type CSSProperties, useCallback, useReducer } from "react";
import { Collapse, Descriptions } from "antd";
import { styleList } from "./styleList";

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
    <Collapse>
      {filterNodeStyleList(node).map(({ group, list }) => {
        return (
          <Collapse.Panel header={group} key={group}>
            <Descriptions column={1} bordered>
              {list.map(({ name, Editor }) => {
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
          </Collapse.Panel>
        );
      })}
    </Collapse>
  );
}
function filterNodeStyleList(node: Node) {
  const { styleEditor = {} } = Materials.get().getByComponentName(
    node.getComponentName()
  ).metaConfig;

  const { supportGroups, unSupportGroups, unSupportProperties } = styleEditor;
  let filteredStyleList = styleList;

  // filter groups
  if (supportGroups) {
    filteredStyleList = filteredStyleList.filter(({ group }) =>
      supportGroups.includes(group)
    );
  }

  if (unSupportGroups) {
    filteredStyleList = filteredStyleList.filter(
      ({ group }) => !unSupportGroups.includes(group)
    );
  }

  // filter style properties
  if (unSupportProperties) {
    filteredStyleList = filteredStyleList.map(({ group, list }) => {
      return {
        group,
        list: list.filter(({ name }) => !unSupportProperties.includes(name)),
      };
    });
  }

  return filteredStyleList;
}
