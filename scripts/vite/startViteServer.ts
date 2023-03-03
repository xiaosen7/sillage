import path from "node:path";
import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import { runAsyncFunction } from "../utils";
import { MaterialVisualModule } from "./plugins";

runAsyncFunction(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: path.resolve("web/website"),
    plugins: [react({ tsDecorators: true }), UnoCSS(), MaterialVisualModule()],
    server: {
      port: 8080,
    },
  });
  await server.listen();

  server.printUrls();
});
