import { createContext, useContext } from "react";
import { Editor, type JsonRootNode } from "@sillage/core";

const defaultNodeJson: JsonRootNode = {
  passProps: {},
  type: "root",
  children: [
    {
      type: "page",
      passProps: {},
      children: [],
    },
  ],
};

export const EditorContext = createContext(new Editor(defaultNodeJson));

export function useEditor() {
  return useContext(EditorContext);
}
