import { Materials, type Node, useSubscribe } from "@sillage/core";
import { UIModel, useUIContext } from "@sillage/editor-core";
import { type PropsWithChildren, useMemo, useState } from "react";
import { Tabs, type TabsProps, Typography } from "antd";
import { StyleEditor } from "./style-editor";
import { CodeLess } from "./codeless";
import { PropsEditor } from "./props-editor";

export function RightTabs() {
  const ui = useUIContext();
  const [node, setNode] = useState<Node | null>(null);

  useSubscribe(
    ui,
    UIModel.Topic.ActiveNodeChange,
    ([_last, active]: Node[]) => {
      setNode(active);
    }
  );

  const Wrapper = (props: PropsWithChildren) => (
    <div className="pr pl animate__animated animate__fadeIn">
      {props.children}
    </div>
  );

  const tabs = useMemo(() => {
    if (!node) {
      return [];
    }

    const ret: TabsProps["items"] = [];

    const hasProps =
      Materials.get().getByComponentName(node.getComponentName()).getPropNames()
        .length > 0;
    if (hasProps) {
      ret.push({
        label: "Props",
        key: "Props",
        children: (
          <Wrapper>
            <PropsEditor node={node} />
          </Wrapper>
        ),
      });
    }

    ret.push(
      {
        label: "Style",
        key: "Style",
        children: (
          <Wrapper>
            <StyleEditor node={node} />
          </Wrapper>
        ),
      },
      {
        label: "Codeless",
        key: "Codeless",
        children: (
          <Wrapper>
            <CodeLess node={node} />
          </Wrapper>
        ),
      }
    );

    return ret;
  }, [node]);

  return (
    <Tabs
      tabBarExtraContent={{
        right: (
          <Typography.Title
            className="mr-4 animate__animated animate__headShake"
            level={5}
          >
            {node?.getComponentName()}
          </Typography.Title>
        ),
      }}
      defaultActiveKey="0"
      type="card"
      items={tabs}
    />
  );
}
