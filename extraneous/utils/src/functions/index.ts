export * from "./compose";

export function genId() {
  return Math.random().toString(36).slice(2);
}

export function defineProperty(target: object, key: string, value: any) {
  Reflect.defineProperty(target, key, { value });
}

export function arrayed<T>(value: T) {
  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}

export function pick<T>(obj: T, keys: Array<keyof T>) {
  const ret: Partial<T> = {};
  for (const key of keys) {
    ret[key] = obj[key];
  }

  return ret;
}

export function isInvalidValue(value: any) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "")
  );
}

export function getFileExtName(name: string) {
  const ext = name.split(".").pop();
  return ext ? `.${ext}` : "";
}
