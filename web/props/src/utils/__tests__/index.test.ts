import * as vt from "vitest";
import { getInitialProps, getInitialValue } from "..";

class Props {
  age = 18;
  name!: string;
}

vt.describe("utils", () => {
  vt.test("getInitialValue", () => {
    vt.expect(getInitialValue(Props, "age")).toBe(18);
    vt.expect(getInitialValue(Props, "name")).toBe(undefined);
  });

  vt.test("getInitialValue", () => {
    vt.expect(getInitialValue(Props, "age")).toBe(18);
    vt.expect(getInitialValue(Props, "name")).toBe(undefined);
  });

  vt.test("getInitialProps", () => {
    vt.expect(getInitialProps(Props)).toMatchInlineSnapshot(`
      {
        "age": 18,
        "name": undefined,
      }
    `);
  });
});
