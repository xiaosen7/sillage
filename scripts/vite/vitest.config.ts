import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { MaterialVisualModule } from "./plugins";

export default defineConfig({
  test: {
    globals: true,
    deps: {
      experimentalOptimizer: {
        enabled: true,
      },
      // inline: [/virtual:material-components/, /@extraneous\/meta/],
    },
  },
  plugins: [react({ tsDecorators: true }), MaterialVisualModule()],
  ssr: {
    // noExternal: /@extraneous\/meta/,
  },
});
