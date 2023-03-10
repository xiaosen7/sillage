import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";

const port = Number(process.env.SILLAGE_PREVIEW_PORT);

export default defineConfig({
  plugins: [react({ tsDecorators: true }), UnoCSS()],
  server: {
    port,
  },
});
