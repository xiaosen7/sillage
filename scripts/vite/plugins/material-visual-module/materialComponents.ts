import { genByName } from "./genByName";

export async function materialComponents(root: string) {
  return await genByName(root, "default");
}
