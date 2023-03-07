import { Map, Set, fromJS } from "immutable";
import { Emitter, Rect, genId } from "@sillage/utils";
import { type CSSProperties } from "react";
import invariant from "invariant";
import { type JsonNode, type LayoutType } from "../types";
import { type Material } from "./Materials";

enum Topic {
  PropsUpdate,
  PropUpdate,
  ChildChange,
  RectUpdate,
  StylePropertyChange,
}

const PassProps = "passProps";
const Name = "name";
const IsContainer = "isContainer";
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

    this.data = fromJS(initialJsonNode, (key, value) => {
      if (key === "children") {
        const children = value;
        const childrenNodes: Node[] = [];
        for (const jsonNode of children) {
          const child = new Node(jsonNode as any as JsonNode);
          childrenNodes.push(child);
        }

        return Set(childrenNodes);
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
  }

  static fromMaterial(m: Material) {
    const { metaConfig, name } = m;
    const { initialProps } = m;

    const isContainer = !!metaConfig.isContainer;

    const jsonNode = {
      children: [] as JsonNode[],
      isContainer,
      name,
      passProps: {
        style: {},
        ...initialProps,
      },
      id: genId(),
      layoutType: isContainer ? metaConfig.layoutType ?? "free" : undefined,
    };

    console.log({ jsonNode });

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
    return this.data.get(PassProps).toJS();
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

  setMountPoint(el: HTMLElement) {
    this.mountPoint = el;
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
}
