import React, { type MouseEvent, useCallback, useReducer } from "react";
import mergeProps from "merge-props";
import { type Node, useSubscribe } from "@sillage/core";
import { UIModel, useUIContext } from "../../../";
import { type EnhancerProps } from "./types";

export function Selectable({ children, node, ...props }: EnhancerProps) {
  const ui = useUIContext();
  const [_, setVer] = useReducer((x: number) => x + 1, 0);

  useSubscribe(ui, UIModel.Topic.ActiveNodeChange, ([last, active]: Node[]) => {
    if (last === node || active === node) {
      setVer();
    }
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
    // className: ui.getActiveNode() === node ? "outline-dashed" : "",
  });

  return React.cloneElement(children, {
    ...children.props,
    ...props,
    innerWrapperProps,
  });
}
