import { type Constructable } from "@sillage/type-utils";

/**
 * Make a mark at the props constructor.
 * @param PropEditorComponent
 * @returns
 */
export function withMark(decorator: PropertyDecorator) {
  return (prototype: object, key: string) => {
    const constructor = prototype.constructor;
    if (!isConstructable(constructor)) {
      throw new Error("prototype.constructor can't be constructed.");
    }

    decorator(prototype, key);
    decoratePropertyToConstructor(prototype, key);
    decorateConstructor(prototype, key);
  };
}

export function isConstructable(maybeConstructor: any) {
  return (
    maybeConstructor !== undefined &&
    maybeConstructor?.prototype?.constructor === maybeConstructor
  );
}

export function decoratePropertyToConstructor(prototype: object, key: string) {
  const constructor = prototype.constructor;
  Reflect.defineProperty(constructor, key, {
    value: undefined,
    enumerable: true,
  });
}

export function marked(constructor: Constructable) {
  return Reflect.get(constructor, "__isPropsConstructor") === true;
}

export function decorateConstructor(prototype: object, key: string) {
  const constructor = prototype.constructor as Constructable;
  if (!marked(constructor)) {
    Reflect.defineProperty(constructor, "__isPropsConstructor", {
      value: true,
    });
  }
}

export function isPropsConstructor(constructor: Constructable) {
  return marked(constructor);
}
