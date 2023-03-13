import { useSubscribe } from "@sillage/core";
import {
  type AssistantLineValue,
  UIModel,
  useUIContext,
} from "@sillage/editor-core";
import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { Line } from "./Line";
import styles from "./Panel.module.scss";

export function PanelBody({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  const ui = useUIContext();
  const panelBodyEl = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState("grab");
  const [lines, setLines] = useState<AssistantLineValue[]>([]);

  const handleMouseDown = useCallback(
    (e: MouseEvent<any>) => {
      if (e.target === panelBodyEl.current) {
        ui.dispatch(UIModel.Actions.StartScrollOnPanel, [e.clientX, e.clientY]);
      }

      setCursor("grabbing");
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
      // ui.setActiveNode(null);
      setCursor("grab");
    },
    [ui]
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<any>) => {
      ui.dispatch(UIModel.Actions.StopScrollPanel, [e.clientX, e.clientY]);
      setCursor("grab");
    },
    [ui]
  );

  useSubscribe(
    ui,
    UIModel.Topic.AssistantLineChange,
    (lines: AssistantLineValue[]) => {
      setLines(lines);
    }
  );

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      ref={panelBodyEl}
      style={{
        width,
        height,
        cursor,
      }}
      className={styles["panel-body"]}
    >
      {children}
      {lines.map((line) => (
        <Line line={line} key={line.toKey()} />
      ))}
    </div>
  );
}
