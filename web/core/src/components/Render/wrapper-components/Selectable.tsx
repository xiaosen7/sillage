import React, { type MouseEvent, useCallback, useReducer } from "react";
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
  const [_, setVer] = useReducer((x: number) => x + 1, 0);

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange, () => {
    setVer();
  });

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
