import { type ReactElement } from "react";
import type React from "react";

interface Poops {
  children: ReactElement;
  onDragStart: React.DragEventHandler<HTMLSpanElement>;
}

export function Draggable(props: Poops) {
  return (
    <span draggable onDragStart={props.onDragStart}>
      {props.children}
    </span>
  );
}
