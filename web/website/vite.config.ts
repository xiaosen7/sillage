import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import visualizer from "rollup-plugin-visualizer";
import { env } from "../../extraneous/env";

export default defineConfig({
  plugins: [react({ tsDecorators: true }), UnoCSS(), visualizer()],
  server: {
    port: env.development.websitePort,
    open: true,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
