/* eslint-disable @typescript-eslint/no-floating-promises */
import type OSS from "ali-oss";

export let client: OSS;

export async function getClient() {
  if (client) {
    return client;
  }

  const OSS = await import("ali-oss").then((m) => m.default);
  client = new OSS({
    accessKeyId: "LTAI5tPCa9s9Gmj8NLRkzpBn",
    accessKeySecret: "mQj9rENC2opUsdstwCXHIuC3zshDgj",
    bucket: "sillage-ui",
    region: "oss-cn-beijing",
    timeout: 0,
  });

  return client;
}
