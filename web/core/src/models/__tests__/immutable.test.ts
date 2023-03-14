import Immutable, { List } from "immutable";
import * as vt from "vitest";

vt.test("immutable", () => {
  const data = {
    children: [],
    isContainer: false,
    componentName: "rect",
    passProps: {
      style: { width: 390, height: 844 },
      images: [],
    },
    id: "rectId",
  };

  const immutableData = Immutable.fromJS(data, (key, value) => {
    if (key === "children") {
      return List(value);
    }

    return Immutable.isIndexed(value) ? value.toList() : value.toOrderedMap();
  }).toMap();

  // 使用 setIn() 方法修改 style 属性
  const newImmutableData = immutableData
    .setIn(["passProps", "style", "width"], 500)
    .setIn(["passProps", "style", "height"], 1000);

  vt.expect(newImmutableData.toJS()).toMatchInlineSnapshot(`
    {
      "children": [],
      "componentName": "rect",
      "id": "rectId",
      "isContainer": false,
      "passProps": {
        "images": [],
        "style": {
          "height": 1000,
          "width": 500,
        },
      },
    }
  `);
});
