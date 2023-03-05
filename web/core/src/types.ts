import { type EditorProps } from "@sillage/props";
import { type ComponentType } from "react";

export interface JsonNode {
  passProps: any;
  name: string;
  children: JsonNode[];
  position: [number, number];
  isContainer: boolean;
  id: string;
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
