import React, { useReducer } from "react";
import mergeProps from "merge-props";
import { useSubscribe } from "../hooks";
import { Node } from "../../..";
import { type EnhancerProps } from "./types";

export function Locatable({ children, node, ...props }: EnhancerProps) {
  const [_, setVer] = useReducer((x: number) => x + 1, 0);

  useSubscribe(
    node,
    [Node.Topic.RectUpdate, Node.Topic.StylePropertyChange],
    () => {
      setVer();
    }
  );

  // according to parent node layoutType, we set different value
  const { left, top } = node.getStyle();
  const parentNode = node.getParent();
  let innerWrapperProps;

  if (parentNode.getLayoutType() === "free") {
    innerWrapperProps = mergeProps(props.innerWrapperProps, {
      style: { position: "absolute", left, top },
    });
  } else {
    innerWrapperProps = props.innerWrapperProps;
  }

  const newProps = {
    innerWrapperProps,
  };

  return React.cloneElement(children, {
    ...children.props,
    ...newProps,
  });
}
