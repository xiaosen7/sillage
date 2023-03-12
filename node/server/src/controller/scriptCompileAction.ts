import { type Request } from "express";
import { build } from "esbuild";

export async function scriptCompileAction(req: Request) {
  const { content, format } = req.body;

  console.log(content, format);
  const result = await build({
    stdin: {
      contents: content,
      sourcefile: "input.ts",
      loader: "ts",
    },
    write: false, // 设置为false，不写入文件
    format,
    target: "esnext",
  });

  console.log(result);

  return {
    content: result.outputFiles[0].text,
    format,
  };
}
