import { MetaConfigsLoader } from "@sillage/loader";
import { StateMachine } from "@sillage/utils";
import invariant from "invariant";
import { type JsonRootNode } from "../types";
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

export class Editor extends StateMachine<States, Actions> {
  static Actions = Actions;

  private readonly componentMaterials: Node[];

  root: Node;

  constructor(jsonRootNode: JsonRootNode) {
    super(States.Start);

    const isRoot = jsonRootNode.type === "root";
    invariant(
      isRoot,
      `The type of jsonRootNode should be 'root', but got ${jsonRootNode.type}`
    );

    const maybePageType = jsonRootNode.children[0].type;
    const isPage = maybePageType === "page";
    invariant(
      isPage,
      `The type of jsonPageNode should be 'page', but got ${maybePageType}`
    );

    this.root = Node.fromJson(jsonRootNode);

    this.componentMaterials = MetaConfigsLoader.get()
      .getNames()
      .map((name) => new Node(name));

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
