import classnames from "classnames";
import { useCallback, useReducer } from "react";
import { type Node, useSubscribe } from "@sillage/core";
import { Resizer, UIModel, useUIContext } from "../../..";
import { type EnhancerProps } from "./types";
import styles from "./Resizable.module.scss";
import type React from "react";

export function Resizable({ node }: Omit<EnhancerProps, "children">) {
  const [_, setVer] = useReducer((x: number) => x + 1, 0);
  const ui = useUIContext();
  useSubscribe(
    ui,
    UIModel.Topic.ActiveNodeChange,
    ([last, active]: [Node, Node]) => {
      if (last === node || active === node) {
        setVer();
      }
    }
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, type: number) => {
      e.stopPropagation();
      e.preventDefault();
      ui.dispatch(
        UIModel.Actions.StartResize,
        [e.clientX, e.clientY],
        node,
        type
      );
    },
    [node, ui]
  );

  if (ui.getActiveNode() !== node) {
    return null;
  }

  return (
    <>
      {Resizer.data.map(([direction, type]) => {
        return (
          <div
            key={type}
            className={classnames([styles.cube, styles[`cube__${type}`]])}
            onMouseDown={(e) => handleMouseDown(e, type)}
          ></div>
        );
      })}
    </>
  );
}
