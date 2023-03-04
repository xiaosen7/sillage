import { type EditorComponentType } from "@sillage/core";
import type { FunctionComponent } from "react";

/**
 * Set the editor component of component's property.
 * @param PropEditorComponent
 * @returns
 */
export function editor<T extends FunctionComponent<any>>(
  PropEditorComponent: T,
  initialProps?: Partial<Parameters<T>[0]>
) {
  const dummy = {
    [PropEditorComponent.name](props: Parameters<T>[0]) {
      return <PropEditorComponent {...initialProps} {...props} />;
    },
  };

  return (target: object, key: string) => {
    // @ts-expect-error it's ok
    target.constructor[key] = undefined;
    Reflect.metadata(editor.name, dummy[PropEditorComponent.name])(target, key);
  };
}

/**
 * Get the editor component of component's property.
 * @param PropsConstructorOrInstance
 * @param propertyKey
 * @returns
 */
export function getEditor(
  PropsConstructorOrInstance: any,
  propertyKey: string
): EditorComponentType {
  let inst = PropsConstructorOrInstance;
  if (typeof PropsConstructorOrInstance === "function") {
    inst = new PropsConstructorOrInstance();
  }

  return Reflect.getMetadata(editor.name, inst, propertyKey);
}
