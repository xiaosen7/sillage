/* eslint-disable @typescript-eslint/consistent-type-imports */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../node_modules/vite/client" />

type ExportsType<T> = Record<string, T>;

declare module "virtual:material-components" {
  const ret: ExportsType<
    import("@sillage/props").WithMaterialProps<
      import("react").ComponentTypeType
    >
  >;

  export = ret;
}

declare module "virtual:material-props" {
  const ret: ExportsType<import("@sillage/type-utils").Constructable>;

  export = ret;
}

declare module "virtual:material-meta-configs" {
  const ret: ExportsType<import("@sillage/meta").ComponentMetaConfig>;

  export = ret;
}
