import * as vt from "vitest";
import { type Constructable } from "@sillage/type-utils";
import { editor, getEditor } from "..";
import "reflect-metadata";
import {
  decorateConstructor,
  decoratePropertyToConstructor,
  isConstructable,
  isPropsConstructor,
  marked,
  withMark,
} from "../mark";

vt.describe("decorators", () => {
  let Props: Constructable;
  let prototypeOfProps: object;
  let dummyFn: (...args: any[]) => any;
  const propName = "age";
  vt.beforeEach(() => {
    Props = class Props {
      [propName]!: number;
    };
    prototypeOfProps = Props.prototype;
    dummyFn = vt.vi.fn(() => {});
  });

  vt.test("editor", () => {
    editor(dummyFn)(prototypeOfProps, propName);

    const inst = new Props();
    const C = getEditor(inst, propName);
    vt.expect(C).toBeDefined();
    vt.expect(C?.name).toBe(dummyFn.name);
  });

  vt.test("isConstructable", () => {
    vt.expect(isConstructable(() => {})).toBeFalsy();

    function F() {}
    vt.expect(isConstructable(F)).toBeTruthy();
    // @ts-expect-error it's ok
    F.prototype = null;
    vt.expect(isConstructable(F)).toBeFalsy();

    class C {}
    vt.expect(isConstructable(C)).toBeTruthy();
  });

  vt.test("withMark", () => {
    class A {
      age!: number;
    }
    vt.expect(isPropsConstructor(A)).toBeFalsy();

    withMark(dummyFn)(A.prototype, "age");

    vt.expect(dummyFn).toBeCalledTimes(1);
    vt.expect(isPropsConstructor(A)).toBeTruthy();
  });

  vt.test("decoratePropertyToConstructor", () => {
    decoratePropertyToConstructor(prototypeOfProps, propName);

    vt.expect(Object.keys(Props).length).toBe(1);
    vt.expect(propName in Props).toBe(true);
  });

  vt.test("decorateConstructor", () => {
    vt.expect(isPropsConstructor(Props)).toBe(false);
    decorateConstructor(prototypeOfProps, propName);
    vt.expect(isPropsConstructor(Props)).toBe(true);
  });

  vt.test("marked", () => {
    vt.expect(marked(Props)).toBe(false);
    decorateConstructor(prototypeOfProps, propName);
    vt.expect(marked(Props)).toBe(true);
  });
});
