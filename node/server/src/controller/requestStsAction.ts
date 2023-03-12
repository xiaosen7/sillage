import { STS } from "ali-oss";

export async function requestStsAction() {
  // https://help.aliyun.com/document_detail/32077.html
  const sts = new STS({
    // 填写步骤1创建的RAM用户AccessKey。
    accessKeyId: "LTAI5tHm1PMeqt3wcPEA72gN",
    accessKeySecret: "z1p0v4kfDSvoFxvSOu5TBBcvXkNFWL",
  });

  const result = await sts.assumeRole(
    "acs:ram::1874547672839522:role/ramosstest",
    ``,
    3000,
    "sessiontest"
  );

  return {
    AccessKeyId: result.credentials.AccessKeyId,
    AccessKeySecret: result.credentials.AccessKeySecret,
    SecurityToken: result.credentials.SecurityToken,
    Expiration: result.credentials.Expiration,
  };
}
