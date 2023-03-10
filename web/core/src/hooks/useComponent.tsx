import { type ComponentType, useMemo, useReducer } from "react";
import invariant from "invariant";
import { Bridge, Materials, Node } from "../models";
import { useSubscribe } from "./useSubscribe";

export function useComponent(node: Node, Render: ComponentType) {
  const [_, setVer] = useReducer((x: number) => x + 1, 0);

  useSubscribe(
    node,
    [
      Node.Topic.PropsUpdate,
      Node.Topic.ChildChange,
      Node.Topic.PropUpdate,
      Node.Topic.StylePropertyChange,
    ],
    () => {
      setVer();
    }
  );

  const Component = useMemo(() => {
    let Component;
    const material = Materials.get().getByComponentName(
      node.getComponentName()
    );

    if (material === undefined) {
      const error = `Can't get component for ${node.getComponentName()}`;
      invariant(!Component, error);
      return (() => error) as any;
    } else {
      return material.Component;
    }
  }, [node]);

  const key = node.getId();

  const props = node.getPassProps();
  const bridge = new Bridge(node, Render);

  // proxy by wrap <span>
  delete props.style.left;
  delete props.style.top;

  return {
    key,
    props,
    Component,
    bridge,
  };
}
