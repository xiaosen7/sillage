/* eslint-disable @typescript-eslint/no-floating-promises */
import path from "node:path";
import { execaCommand } from "execa";

const script = path.resolve("scripts/npm_run_dev.mjs");

execaCommand(`pm2 start --name @sillage/website ${script}`, {
  cwd: "web/website",
  stdout: "inherit",
})
  .then(() =>
    execaCommand(`pm2 start --name @sillage/preview ${script}`, {
      cwd: "web/preview",
      stdout: "inherit",
    })
  )
  .then(() =>
    execaCommand(`pm2 start --name @sillage/server ${script}`, {
      cwd: "node/server",
      stdout: "inherit",
    })
  );
