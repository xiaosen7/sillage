import { type JSONNode, type Node, Selector } from "@sillage/core";
import { History } from "@sillage/utils";

export class NodeHistory {
  private readonly history: History<JSONNode[]>;
  private readonly selector: Selector;
  constructor(private readonly root: Node) {
    this.history = new History([root.toJSON()]);
    this.selector = new Selector(this.root);
  }

  undo() {
    const jsonNodes = this.history.back(1);
    this.update(jsonNodes);
  }

  redo() {
    const jsonNodes = this.history.forward(1);
    this.update(jsonNodes);
  }

  record(...nodes: Node[]) {
    this.history.visit(nodes.map((node) => node.toJSON()));
  }

  private update(jsonNodes: JSONNode[]) {
    for (const jsonNode of jsonNodes) {
      const node = this.selector.getNodeById(jsonNode.id);
      if (node) {
        node.setDataFromJSON(jsonNode);
      }
    }
  }
}
