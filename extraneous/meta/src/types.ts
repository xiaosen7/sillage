import { type Constructable } from "@sillage/type-utils";
import type { CSSProperties, ComponentType } from "react";

// /////////////////////////////////////////////////////////////////////////////
// #region Node
// /////////////////////////////////////////////////////////////////////////////

interface NodeBase {
  id: string;
  name?: string;
  componentName: string;
  children: JSONNode[];
  passProps: {
    style: CSSProperties;
    [K: string]: any;
  };
}

/**
 * only used by container
 * @defaultValue "free"
 */
export type LayoutType = "column" | "row" | "free";

interface NodeType extends NodeBase {
  isContainer: false;
}

interface ContainerNodeType extends NodeBase {
  isContainer: true;
  layoutType: LayoutType;
}

export type JSONNode = ContainerNodeType | NodeType;

// #region page
export interface JSONPage {
  root: JSONNode;
  scriptUrl?: string;
  scriptCompiledUrl?: string;
}
// #endregion page

// /////////////////////////////////////////////////////////////////////////////
// #endregion
// /////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// #region Meta
// /////////////////////////////////////////////////////////////////////////////

export interface ComponentMetaConfig
  extends Pick<JSONNode, "name" | "isContainer"> {
  isInternal: boolean;
  layoutType?: LayoutType;
  styleEditor?: {
    supportGroups?: string[];
    unSupportGroups?: string[];
    unSupportProperties?: Array<keyof CSSProperties>;
  };
}

// /////////////////////////////////////////////////////////////////////////////
// #endregion
// /////////////////////////////////////////////////////////////////////////////

export type MaterialComponent<T> = ComponentType<T> & {
  Props: Constructable<T>;
  metaConfig: ComponentMetaConfig;
};
