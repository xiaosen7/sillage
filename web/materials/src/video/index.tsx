import { lazy } from "react";
import { type MaterialComponent } from "@sillage/meta";
import { Props } from "./Props";
import metaConfig from "./meta.config";

export const Video: MaterialComponent<Props> = Object.assign(
  lazy(async () => await import("./Video")),
  {
    Props,
    metaConfig,
  }
);
