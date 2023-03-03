import { useMemo } from "react";
import { type Node } from "@sillage/core";

export function PropertyEditor({ node }: { node: Node }) {
  const componentProps = useMemo(() => node.getComponentProps(), [node]);
  return (
    <>
      {componentProps.getNames().map((propName) => {
        const EditorComponent = componentProps.getEditorOfProp(propName);
        if (!EditorComponent) {
          return null;
        }

        return <EditorComponent key={propName} />;
      })}
    </>
  );
}
