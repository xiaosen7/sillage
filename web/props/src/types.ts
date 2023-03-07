import type { CSSProperties } from "react";

export interface EditorProps {
  value?: any;
  onChange: (value: any) => void;
}

export type WithMaterialProps<T> = {
  style?: CSSProperties;
} & T;
