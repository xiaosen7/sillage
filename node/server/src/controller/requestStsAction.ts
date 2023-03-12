import { STS } from "ali-oss";

export async function requestStsAction() {
  // https://help.aliyun.com/document_detail/32077.html
  const sts = new STS({
    // 填写步骤1创建的RAM用户AccessKey。
    accessKeyId: process.env.accessKeyId,
    accessKeySecret: process.env.accessKeySecret,
  });

  const result = await sts.assumeRole(process.env.acs, ``, 3000, "sessiontest");

  return {
    AccessKeyId: result.credentials.AccessKeyId,
    AccessKeySecret: result.credentials.AccessKeySecret,
    SecurityToken: result.credentials.SecurityToken,
    Expiration: result.credentials.Expiration,
  };
}
