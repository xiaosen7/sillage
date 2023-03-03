import { initialValue, getInitialValue, editor, getEditor } from "..";
import * as vt from "vitest";
import "reflect-metadata";

vt.describe("decorators", () => {
  vt.test("initialValue", () => {
    class Props {
      @initialValue(18)
      age!: number;
    }
    const inst = new Props();

    vt.expect(getInitialValue(inst, "age")).toBe(18);
  });

  vt.test("editor", () => {
    const dummy = vt.vi.fn(function myName() {
      return null;
    });
    class Props {
      @editor(dummy)
      age!: number;
    }

    vt.expect(Object.keys(Props).length).toBe(1);
    vt.expect("age" in Props).toBe(true);

    const inst = new Props();
    vt.expect(Object.keys(inst).length).toBe(1);
    vt.expect("age" in inst).toBe(true);
    vt.expect(inst.age).toBe(undefined);

    const C = getEditor(inst, "age");
    vt.expect(C.name).toBe("myName");
  });
});
