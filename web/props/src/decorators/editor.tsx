import { type EditorComponentType } from "@sillage/editors";
import { withMark } from "./mark";
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
      console.log(PropEditorComponent.name, props);
      return <PropEditorComponent {...initialProps} {...props} />;
    },
  };

  return withMark(
    Reflect.metadata(editor.name, dummy[PropEditorComponent.name])
  );
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
): EditorComponentType | undefined {
  let inst = PropsConstructorOrInstance;
  if (typeof PropsConstructorOrInstance === "function") {
    inst = new PropsConstructorOrInstance();
  }

  return Reflect.getMetadata(editor.name, inst, propertyKey);
}
