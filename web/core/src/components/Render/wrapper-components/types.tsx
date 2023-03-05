import { type ReactElement } from "react";
import { type Node } from "../../../models";

export interface WrapperComponentProps {
  children: ReactElement;
  node: Node;
  [K: string]: any;
}
