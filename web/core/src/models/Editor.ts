import { ComponentsLoader } from "@sillage/loader";
import { StateMachine } from "@sillage/utils";
import { Node } from "./Node";

enum States {
  Start,
  StartAdd,
  Dragging,
  Added,
}

enum Actions {
  EvtStartDragAdd,
  EvtDragOver,
  EvtDrop,
}

// const defaultNodeJson: NodeDataJson = {
//   passProps: null,
//   type: "Root",
//   children: [
//     {
//       type: "Page",
//     },
//   ],
// };

export class Editor extends StateMachine<States, Actions> {
  static Actions = Actions;

  private readonly componentMaterials: Node[];

  // root: Node

  constructor() {
    super(States.Start);
    this.componentMaterials = ComponentsLoader.get()
      .getNames()
      .map((name) => Node.fromName(name));

    this.describe("添加组件", (register) => {
      let activeNode: Node;
      let position: [number, number];

      register(
        States.Start,
        States.StartAdd,
        Actions.EvtStartDragAdd,
        (node: Node) => {
          activeNode = node;
          console.log({ activeNode });
        }
      );

      register(States.StartAdd, States.Dragging, Actions.EvtDragOver);

      register(
        States.Dragging,
        States.Dragging,
        Actions.EvtDragOver,
        (p: [number, number]) => {
          position = p;
          console.log(position);
        }
      );

      register(
        States.Dragging,
        States.Added,
        Actions.EvtDrop,
        (node: Node) => {}
      );

      register(States.Added, States.Start, "<auto>", (node: Node) => {});
    });
  }

  getComponentMaterials() {
    return this.componentMaterials;
  }
}
