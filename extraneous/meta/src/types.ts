import type { CSSProperties } from "react";

// /////////////////////////////////////////////////////////////////////////////
// #region Node
// /////////////////////////////////////////////////////////////////////////////

interface NodeBase {
  id: string;
  name: string;
  children: JsonNode[];
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

export type JsonNode = ContainerNodeType | NodeType;

export interface JsonRootNode extends ContainerNodeType {
  name: "root";
  layoutType: "free";
}

// /////////////////////////////////////////////////////////////////////////////
// #endregion
// /////////////////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////////////////
// #region Meta
// /////////////////////////////////////////////////////////////////////////////

export interface ComponentMetaConfig
  extends Pick<JsonNode, "name" | "isContainer"> {
  isInternal: boolean;
  layoutType?: LayoutType;
}

// /////////////////////////////////////////////////////////////////////////////
// #endregion
// /////////////////////////////////////////////////////////////////////////////
