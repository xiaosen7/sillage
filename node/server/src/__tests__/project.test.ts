import axios from "axios";
import * as vt from "vitest";
import { type Mode, env } from "@sillage/env";

const serverHost = env[process.env.NODE_ENV as Mode].serverUrl;

const http = axios.create({
  baseURL: serverHost,
});

const data = {
  id: "1",
  pageSchemaUrl: "...",
};

vt.describe("project", () => {
  vt.test("save", async () => {
    let res = await http.post("/project", data);
    vt.expect(res.data.success).toBe(true);
    vt.expect(res.data.data).toEqual(data);

    res = await http.post("/project", {
      ...data,
      pageSchemaUrl: "123",
    });
    vt.expect(res.data.success).toBe(true);
    vt.expect(res.data.data.pageSchemaUrl).toEqual("123");

    res = await http.get("/project/1");
    vt.expect(res.data.success).toBe(true);
    vt.expect(res.data.data.pageSchemaUrl).toEqual("123");
  });
});
