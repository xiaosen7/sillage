import os from "node:os";
import { execaCommand } from "execa";
import tsConfig from "../tsconfig.json";
import { runAsyncFunction } from "./utils";

runAsyncFunction(async () => {
  const tsconfigFiles = tsConfig.references.map((x) => x.path);

  console.log(
    `${os.EOL}Found config files: ${tsconfigFiles.join(", ")}${os.EOL}`
  );

  await Promise.all(
    tsconfigFiles.map((f) =>
      execaCommand(`pnpm tsc -p ${f} --composite false --noEmit`, {
        stdout: "inherit",
      })
    )
  );
});
