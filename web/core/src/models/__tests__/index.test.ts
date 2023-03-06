import * as vt from "vitest";
import { type JsonNode, type JsonRootNode } from "../../types";
import { Node } from "../Node";

vt.describe("Node", () => {
  const json: JsonNode = {
    children: [],
    isContainer: false,
    name: "rect",
    passProps: {
      width: 390,
      height: 844,
    },
    position: [0, 0],
    id: "rectId",
  };

  vt.test("position", () => {
    const node = new Node(json);
    node.setPosition([20, 20]);
    vt.expect(node.getPosition()).toEqual([20, 20]);
    vt.expect(node.toJSON().position).toEqual([20, 20]);
  });

  vt.test("passProps", () => {
    const node = new Node(json);

    node.setPassProp("name", "rect");
    vt.expect(node.getPassProp("name")).toEqual("rect");
    vt.expect(node.getPassProps()).toEqual({
      width: 390,
      height: 844,
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
      name: "button",
      passProps: {},
      position: [0, 0],
      id: "buttonId",
    });

    node.linkChild(child);
    vt.expect(node.hasChild(child)).toBeTruthy();
    vt.expect(node.toJSON()).toMatchSnapshot();
    vt.expect(child.getParent()).toBe(node);

    child.setPosition([30, 30]);
    vt.expect(node.toJSON()).toMatchSnapshot();

    node.deleteChild(child);
    vt.expect(node.hasChild(child)).toBeFalsy();
    vt.expect(child.getParent()).toBe(node);

    node.unlinkChild(child);
    vt.expect(child.getParent()).toBe(undefined);
  });

  vt.test("initialize children", () => {
    const defaultJsonNode: JsonRootNode = {
      children: [
        {
          name: "rect",
          isContainer: false,
          children: [],
          passProps: {
            width: 100,
            height: 100,
          },
          id: "rect",
          position: [0, 0],
        },
      ],
      isContainer: true,
      name: "root",
      passProps: {
        // iphone 12
        width: 390,
        height: 844,
      },
      position: [0, 0],
      id: "root",
      layoutType: "free",
    };

    const root = new Node(defaultJsonNode);
    const rect = root.getChildren().toJS()[0] as Node;

    vt.expect(rect.getName()).toBe("rect");
    vt.expect(rect.getParent()).toBe(root);
    vt.expect(root.hasChild(rect)).toBe(true);
  });
});
