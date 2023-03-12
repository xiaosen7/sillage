import { type Node } from "./models";
import type { ComponentType } from "react";

export * from "@sillage/meta";
export type EditorComponentType<T = any> = ComponentType<{
  onChange: (value: T) => void;
  value: T;
}>;
export type NodeRenderType = ComponentType<{ node: Node }>;
