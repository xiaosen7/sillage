import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  test: {
    globals: true,
    deps: {
      experimentalOptimizer: {
        enabled: true,
      },
    },
  },
  plugins: [react({ tsDecorators: true })],
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
});
