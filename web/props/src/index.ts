import "reflect-metadata";
import type { Bridge } from "@sillage/core";

export * from "./decorators";

export type PropsWithPropValue<T> = {
  propValue: any;
} & T;

export type PropsWithBridge<T> = {
  bridge: Bridge;
} & T;
