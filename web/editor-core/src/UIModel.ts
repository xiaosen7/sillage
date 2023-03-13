/* eslint-disable unicorn/filename-case */

import { Rect, StateMachine, defineProperty } from "@sillage/utils";
import { type JSONPage, type Node, Page } from "@sillage/core";
import { Resizer } from "./Resizer";
import { NodeHistory } from "./NodeHistory";
import { AssistantLine } from "./AssistantLine";

enum States {
  Start,

  // states of scrolling panel
  StartedScrollPanel,
  MovingOnPanel,
  StoppedScrollPanel,

  // states of dragging node
  StartedDragNode,
  DraggingOnContainer,
  Dropped,

  // states of resizing node
  StartedResize,
  Resizing,
  StoppedResize,

  // states of deleting node
  DeletedNode,

  // states of moving forward node
  MovedForwardNode,

  // states of moving back node
  MovedBackNode,
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

  // Actions of move node
  MoveForwardNode,
  MoveBackNode,
}

enum Topic {
  UpdatePanelScroll,
  ActiveNodeChange,
  ActiveNode,
  Copy,
  Paste,
  Undo,
  Redo,
  AssistantLineChange,
}

export class UIModel extends StateMachine<States, Actions, Topic> {
  static readonly States = States;
  static readonly Actions = Actions;
  static readonly Topic = Topic;

  private activeNode: Node | null = null;
  private clipboard: Node | null = null;

  readonly page: Page;
  readonly history: NodeHistory;

  constructor(jsonPage: JSONPage) {
    super(States.Start);

    this.page = new Page(jsonPage);
    this.history = new NodeHistory(this.page.root);

    // #region StateMachine scroll panel
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
    // #endregion

    // #region StateMachine drag node
    this.describe("drag node", (register) => {
      let source: Node;
      let target: HTMLElement;
      let startXY: [number, number];
      let assistantLine: AssistantLine;
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
        Actions.DragOnContainer,
        () => {
          const threshold = 2;
          assistantLine = new AssistantLine(
            [...this.page.root.toIterator()],
            threshold
          );
        }
      );

      register(
        States.DraggingOnContainer,
        States.DraggingOnContainer,
        Actions.DragOnContainer,
        ([x, y]: number[]) => {
          const { width, height, left, top } = target.getBoundingClientRect();
          const lines = assistantLine.requestLinesFromRect(
            new Rect(
              x - (startXY[0] - left),
              y - (startXY[1] - top),
              width,
              height
            )
          );

          this.emit(Topic.AssistantLineChange, lines);
        }
      );

      register(
        States.DraggingOnContainer,
        States.Dropped,
        Actions.Drop,
        (container: Node, endXY: [number, number]) => {
          this.emit(Topic.AssistantLineChange, []);

          if (container === source) {
            // move node in current container
            source.setRelRect(
              getRelRect(container.getParent(), target, startXY, endXY)
            );
            this.emit(Topic.ActiveNode, source);
            this.history.record(source.getParent());
          } else if (container.includeChild(source)) {
            // update position only
            source.setRelRect(updateRelRect(source, startXY, endXY));
            this.emit(Topic.ActiveNode, source);
            this.history.record(source.getParent());
          } else {
            if (source.getParent()) {
              // parent change
              source.getParent().unlinkChild(source);
              container.linkChild(source);
              source.setRelRect(getRelRect(container, target, startXY, endXY));
              this.emit(Topic.ActiveNode, source);
              this.history.record(this.page.root);
            } else {
              // create a new node
              const cloned = source.clone();
              container.linkChild(cloned);
              cloned.setRelRect(getRelRect(container, target, startXY, endXY));
              this.emit(Topic.ActiveNode, cloned);
              this.history.record(this.page.root);
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
    // #endregion StateMachine

    // #region StateMachine resize node
    // /////////////////////////////////////////////////////////////////////////////
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
          node.setRelRect(nextRect);

          startX = x;
          startY = y;
        }
      );

      register(
        [States.StartedResize, States.Resizing],
        States.StoppedResize,
        Actions.StopScrollPanel,
        () => {
          this.history.record(this.page.root);
        }
      );

      register(States.StoppedResize, States.Start, "<auto>");
    });
    // /////////////////////////////////////////////////////////////////////////////
    // #endregion

    // #region StateMachine delete Node
    // /////////////////////////////////////////////////////////////////////////////
    this.describe("delete Node", (register) => {
      register(
        States.Start,
        States.DeletedNode,
        Actions.DeleteNode,
        (node: Node) => {
          node.getParent().unlinkChild(node);
          this.history.record(this.page.root);
        }
      );

      register(States.DeletedNode, States.Start, "<auto>");
    });
    // /////////////////////////////////////////////////////////////////////////////
    // #endregion

    // #region StateMachine MoveNode
    this.describe("move forward node", (register) => {
      register(
        States.Start,
        States.MovedForwardNode,
        Actions.MoveForwardNode,
        () => {
          if (this.activeNode === null) {
            return;
          }

          const parent = this.activeNode.getParent();
          parent.moveForwardChild(this.activeNode);
          this.history.record(this.page.root);
        }
      );
      register(States.MovedForwardNode, States.Start, "<auto>");
    });

    this.describe("move back node", (register) => {
      register(States.Start, States.MovedBackNode, Actions.MoveBackNode, () => {
        if (this.activeNode === null) {
          return;
        }

        const parent = this.activeNode.getParent();
        parent.moveBackChild(this.activeNode);
        this.history.record(this.page.root);
      });
      register(States.MovedBackNode, States.Start, "<auto>");
    });
    // #endregion MoveNode

    this.on(Topic.ActiveNode).subscribe((node: any) => {
      console.log(node.toJSON());
      const prevActiveNode = this.activeNode;
      this.activeNode = node;
      this.emit(Topic.ActiveNodeChange, [prevActiveNode, node]);
    });

    // #region Copy Paste
    this.on(Topic.Copy).subscribe(() => {
      if (this.activeNode) {
        this.clipboard = this.activeNode;
      }
    });

    this.on(Topic.Paste).subscribe(() => {
      if (this.clipboard) {
        const cloned = this.clipboard.clone();
        cloned.setRelRect(
          this.clipboard.getRelRect()!.add(new Rect(5, 5, 0, 0))
        );
        this.clipboard.getParent().linkChild(cloned);
        this.history.record(cloned.getParent());
      }
    });
    // #endregion Copy Paste

    // #region Undo Redo
    this.on(Topic.Undo).subscribe(() => {
      this.history.undo();
    });
    this.on(Topic.Redo).subscribe(() => {
      this.history.redo();
    });
    // #endregion Undo Redo

    if (import.meta.env.DEV) {
      defineProperty(window, "ui", this);
    }
  }

  getActiveNode() {
    return this.activeNode;
  }

  toJSON() {
    return this.page.toJSON();
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
