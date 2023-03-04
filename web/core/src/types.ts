import { type PropsWithPropValue } from "@sillage/props";
import { type ComponentType } from "react";

export interface JsonNode {
  passProps: any;
  type: string;
  children: JsonNode[];
}

export interface JsonPageNode {
  passProps: any;
  type: "page";
  children: JsonNode[];
}

export interface JsonRootNode {
  passProps: any;
  type: "root";
  children: [JsonPageNode];
}

export type EditorComponentType<Props = any> = ComponentType<
  PropsWithPropValue<Props>
>;
