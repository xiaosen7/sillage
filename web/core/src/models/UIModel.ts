/* eslint-disable unicorn/filename-case */

import { Rect, StateMachine, defineProperty } from "@sillage/utils";
import { type JsonRootNode } from "../types";
import { Node } from "./Node";
import { Resizer } from "./Resizer";

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

  // resize node
  StartedResize,
  Resizing,
  StoppedResize,

  // delete
  DeletedNode,
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

  // Actions of resize node
  StartResize,

  // Actions of delete node
  DeleteNode,
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

  constructor(rootNode: JsonRootNode | Node) {
    super(States.Start);

    if (rootNode instanceof Node) {
      this.root = rootNode;
    } else {
      this.root = new Node(rootNode);
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
            source.setRelRect(
              getRelRect(container.getParent(), target, startXY, endXY)
            );
            this.setActiveNode(source);
          } else if (container.hasChild(source)) {
            // update position only
            source.setRelRect(updateRelRect(source, startXY, endXY));
            this.setActiveNode(source);
          } else {
            if (source.getParent()) {
              // move to this container
              source.getParent().unlinkChild(source);
              container.linkChild(source);
              source.setRelRect(getRelRect(container, target, startXY, endXY));
              this.setActiveNode(source);
            } else {
              // create a new node
              const cloned = source.clone();
              container.linkChild(cloned);
              cloned.setRelRect(getRelRect(container, target, startXY, endXY));
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

      register(States.Dropped, States.Start, "<auto>");
    });

    this.describe("resize node", (register) => {
      let node: Node;
      let startX = 0;
      let startY = 0;
      let resizer: Resizer;

      register(
        States.Start,
        States.StartedResize,
        Actions.StartResize,
        ([x, y], _node, _type) => {
          startX = x;
          startY = y;
          node = _node;
          resizer = new Resizer(_type);
        }
      );

      register(States.StartedResize, States.Resizing, Actions.MoveOnPanel);

      register(
        States.Resizing,
        States.Resizing,
        Actions.MoveOnPanel,
        ([x, y]) => {
          const vec = [x - startX, y - startY] as [number, number];

          const rect = node.getRelRect()!;
          const nextRect = resizer.nextRect(rect, vec);
          console.log({ rect, nextRect, vec });
          node.setRelRect(nextRect);

          startX = x;
          startY = y;
        }
      );

      register(
        [States.StartedResize, States.Resizing],
        States.StoppedResize,
        Actions.StopScrollPanel
      );

      register(States.StoppedResize, States.Start, "<auto>");
    });

    this.describe("delete Node", (register) => {
      register(States.Start, States.DeletedNode, Actions.DeleteNode, () => {
        const activeNode = this.activeNode;
        if (activeNode) {
          activeNode.getParent().unlinkChild(activeNode);
          this.setActiveNode(null);
        }
      });

      register(States.DeletedNode, States.Start, "<auto>");
    });

    if (import.meta.env.DEV) {
      defineProperty(window, "ui", this);
    }
  }

  setActiveNode(node: Node | null) {
    const prevActiveNode = this.activeNode;
    this.activeNode = node;
    this.emit(Topic.ActiveNodeChange, [prevActiveNode, node]);
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
    console.log("Dispatch", {
      currentState: States[currentState],
      nextState: States[nextState],
      action: Actions[action],
      args,
    });
  }

  printState() {
    console.log(States[this.getState()]);
  }
}

function updateRelRect(
  source: Node,
  [sx, sy]: [number, number],
  [ex, ey]: [number, number]
) {
  const offsetX = ex - sx;
  const offsetY = ey - sy;
  const { x, y, width, height } = source.getRelRect()!;
  return new Rect(x + offsetX, y + offsetY, width, height);
}

function getRelRect(
  container: Node,
  target: HTMLElement,
  [sx, sy]: [number, number],
  [ex, ey]: [number, number]
) {
  // xy are both relative to window
  const { width, height, x: tx, y: ty } = target.getBoundingClientRect();

  const { x: cx, y: cy } = container.getMountedAbsRect()!;

  const left = ex - cx - (sx - tx);
  const top = ey - cy - (sy - ty);

  return new Rect(left, top, width, height);
}
