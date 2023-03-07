import * as vt from "vitest";
import { type JsonNode, type JsonRootNode } from "../../types";
import { Node } from "../Node";

vt.describe("Node", () => {
  const json: JsonNode = {
    children: [],
    isContainer: false,
    name: "rect",
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
      name: "button",
      passProps: {
        style: {},
      },
      id: "buttonId",
    });

    node.linkChild(child);
    vt.expect(node.hasChild(child)).toBeTruthy();
    vt.expect(node.toJSON()).toMatchSnapshot();
    vt.expect(child.getParent()).toBe(node);

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
            style: {},
          },
          id: "rect",
        },
      ],
      isContainer: true,
      name: "root",
      passProps: {
        style: {},
      },
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
