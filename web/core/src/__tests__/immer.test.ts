import * as vt from "vitest";
import { List, fromJS } from "immutable";

// vt.test("immer", () => {
//   const obj = {};
//   const obj2 = produce(obj, (draft) => {
//     draft.name = 1;
//   });

//   console.log(obj2);
// });

vt.test("Map", () => {
  let map = fromJS({
    children: [],
    isContainer: true,
    name: "root",
    passProps: {
      // iphone 12
      width: 390,
      height: 844,
    },
    position: [0, 0],
    id: "root",
  });

  map = map.set("position", List([30, 30]));

  console.log(map.toJS());
});
