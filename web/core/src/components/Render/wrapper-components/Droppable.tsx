import mergeProps from "merge-props";

import React, { type DragEvent, useCallback, useState } from "react";
import { UIModel, useUIContext } from "../../../";
import { type WrapperComponentProps } from "./types";

export function Droppable({ node, children, ...props }: WrapperComponentProps) {
  const [dragging, setDragging] = useState(false);
  const ui = useUIContext();
  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      ui.dispatch(UIModel.Actions.Drop, node, [e.clientX, e.clientY]);
      setDragging(false);
    },
    [ui, node]
  );

  const onDragOver = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      ui.dispatch(UIModel.Actions.DragOnContainer, [e.clientX, e.clientY]);
      setDragging(true);
    },
    [ui]
  );

  const onDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const innerWrapperProps = mergeProps(props.innerWrapperProps, {
    onDrop,
    onDragOver,
    onDragLeave,
    className: dragging ? "outline-dotted" : "",
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
