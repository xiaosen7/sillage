import { execaCommand } from "execa";
import fg from "fast-glob";
import os from "os";

async function main() {
  const tsconfigFiles = await fg([
    "tsconfig.*.json",
    "!tsconfig.base.json",
    "!tsconfig.json",
  ]);

  console.log(
    `${os.EOL}Found config files: ${tsconfigFiles.join(", ")}${os.EOL}`
  );

  await Promise.all(
    tsconfigFiles.map((f) =>
      execaCommand(`pnpm tsc --noemit -p ${f}`, {
        stdout: "inherit",
      })
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
