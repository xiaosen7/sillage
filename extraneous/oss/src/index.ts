import OSS from "ali-oss";
import { type Mode, env } from "@sillage/env";
import axios from "axios";

const serverHost = env[process.env.NODE_ENV as Mode].serverUrl;

async function getSTSToken() {
  return await axios.get(`${serverHost}/sts`).then((res) => res.data.data);
}

createClient._client = null;
export async function createClient(): Promise<OSS> {
  let client = createClient._client;
  if (client) {
    return client;
  }

  const token = await getSTSToken();

  // https://help.aliyun.com/document_detail/32077.html
  client = new OSS({
    region: "oss-cn-beijing",
    accessKeyId: token.AccessKeyId,
    accessKeySecret: token.AccessKeySecret,
    stsToken: token.SecurityToken,
    bucket: "sillage-ui",
    refreshSTSToken: async () => {
      const refreshToken = await getSTSToken();
      return {
        accessKeyId: refreshToken.AccessKeyId,
        accessKeySecret: refreshToken.AccessKeySecret,
        stsToken: refreshToken.SecurityToken,
      };
    },
  });

  createClient._client = client;

  return client;
}

export async function putText(name: string, text: string) {
  const client = await createClient();

  if (typeof Blob === "function") {
    return await client.put(
      name,
      new Blob([text], {
        type: "text/plain",
      })
    );
  } else if (typeof Buffer === "function") {
    return await client.put(name, Buffer.from(text));
  } else {
    throw new TypeError("Blob or Buffer in global object should be a function");
  }
}
