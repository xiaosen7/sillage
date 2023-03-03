import { createContext, useContext } from "react";
import { Editor } from "@sillage/core";

export const EditorContext = createContext(new Editor());

export function useEditor() {
  return useContext(EditorContext);
}
