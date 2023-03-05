import type { Bridge } from "@sillage/core";

export interface EditorProps {
  value: any;
  onChange: (value: any) => void;
}

export type PropsWithBridge<T> = {
  bridge: Bridge;
} & T;
