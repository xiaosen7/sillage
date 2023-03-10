import { type Node } from "@sillage/core";
import { type ReactElement } from "react";

export interface EnhancerProps {
  node: Node;
  children: ReactElement;
  innerWrapperProps?: any;
}
