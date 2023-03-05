import { UIModel, useUIContext } from "@sillage/core";
import { useEffect, useState } from "react";
import { PropertyEditor } from "./PropertyEditor";

export function RightTabs(): JSX.Element {
  const ui = useUIContext();
  const [node, setNode] = useState(ui.root);

  useEffect(() => {
    const subs = ui
      .on(UIModel.Topic.ActiveNodeChange)
      .subscribe((node: any) => {
        setNode(node);
      });

    return () => {
      subs.unsubscribe();
    };
  }, [ui]);

  return <div>{node && <PropertyEditor node={node} />}</div>;
}
