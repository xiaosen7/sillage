// import { type BoxDescriptor } from "./meta-model";

export type Unit = "px" | "%";
export type SizeUnitInput =
  | {
      value?: number;
      unit?: Unit;
      mode: "fill";
    }
  | {
      value: number;
      unit: Unit;
      mode: "value";
    }
  | {
      value: number;
      unit: Unit;
      mode: "fixed";
    }
  | {
      value?: number;
      unit?: Unit;
      mode: "auto";
    };

export type SizeMode = SizeUnitInput["mode"];

export type CSSPosition = "absolute" | "relative";
export type CSSDisplay = "block" | "flex";
export type FlexDirection = "row" | "column" | "";

export interface BoxDescriptorInput {
  movable?: boolean;
  resizable?: boolean;
  container?: boolean;
  position?: CSSPosition;
  display?: CSSDisplay;
  flexDirection?: FlexDirection;
  selectable?: boolean;
  left?: number | string | SizeUnitInput;
  top?: number | string | SizeUnitInput;
  width: number | string | SizeUnitInput;
  height: number | string | SizeUnitInput;
  marginLeft?: number | string | SizeUnitInput;
  marginTop?: number | string | SizeUnitInput;
  marginRight?: number | string | SizeUnitInput;
  marginBottom?: number | string | SizeUnitInput;
}

export interface ComponentMetaConfig {
  // 组件名称
  name: string;

  // 标题
  title: string;

  // 盒子模型
  box: BoxDescriptorInput;

  internal?: boolean;
}

export interface BasicJsonNode {
  group: string;
  name: string;
  children?: JsonNode[];
  id?: number;
  passProps?: any;
}

/**
 * InstanceData导出JS的数据类型
 */
// export type NodeInstanceJsonStructure = BasicJsonNode & { box: BoxDescriptor };

export type JsonNode = BasicJsonNode & {
  box: BoxDescriptorInput;
  linkedId?: number;
};

export interface JsonPage {
  links: Record<number, JsonNode>;
  page: JsonNode;
}

export type DragUIEventName = "click" | "f12" | "data";
