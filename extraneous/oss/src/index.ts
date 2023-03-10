import OSS from "ali-oss";

const client = new OSS({
  accessKeyId: "LTAI5tPCa9s9Gmj8NLRkzpBn",
  accessKeySecret: "mQj9rENC2opUsdstwCXHIuC3zshDgj",
  bucket: "sillage-ui",
  region: "oss-cn-beijing",
  timeout: 0,
});

export async function putText(name: string, text: string) {
  if (typeof Blob === "function") {
    return await client.put(
      name,
      new Blob(["Hello World!"], {
        type: "text/plain",
      })
    );
  } else if (typeof Buffer === "function") {
    return await client.put(name, Buffer.from(text));
  } else {
    throw new TypeError("Blob or Buffer in global object should be a function");
  }
}

export { client };
