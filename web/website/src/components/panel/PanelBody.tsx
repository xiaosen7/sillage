import { type Node, UIModel, useUIContext } from "@sillage/core";
import { type MouseEvent, type ReactNode, useCallback, useRef } from "react";
import styles from "./panel.module.scss";

export function PanelBody({
  root,
  width,
  height,
  children,
}: {
  root: Node;
  width: number;
  height: number;
  children: ReactNode;
}) {
  const ui = useUIContext();
  const panelBodyEl = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: MouseEvent<any>) => {
      if (e.target === panelBodyEl.current) {
        ui.dispatch(UIModel.Actions.StartScrollOnPanel, [e.clientX, e.clientY]);
      }
    },
    [ui]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<any>) => {
      ui.dispatch(UIModel.Actions.MoveOnPanel, [e.clientX, e.clientY]);
    },
    [ui]
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent<any>) => {
      ui.dispatch(UIModel.Actions.StopScrollPanel, [e.clientX, e.clientY]);
      ui.setActiveNode(null);
    },
    [ui]
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<any>) => {
      ui.dispatch(UIModel.Actions.StopScrollPanel, [e.clientX, e.clientY]);
    },
    [ui]
  );

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      ref={panelBodyEl}
      style={{ width, height }}
      className={styles["panel-body"]}
    >
      {children}
    </div>
  );
}
