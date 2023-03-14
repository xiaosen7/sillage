import type { ComponentType } from "react";

export type EditorComponentType<T = any> = ComponentType<{
  onChange: (value: T) => void;
  value: T;
}>;
