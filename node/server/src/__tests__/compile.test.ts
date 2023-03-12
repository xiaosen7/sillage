import axios from "axios";
import * as vt from "vitest";
import { type Mode, env } from "@sillage/env";

const serverHost = env[process.env.NODE_ENV as Mode].serverUrl;

const http = axios.create({
  baseURL: serverHost,
});

vt.test("compiler", async () => {
  const content = `import { aa } from "jquery";\ndocument.getElementById('xxx')`;
  let res = await http.post("/script/compile", {
    content,
    format: "cjs",
  });

  vt.expect(res.data.data).toMatchInlineSnapshot(`
    {
      "content": "document.getElementById(\\"xxx\\");
    ",
      "format": "cjs",
    }
  `);

  res = await http.post("/script/compile", {
    content,
    format: "esm",
  });

  vt.expect(res.data.data).toMatchInlineSnapshot(`
    {
      "content": "document.getElementById(\\"xxx\\");
    ",
      "format": "esm",
    }
  `);

  res = await http.post("/script/compile", {
    content,
    format: "iife",
  });

  vt.expect(res.data.data).toMatchInlineSnapshot(`
    {
      "content": "(() => {
      document.getElementById(\\"xxx\\");
    })();
    ",
      "format": "iife",
    }
  `);
});
