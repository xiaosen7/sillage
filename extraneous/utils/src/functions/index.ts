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
