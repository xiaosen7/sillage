import { lazy } from "react";
import { type MaterialComponent } from "@sillage/meta";
import { Props } from "./Props";
import metaConfig from "./meta.config";

export const Carousel: MaterialComponent<Props> = Object.assign(
  lazy(async () => await import("./Carousel")),
  {
    Props,
    metaConfig,
  }
);
