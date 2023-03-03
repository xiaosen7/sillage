import { build } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

void (async () => {
  await build({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: path.resolve("materials/components/button"),
    plugins: [react({ tsDecorators: true })],
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: path.resolve("materials/components/button/src/index.ts"),
        name: "Button",
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: [
          "react",
          "react/jsx-runtime",
          "react-dom",
          "reflect-metadata",
          "antd",
        ],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            react: "React",
          },
        },
        plugins: [visualizer()],
      },
    },
  });
})();
