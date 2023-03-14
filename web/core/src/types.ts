import { type Node } from "./models";
import type { ComponentType } from "react";

export type NodeRenderType = ComponentType<{ node: Node }>;
