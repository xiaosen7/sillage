import { List, Map, fromJS } from "immutable";
import { Emitter, Rect, genId } from "@sillage/utils";
import { type CSSProperties } from "react";
import invariant from "invariant";
import { type JSONNode, type LayoutType } from "../types";
import { type Material } from "./Materials";

enum Topic {
  PropsUpdate,
  PropUpdate,
  ChildChange,
  RectUpdate,
  StylePropertyChange,
}

const Name = "name";
const PassProps = "passProps";
const ComponentName = "componentName";
const IsContainer = "isContainer";
const Children = "children";
export const Id = "id";
const Style = "style";
const LayoutTypeKey = "layoutType";

const Parent = "_parent";

/**
 * 所有的节点数据保存在这里
 */
export class Node extends Emitter<Topic> {
  static readonly Topic = Topic;
  private data!: Map<string, any>;
  private mountPoint: HTMLElement | null = null;

  constructor(initialJsonNode: JSONNode) {
    super();

    this.setDataFromJSON(initialJsonNode);
  }

  setDataFromJSON(jsonNode: JSONNode) {
    this.data = fromJS(jsonNode, (key, value) => {
      if (key === "children") {
        const children = value;
        const childrenNodes: Node[] = [];
        for (const jsonNode of children) {
          const child = new Node(jsonNode as any as JSONNode);
          childrenNodes.push(child);
        }

        return List(childrenNodes);
      } else if (value instanceof Object) {
        return Map(value as any);
      } else {
        return value;
      }
    }).toMap() as any;

    // link children
    for (const child of this.getChildren()) {
      this.linkChild(child);
    }

    this.emit([Topic.ChildChange, Topic.PropsUpdate, Topic.RectUpdate]);
  }

  static fromMaterial(m: Material) {
    const { metaConfig, componentName } = m;
    const { initialProps } = m;

    const isContainer = !!metaConfig.isContainer;

    const jsonNode = {
      children: [] as JSONNode[],
      isContainer,
      componentName,
      passProps: {
        style: {},
        ...initialProps,
      },
      id: genId(),
      layoutType: isContainer ? metaConfig.layoutType ?? "free" : undefined,
    };

    return new Node(jsonNode as any as JSONNode);
  }

  getId(): string {
    return this.data.get(Id);
  }

  getData() {
    return this.data;
  }

  hasName() {
    return this.data.get(Name) !== undefined;
  }

  getName() {
    return this.data.get(Name);
  }

  setName(name: string) {
    this.data = this.data.set(Name, name);
  }

  getNodesByName(name: string): Node | null {
    const children = this.getChildren();
    for (const child of children) {
      if (child.getId() === name) {
        return child;
      }

      const grandson = child.getNodesByName(name);
      if (grandson) {
        return grandson;
      }
    }

    return null;
  }

  toJSON(): JSONNode {
    const object = this.data.toJS();

    Reflect.deleteProperty(object, Parent);

    const children = object.children as Node[];
    object.children = children.map((x) => x.toJSON());

    return object as JSONNode;
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #region structure
  // /////////////////////////////////////////////////////////////////////////////

  isRoot() {
    return this.getComponentName() === "Root";
  }

  getParent(): Node {
    return this.data.get(Parent);
  }

  setParent(parent?: Node) {
    this.data = this.data.set(Parent, parent);
  }

  includeChild(node: Node) {
    return this.getChildren().includes(node);
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
    if (this.includeChild(child) && child.getParent() === this) {
      return;
    }

    if (child.getParent()) {
      // break link
      const nodeParent = child.getParent();
      nodeParent.unlinkChild(child);
    }

    child.setParent(this);
    const children = this.getChildren();
    if (!children.includes(child)) {
      this.data = this.data.set(Children, children.push(child));
    }

    this.emit(Node.Topic.ChildChange);
  }

  /**
   * only delete child in parent
   * @param node
   */
  deleteChild(node: Node) {
    let children = this.getChildren();
    const index = children.indexOf(node);
    if (index >= 0) {
      children = children.delete(index);
      this.data = this.data.set(Children, children);
      this.emit(Node.Topic.ChildChange);
    }
  }

  getChildren(): List<Node> {
    return this.data.get(Children);
  }

  moveForwardChild(child: Node) {
    let children = this.getChildren();
    const index = children.indexOf(child);
    const prevChild = children.get(index - 1);
    if (index - 1 >= 0 && prevChild) {
      children = children.set(index, prevChild);
      children = children.set(index - 1, child);
      this.data = this.data.set(Children, children);
      this.emit(Node.Topic.ChildChange);
    }
  }

  moveBackChild(child: Node) {
    let children = this.getChildren();
    const index = children.indexOf(child);
    const siblingChild = children.get(index + 1);
    if (index + 1 < children.size && siblingChild) {
      children = children.set(index, siblingChild);
      children = children.set(index + 1, child);
      this.data = this.data.set(Children, children);
      this.emit(Node.Topic.ChildChange);
    }
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
    return this.data.get(PassProps).toJS();
  }

  setPassProps(passProps: any) {
    this.data = this.data.set(PassProps, passProps);
    this.emit(Topic.PropsUpdate);
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // #region style
  // /////////////////////////////////////////////////////////////////////////////

  getStyle(): CSSProperties {
    const map = this.data.getIn([PassProps, Style]) as Map<
      keyof CSSProperties,
      any
    >;
    return map.toJS() as CSSProperties;
  }

  setStyleProperty(property: keyof CSSProperties, value: string | number) {
    this.data = this.data.setIn([PassProps, Style, property], value);
    this.emit(Topic.StylePropertyChange, property);
  }

  getStyleProperty(property: keyof CSSProperties): number | string {
    return this.data.getIn([PassProps, Style, property]) as number | string;
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion
  // /////////////////////////////////////////////////////////////////////////////

  getComponentName(): string {
    return this.data.get(ComponentName);
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

  setMountPoint(el: HTMLElement) {
    this.mountPoint = el;
  }

  getMountPoint() {
    return this.mountPoint;
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #region rect
  // /////////////////////////////////////////////////////////////////////////////

  /**
   * get the Bounding rect when node mounted in document
   * @returns
   */
  getMountedBoundingRect() {
    return this.mountPoint?.getBoundingClientRect();
  }

  /**
   * get the rect which relative window when node mounted in document
   * @returns
   */
  getMountedAbsRect() {
    const box = this.getMountedBoundingRect();
    if (box === undefined) {
      invariant(
        box,
        `getMountedBoundingRect() returns undefined, may be caused by this node haven't be mounted.`
      );
      return;
    }

    return new Rect(box.left, box.top, box.width, box.height);
  }

  /**
   * get the rect which relative parent container when node mounted in document
   * @returns
   */
  getRelRect() {
    const absRect = this.getMountedAbsRect();
    const parentAbsRect = this.getParent().getMountedAbsRect();
    return absRect?.minus(parentAbsRect!);
  }

  /**
   * set the rect which is relative parent container
   * @param rect
   */
  setRelRect(rect: Rect) {
    this.setStyleProperty("left", rect.left);
    this.setStyleProperty("top", rect.top);
    this.setStyleProperty("width", rect.width);
    this.setStyleProperty("height", rect.height);
    this.emit(Node.Topic.RectUpdate);
  }

  /**
   * set the rect which is relative window
   * @param rect
   */
  setAbsRect(rect: Rect) {
    const parentRect = this.getParent().getMountedAbsRect()!;
    this.setStyleProperty("left", rect.left - parentRect.left);
    this.setStyleProperty("top", rect.top - parentRect.top);
    this.setStyleProperty("width", rect.width);
    this.setStyleProperty("height", rect.height);
    this.emit(Node.Topic.RectUpdate);
  }

  // /////////////////////////////////////////////////////////////////////////////
  // #endregion rect
  // /////////////////////////////////////////////////////////////////////////////

  clone() {
    const json = this.toJSON();
    json.id = genId();
    return new Node(json);
  }

  *toIterator(): Generator<Node> {
    yield this;

    const children = this.getChildren();
    for (const child of children) {
      const it = child.toIterator();
      for (const item of it) {
        yield item;
      }
    }
  }
}
