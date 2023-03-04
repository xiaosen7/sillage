import type { Bridge } from "@sillage/core";

export type PropsWithPropValue<T> = {
  propValue: any;
} & T;

export type PropsWithBridge<T> = {
  bridge: Bridge;
} & T;
