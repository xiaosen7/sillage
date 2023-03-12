/* eslint-disable unicorn/filename-case */
import { execaCommand } from "execa";

execaCommand("npm run dev", {
  stdout: "inherit",
});
