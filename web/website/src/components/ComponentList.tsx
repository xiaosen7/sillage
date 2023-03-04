import { useCallback } from "react";
import { Editor, type Node } from "@sillage/core";
import { ComponentsLoader } from "@sillage/loader";
import { useEditor } from "../context";
import { Draggable } from "./Draggable";

export function ComponentList(): JSX.Element {
  const editor = useEditor();
  const handleDragStart = useCallback(
    (materialNode: Node) => {
      editor.dispatch(Editor.Actions.EvtStartDragAdd, materialNode);
    },
    [editor]
  );

  return (
    <section>
      {editor.getComponentMaterials().map((materialNode) => {
        const Component = ComponentsLoader.get().loadByName(
          materialNode.getMaterialName()
        );
        const props = materialNode.getPassProps();
        return (
          <Draggable
            key={materialNode.getMaterialName()}
            onDragStart={() => {
              handleDragStart(materialNode);
            }}
          >
            <Component key={Component.name} {...props} />
          </Draggable>
        );
      })}
    </section>
  );
}
