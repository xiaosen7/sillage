import { snakeCase } from "change-case";

export function toExportName(name: string) {
  return snakeCase(name);
}
