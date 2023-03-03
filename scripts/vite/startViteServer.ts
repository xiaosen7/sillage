import { createServer } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import { MaterialVisualModule } from "./plugins";

void (async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: path.resolve("website"),
    plugins: [react({ tsDecorators: true }), UnoCSS(), MaterialVisualModule()],
    server: {
      port: 8080,
    },
  });
  await server.listen();

  server.printUrls();
})();
