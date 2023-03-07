/* eslint-disable unicorn/filename-case */
import { createContext, useContext } from "react";
import { type Bridge } from "../";

export const BridgeContext = createContext<Bridge | null>(null);

export function useBridge() {
  return useContext(BridgeContext);
}
