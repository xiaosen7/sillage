import { Page } from "@sillage/core";
import React from "react";
import { RenderRootNodeInEditor } from "./RenderRootNode";

export function RenderInEditor({ page }: { page: Page }) {
  React.useEffect(() => {
    page.emit(Page.Topic.Mounted);
  }, [page, page.root]);
  return <RenderRootNodeInEditor root={page.root} />;
}
