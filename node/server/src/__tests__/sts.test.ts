import axios from "axios";
import * as vt from "vitest";
import { env } from "@sillage/env";

const serverHost = env.development.serverUrl;

const http = axios.create({
  baseURL: serverHost,
});

vt.test("sts", async () => {
  const res = await http.get("/sts");
  vt.expect(res.data.success).toBe(true);
  vt.expect(res.data.data.SecurityToken.length > 0).toBe(true);
});
