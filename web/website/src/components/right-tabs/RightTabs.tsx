import {
  Materials,
  type Node,
  UIModel,
  useSubscribe,
  useUIContext,
} from "@sillage/core";
import { type PropsWithChildren, ReactElement, ReactNode, useState } from "react";
import { Tabs, type TabsProps } from "antd";
import { PropsEditor } from "./PropsEditor";
import { StyleEditor } from "./StyleEditor";

export function RightTabs() {
  const ui = useUIContext();
  const [activeNode, setNode] = useState<Node | null>(null);

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange, (node: any) => {
    setNode(node);
  });

  if (!activeNode) {
    return null;
  }

  const Wrapper = (props: PropsWithChildren) => (
    <div className="pr pl">{props.children}</div>
  );

  const tabs: TabsProps["items"] = [];

  if (
    Materials.get().getByName(activeNode.getName())!.getPropNames().length > 0
  ) {
    tabs.push({
      label: "Props",
      key: "Props",
      children: (
        <Wrapper>
          <PropsEditor node={activeNode} />
        </Wrapper>
      ),
    });
  }

  tabs.push({
    label: "Style",
    key: "Style",
    children: (
      <Wrapper>
        <StyleEditor node={activeNode} />
      </Wrapper>
    ),
  });

  return <Tabs defaultActiveKey="0" type="card" items={tabs} />;
}
