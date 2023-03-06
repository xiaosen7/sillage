import { Map, Set, is } from "immutable";
import { Emitter, genId } from "@sillage/utils";
import { type CSSProperties } from "react";
import { type JsonNode, type LayoutType } from "../types";
import { type Material } from "./Materials";

enum Topic {
  PropsUpdate,
  PropUpdate,
  ChildChange,
  PositionUpdate,
  StylePropertyChange,
}

const PassProps = "passProps";
const Name = "name";
const IsContainer = "isContainer";
const Position = "position";
const Children = "children";
const Id = "id";
const Style = "style";
const LayoutTypeKey = "layoutType";

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

  static fromMaterial(m: Material) {
    const { metaConfig, name } = m;
    const { initialProps } = m;

    const isContainer = !!metaConfig.isContainer;

    const jsonNode = {
      children: [] as JsonNode[],
      isContainer,
      name,
      position: [0, 0],
      passProps: initialProps,
      id: genId(),
      style: {},
      layoutType: isContainer ? metaConfig.layoutType ?? "free" : undefined,
    };

    return new Node(jsonNode as any as JsonNode);
  }

  getId(): string {
    return this.data.get(Id);
  }

  toJSON(): JsonNode {
    const object = this.data.toJS();
    Reflect.deleteProperty(object, Parent);
    const children = object.children as Node[];
    object.children = children.map((x) => x.toJSON());
    return object as JsonNode;
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #region structure
  // /////////////////////////////////////////////////////////////////////////////

  isRoot() {
    return this.getName() === "root";
  }

  getParent(): Node {
    return this.data.get(Parent);
  }

  setParent(parent?: Node) {
    this.data = this.data.set(Parent, parent);
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

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region props
  // /////////////////////////////////////////////////////////////////////////////

  setPassProp(prop: string, value: any) {
    this.data = this.data.setIn([PassProps, prop], value);
    this.emit(Topic.PropUpdate, prop);
  }

  getPassProp(prop: string) {
    return this.data.getIn([PassProps, prop]);
  }

  getPassProps() {
    return this.data.get(PassProps);
  }

  setPassProps(passProps: any) {
    this.data = this.data.set(PassProps, passProps);
    this.emit(Topic.PropsUpdate, passProps);
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region style
  // /////////////////////////////////////////////////////////////////////////////

  getStyle(): CSSProperties {
    return this.data.getIn([PassProps, Style]) as CSSProperties;
  }

  setStyleProperty(property: keyof CSSProperties, value: string | number) {
    console.log("setStyleProperty", property, value);
    this.data = this.data.setIn([PassProps, Style, property], value);
    this.emit(Topic.StylePropertyChange, property);
  }

  getStyleProperty(property: keyof CSSProperties): number | string {
    return this.data.getIn([PassProps, Style, property]) as number | string;
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

  getName(): string {
    return this.data.get(Name);
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #region container property
  // /////////////////////////////////////////////////////////////////////////////

  isContainer(): boolean {
    return this.data.get(IsContainer);
  }

  getLayoutType(): LayoutType {
    return this.data.get(LayoutTypeKey);
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

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
