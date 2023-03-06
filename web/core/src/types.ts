import { type EditorProps } from "@sillage/props";
import { type CSSProperties, type ComponentType } from "react";

export interface JsonNode {
  id: string;
  name: string;
  children: JsonNode[];
  passProps: any;
  position: [number, number];
  isContainer: boolean;
  style: CSSProperties;
}

export interface JsonRootNode extends JsonNode {
  name: "root";
  position: [0, 0];
  isContainer: true;
}

// export interface JsonRootNode {
//   passProps: any;
//   type: "root";
//   children: [JsonPageNode];
// }

export type EditorComponentType = ComponentType<EditorProps>;
