import { type Node } from "./Node";

export class Selector {
  namedNodes = new Map<string, Set<Node>>();
  constructor(private readonly root: Node) {
    // initialize namedNodes map
    const nodes = [...root.toIterator()];
    for (const node of nodes) {
      this.addNodeToNamedMap(node);
    }
  }

  private addNodeToNamedMap(node: Node) {
    const name = node.getName();
    if (!name) {
      return;
    }

    let nodes = this.namedNodes.get(name);
    if (!nodes) {
      this.namedNodes.set(name, (nodes = new Set()));
    }

    nodes?.add(node);
  }

  getNodesByName(name: string) {
    return [...(this.namedNodes.get(name) ?? [])];
  }
}
