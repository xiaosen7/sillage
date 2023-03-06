import mergeProps from "merge-props";
import React, { type DragEvent, useCallback } from "react";
import { UIModel, useUIContext } from "../../../";
import { type WrapperComponentProps } from "./types";

export function Draggable({ node, children, ...props }: WrapperComponentProps) {
  const ui = useUIContext();

  const onDragStart = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const startXY = [e.clientX, e.clientY];
      ui.dispatch(UIModel.Actions.StartDragNode, node, e.target, startXY);
    },
    [node, ui]
  );

  const onDragEnd = useCallback(() => {
    ui.dispatch(UIModel.Actions.DragEnd);
  }, [ui]);

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    draggable: true,
    onDragStart,
    onDragEnd,
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
