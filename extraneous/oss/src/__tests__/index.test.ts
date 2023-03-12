import * as vt from "vitest";
import { createClient, putText } from "../index";

vt.describe("sts", () => {
  vt.test("putText", async () => {
    const res = await putText("/test.txt", "hello world");
    vt.expect(res.url).toBeDefined();
  });

  vt.test("createClient", async () => {
    const client = await createClient();
    await putText("/test.txt", "hello world");
    const res = await client.get("/test.txt");
    vt.expect(res.res.status).toBe(200);
  });
});
