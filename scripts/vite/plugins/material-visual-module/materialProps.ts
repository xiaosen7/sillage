import { genByName } from "./genByName";

export async function materialProps(root: string) {
  return await genByName(root, "Props");
}
