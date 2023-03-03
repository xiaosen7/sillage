import defineConfig from "@sillage/define-component-meta";

export default defineConfig({
  name: "root",
  title: "根组件",
  box: {
    width: {
      mode: "auto",
    },
    height: {
      mode: "auto",
    },
  },
  internal: true,
});