import type { Bridge } from "@sillage/core";
import type { CSSProperties } from "react";

export interface EditorProps {
  value?: any;
  onChange: (value: any) => void;
}

export type MaterialComponentProps<T> = {
  bridge: Bridge;
  style?: CSSProperties;
} & T;
