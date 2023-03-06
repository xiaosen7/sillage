import { UIModel, useSubscribe, useUIContext } from "@sillage/core";
import { useState } from "react";
import { PropsEditor } from "./PropsEditor";

export function RightTabs(): JSX.Element {
  const ui = useUIContext();
  const [node, setNode] = useState(ui.root);

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange, (node: any) => {
    setNode(node);
  });

  return <div>{node && <PropsEditor node={node} />}</div>;
}
