/* eslint-disable unicorn/filename-case */
import { createContext, useContext } from "react";
import { type UIModel } from "../";

export const UIContext = createContext<UIModel | null>(null);

export function useUIContext() {
  return useContext(UIContext)!;
}
