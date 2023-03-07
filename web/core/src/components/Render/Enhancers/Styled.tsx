import { useUpdate } from "ahooks";
import React from "react";
import mergeProps from "merge-props";
import { pick } from "@sillage/utils";
import { Node } from "../../../";
import { useSubscribe } from "../hooks";
import { type EnhancerProps } from "./types";

interface StyledProps extends EnhancerProps {}

export function Styled({ node, children, ...props }: StyledProps) {
  const update = useUpdate();
  useSubscribe(node, Node.Topic.StylePropertyChange, update);

  const nodeStyle = node.getStyle();
  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    style: pick(nodeStyle, ["width", "height"]),
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
