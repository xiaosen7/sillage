import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [react({ tsDecorators: true })],
});
