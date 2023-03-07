import mergeProps from "merge-props";
import React, { type DragEvent, useCallback, useState } from "react";
import { UIModel, useUIContext } from "../../..";
import { type EnhancerProps } from "./types";

export function Draggable({ node, children, ...props }: EnhancerProps) {
  const [cursor, setCursor] = useState("grab");
  const ui = useUIContext();

  const onDragStart = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const startXY = [e.clientX, e.clientY];
      ui.dispatch(UIModel.Actions.StartDragNode, node, e.target, startXY);
      setCursor("grabbing");
    },
    [node, ui]
  );

  const onDragEnd = useCallback(() => {
    ui.dispatch(UIModel.Actions.DragEnd);
    setCursor("grab");
  }, [ui]);

  const onMouseOver = (e: React.MouseEvent) => {
    console.log("onMouseOver");
    e.stopPropagation();
    e.preventDefault();
  };

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    draggable: true,
    onDragStart,
    onDragEnd,
    onMouseOver,
    style: { cursor },
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
