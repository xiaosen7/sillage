import os from "node:os";
import { execaCommand } from "execa";
import tsConfig from "../tsconfig.json";
import { runAsyncFunction } from "./utils";

const type = process.argv[2];

if (type) {
  runAsyncFunction(async () => {
    await execaCommand(
      `pnpm tsc -p tsconfig.${type}.json --composite false --noEmit`,
      {
        stdout: "inherit",
      }
    );
  });
} else {
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
}
