import { defineConfig } from "@sillage/meta";

export default defineConfig({
  isInternal: false,
  isContainer: false,
  styleEditor: {
    unSupportGroups: ["Background", "Border"],
    unSupportProperties: ["color"],
  },
});
