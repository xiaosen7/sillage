import React, { type MouseEvent, useCallback } from "react";
import mergeProps from "merge-props";
import { UIModel } from "../../../models";
import { useUIContext } from "../../../context";
import { useSubscribe } from "../hooks";
import { type WrapperComponentProps } from "./types";

export function Selectable({
  children,
  node,
  ...props
}: WrapperComponentProps) {
  const ui = useUIContext();

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange);

  const handleClick = useCallback(
    (e: MouseEvent<any>) => {
      e.stopPropagation();
      ui.setActiveNode(node);
    },
    [ui, node]
  );

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    onClick: handleClick,
    className: ui.getActiveNode() === node ? "outline-dashed" : "",
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
