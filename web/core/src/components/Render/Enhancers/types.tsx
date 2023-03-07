import { type ReactElement } from "react";
import { type Node } from "../../../models";

export interface EnhancerProps {
  children: ReactElement;
  node: Node;
  [K: string]: any;
}
