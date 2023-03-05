import { Map, Set, is } from "immutable";
import { Emitter, genId } from "@sillage/utils";
import { type JsonNode } from "../types";
import { type Material } from "./Materials";

enum Topic {
  PropsUpdate,
  ChildChange,
  PositionUpdate,
}

const PassProps = "passProps";
const Name = "name";
const IsContainer = "isContainer";
const Position = "position";
const Children = "children";
const Id = "id";

const Parent = "_parent";

/**
 * 所有的节点数据保存在这里
 */
export class Node extends Emitter<Topic> {
  static readonly Topic = Topic;
  private data: Map<string, any>;
  private mountPoint: HTMLElement | null = null;

  constructor(initialJsonNode: JsonNode) {
    super();

    const { children, ...rest } = initialJsonNode;

    this.data = Map(rest);

    // link children
    this.data = this.data.set(Children, Set());
    for (const jsonNode of children) {
      const node = new Node(jsonNode);
      this.linkChild(node);
    }
  }

  toJSON(): JsonNode {
    const object = this.data.toJS();
    Reflect.deleteProperty(object, Parent);
    const children = object.children as Node[];
    object.children = children.map((x) => x.toJSON());
    return object as JsonNode;
  }

  getParent(): Node {
    return this.data.get(Parent);
  }

  setParent(parent?: Node) {
    this.data = this.data.set(Parent, parent);
  }

  isRoot() {
    return this.getName() === "root";
  }

  getId() {
    return this.data.get(Id);
  }

  static fromMaterial(m: Material) {
    const { metaConfig, name } = m;
    const { initialProps } = m;

    const jsonNode: JsonNode = {
      children: [],
      isContainer: metaConfig.isContainer,
      name,
      position: [0, 0],
      passProps: initialProps,
      id: genId(),
    };

    return new Node(jsonNode);
  }

  setPassProp(prop: string, value: any) {
    this.data = this.data.setIn([PassProps, prop], value);
    this.emit(Topic.PropsUpdate);
  }

  getPassProp(prop: string) {
    return this.data.getIn([PassProps, prop]);
  }

  getPassProps() {
    return this.data.get(PassProps);
  }

  setPassProps(passProps: any) {
    this.data = this.data.set(PassProps, passProps);
    this.emit(Topic.PropsUpdate);
  }

  getName(): string {
    return this.data.get(Name);
  }

  isContainer(): boolean {
    return this.data.get(IsContainer);
  }

  setContainer(isContainer: boolean) {
    this.data = this.data.set(IsContainer, isContainer);
  }

  getPosition(): [number, number] {
    return this.data.get(Position);
  }

  setPosition(position: [number, number]) {
    if (is(position, this.getPosition())) {
      return;
    }

    this.data = this.data.set(Position, position);
    this.emit(Topic.PositionUpdate);
  }

  hasChild(node: Node) {
    return this.getChildren().has(node);
  }

  /**
   * delete child and set `child.parent` to `undefined`
   * @param node
   */
  unlinkChild(child: Node) {
    this.deleteChild(child);
    child.setParent();
  }

  linkChild(child: Node) {
    if (this.hasChild(child) && child.getParent() === this) {
      return;
    }

    if (child.getParent()) {
      // break link
      const nodeParent = child.getParent();
      nodeParent.unlinkChild(child);
    }

    child.setParent(this);
    const children = this.getChildren();
    this.data = this.data.set(Children, children.add(child));
    this.emit(Node.Topic.ChildChange);
  }

  /**
   * only delete child in parent
   * @param node
   */
  deleteChild(node: Node) {
    const children = this.getChildren().delete(node);
    this.data = this.data.set(Children, children);
    this.emit(Node.Topic.ChildChange);
  }

  getChildren(): Set<Node> {
    return this.data.get(Children);
  }

  setMountPoint(el: HTMLElement) {
    if (this.mountPoint) {
      return false;
    }

    this.mountPoint = el;
    return true;
  }

  getMountBoundingRect() {
    return this.mountPoint?.getBoundingClientRect();
  }

  clone() {
    const json = this.toJSON();
    json.id = genId();
    return new Node(json);
  }
}
