import React, { useReducer } from "react";
import mergeProps from "merge-props";
import { useSubscribe } from "../hooks";
import { Node } from "../../../";
import { type WrapperComponentProps } from "./types";

export function Locatable({ children, node, ...props }: WrapperComponentProps) {
  const [left, top] = node.getPosition();
  const [_, setVer] = useReducer((x: number) => x + 1, 0);

  useSubscribe(node as any, Node.Topic.PositionUpdate, () => {
    setVer();
  });

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    style: { position: "absolute", left, top },
  });

  const outerWrapperProps = mergeProps(props.outerWrapperProps, {
    style: { position: "relative" },
  });

  const newProps = {
    innerWrapperProps,
    outerWrapperProps,
  };

  return React.cloneElement(children, {
    ...children.props,
    ...newProps,
  });
}