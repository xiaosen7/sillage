import { type AssistantLineValue } from "@sillage/editor-core";
import styles from "./Line.module.scss";

export function Line({ line }: { line: AssistantLineValue }) {
  if (line.type === "x") {
    return <LineX line={line} />;
  }

  return <LineY line={line} />;
}

export function LineX({ line }: { line: AssistantLineValue }) {
  return (
    <div
      className={`${styles.line} ${styles.line__x}`}
      style={{
        left: line.value,
        opacity: line.precision,
      }}
    />
  );
}

export function LineY({ line }: { line: AssistantLineValue }) {
  return (
    <div
      className={`${styles.line} ${styles.line__y}`}
      style={{
        top: line.value,
        opacity: line.precision,
      }}
    />
  );
}
