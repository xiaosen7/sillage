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
  const inst = ensureInstance(PropsConstructorOrInstance);
  return inst[propertyKey];
}

export function getInitialProps(PropsConstructorOrInstance: any) {
  return { ...ensureInstance(PropsConstructorOrInstance) };
}

export function ensureInstance(MaybeConstructable: any) {
  let inst = MaybeConstructable;
  if (typeof MaybeConstructable === "function") {
    inst = new MaybeConstructable();
  }

  return inst;
}
