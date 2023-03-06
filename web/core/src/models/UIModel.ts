/* eslint-disable unicorn/filename-case */

import { StateMachine, defineProperty } from "@sillage/utils";
import { type JsonRootNode } from "../types";
import { Node } from "./Node";

enum States {
  Start,

  // states of scroll panel
  StartedScrollPanel,
  MovingOnPanel,
  StoppedScrollPanel,

  // states of drag node
  StartedDragNode,
  DraggingOnContainer,
  Dropped,
}

enum Actions {
  // Actions of scroll panel
  StartScrollOnPanel,
  MoveOnPanel,
  StopScrollPanel,

  // Actions of drag node
  StartDragNode,
  DragOnContainer,
  Drop,
  DragEnd,
}

enum Topic {
  UpdatePanelScroll,
  ActiveNodeChange,
}

export class UIModel extends StateMachine<States, Actions, Topic> {
  static readonly States = States;
  static readonly Actions = Actions;
  static readonly Topic = Topic;

  private activeNode: Node | null = null;

  root: Node;

  constructor(jsonRootNode: JsonRootNode) {
    super(States.Start);

    const root = new Node(jsonRootNode);
    this.root = root;

    if (import.meta.env.DEV) {
      defineProperty(window, "root", root);
    }

    this.describe("scroll panel", (register) => {
      let startX = 0;
      let startY = 0;

      register(
        States.Start,
        States.StartedScrollPanel,
        Actions.StartScrollOnPanel,
        ([x, y]) => {
          startX = x;
          startY = y;
        }
      );

      register(
        States.StartedScrollPanel,
        States.MovingOnPanel,
        Actions.MoveOnPanel
      );

      register(
        States.MovingOnPanel,
        States.MovingOnPanel,
        Actions.MoveOnPanel,
        ([x, y]) => {
          const offsetX = x - startX;
          const offsetY = y - startY;
          startX = x;
          startY = y;
          this.emit(Topic.UpdatePanelScroll, [-offsetX, -offsetY]);
        }
      );

      register(
        [States.StartedScrollPanel, States.MovingOnPanel],
        States.StoppedScrollPanel,
        Actions.StopScrollPanel
      );

      register(States.StoppedScrollPanel, States.Start, "<auto>");
    });

    this.describe("drag node", (register) => {
      let source: Node;
      let target: HTMLElement;
      let startXY: [number, number];
      register(
        States.Start,
        States.StartedDragNode,
        Actions.StartDragNode,
        (_source: Node, _target, _startXY: [number, number]) => {
          source = _source;
          target = _target;
          startXY = _startXY;
        }
      );

      register(
        States.StartedDragNode,
        States.DraggingOnContainer,
        Actions.DragOnContainer
      );

      register(
        States.DraggingOnContainer,
        States.DraggingOnContainer,
        Actions.DragOnContainer
      );

      register(
        States.DraggingOnContainer,
        States.Dropped,
        Actions.Drop,
        (container: Node, endXY: [number, number]) => {
          if (!source) {
            return;
          }

          if (container === source) {
            source.setPosition(
              calcPosition(container.getParent(), target, startXY, endXY)
            );
            this.setActiveNode(source);
          } else if (container.hasChild(source)) {
            // update position only
            source.setPosition(calcPosition(container, target, startXY, endXY));
            this.setActiveNode(source);
          } else {
            if (source.getParent()) {
              // move to this container
              source.getParent().unlinkChild(source);
              container.linkChild(source);
              source.setPosition(
                calcPosition(container, target, startXY, endXY)
              );
              this.setActiveNode(source);
            } else {
              // create a new node
              const cloned = source.clone();
              cloned.setPosition(
                calcPosition(container, target, startXY, endXY)
              );
              container.linkChild(cloned);
              this.setActiveNode(cloned);
            }
          }
        }
      );

      register(
        [States.StartedDragNode, States.DraggingOnContainer, States.Dropped],
        States.Start,
        Actions.DragEnd
      );

      // register(States.Dropped, States.Start, "<auto>");
    });
  }

  setupHotKeysEventListeners() {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code === "Delete") {
        const activeNode = this.activeNode;
        if (activeNode) {
          activeNode.getParent().unlinkChild(activeNode);
          this.setActiveNode(null);
        }
      }
    });
  }

  setActiveNode(node: Node | null) {
    this.activeNode = node;
    this.emit(Topic.ActiveNodeChange, node);
  }

  getActiveNode() {
    return this.activeNode;
  }

  protected printAction(
    currentState: States,
    nextState: States,
    action: Actions,
    args: any[]
  ): void {
    if (import.meta.env.DEV) {
      console.log("Dispatch", {
        currentState: States[currentState],
        nextState: States[nextState],
        action: Actions[action],
        args,
      });
    }
  }
}

function calcPosition(
  container: Node,
  target: HTMLElement,
  startXY: [number, number],
  endXY: [number, number]
) {
  const [endX, endY] = endXY;
  const containerBoundingRect = container.getMountBoundingRect()!;
  const targetBoundingRect = target.getBoundingClientRect();

  const position = [
    endX - containerBoundingRect.x - (startXY[0] - targetBoundingRect.x),
    endY - containerBoundingRect.y - (startXY[1] - targetBoundingRect.y),
  ] as [number, number];

  return position;
}
