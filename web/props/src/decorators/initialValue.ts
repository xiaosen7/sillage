import { withMark } from "./mark";

const metadataKey = "initialValue";

/**
 * Set the metadata value of property which describes when user drops the component on the page.
 * @param value
 * @returns
 */
export function initialValue(value: any): any {
  return withMark(Reflect.metadata(metadataKey, value));
}

/**
 * Get the metadata value of property which describes when user drops the component on the page.
 * @param PropsConstructorOrInstance
 * @param propertyKey
 * @returns
 */
export function getInitialValue(
  PropsConstructorOrInstance: any,
  propertyKey: string
): any {
  let inst = PropsConstructorOrInstance;
  if (typeof PropsConstructorOrInstance === "function") {
    inst = new PropsConstructorOrInstance();
  }

  return Reflect.getMetadata(metadataKey, inst, propertyKey);
}
