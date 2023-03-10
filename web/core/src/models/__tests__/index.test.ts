import * as vt from "vitest";
import { type JSONNode } from "../../types";
import { Node } from "../Node";

vt.describe("Node", () => {
  const json: JSONNode = {
    children: [],
    isContainer: false,
    componentName: "rect",
    passProps: {
      style: { width: 390, height: 844 },
    },
    id: "rectId",
  };

  vt.test("passProps", () => {
    const node = new Node(json);

    node.setPassProp("name", "rect");
    vt.expect(node.getPassProp("name")).toEqual("rect");
    vt.expect(node.getPassProps()).toEqual({
      style: { width: 390, height: 844 },
      name: "rect",
    });

    node.setPassProps({ name: "rect" });
    vt.expect(node.getPassProp("name")).toEqual("rect");
    vt.expect(node.toJSON().passProps).toEqual({
      name: "rect",
    });
  });

  vt.test("children", () => {
    const node = new Node(json);
    const child = new Node({
      children: [],
      isContainer: false,
      componentName: "button",
      passProps: {
        style: {},
      },
      id: "buttonId",
    });

    node.linkChild(child);
    vt.expect(node.includeChild(child)).toBeTruthy();
    vt.expect(node.toJSON()).toMatchSnapshot();
    vt.expect(child.getParent()).toBe(node);

    node.deleteChild(child);
    vt.expect(node.includeChild(child)).toBeFalsy();
    vt.expect(child.getParent()).toBe(node);

    node.unlinkChild(child);
    vt.expect(child.getParent()).toBe(undefined);
  });

  vt.test("initialize children", () => {
    const defaultJsonNode: JSONNode = {
      children: [
        {
          componentName: "rect",
          isContainer: false,
          children: [],
          passProps: {
            style: {},
          },
          id: "rect",
        },
      ],
      isContainer: true,
      componentName: "Root",
      passProps: {
        style: {},
      },
      id: "root",
      layoutType: "free",
    };

    const root = new Node(defaultJsonNode);
    const rect = root.getChildren().toJS()[0] as Node;

    vt.expect(rect.getComponentName()).toBe("rect");
    vt.expect(rect.getParent()).toBe(root);
    vt.expect(root.includeChild(rect)).toBe(true);
  });

  vt.test("toIterator", () => {
    const defaultJsonNode: JSONNode = {
      children: [
        {
          componentName: "c2",
          isContainer: false,
          children: [
            {
              componentName: "c3",
              isContainer: false,
              passProps: {
                style: {},
              },
              id: "c3",
              children: [],
            },
          ],
          passProps: {
            style: {},
          },
          id: "rect",
        },
        {
          componentName: "c4",
          isContainer: false,
          children: [],
          passProps: {
            style: {},
          },
          id: "c4",
        },
      ],
      isContainer: true,
      componentName: "c1",
      passProps: {
        style: {},
      },
      id: "root",
      layoutType: "free",
    };

    const node = new Node(defaultJsonNode);
    const nodes = [...node.toIterator()];
    const componentNames = nodes.map((node) => node.getComponentName());
    vt.expect(componentNames).toEqual(["c1", "c2", "c3", "c4"]);
  });
});
