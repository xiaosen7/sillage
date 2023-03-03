// import {it} from "vitest"
import * as vt from "vitest";
import { StateMachine } from "../StateMachine";

vt.describe("StateMachine", () => {
  let sm: StateMachine<"S1" | "S2" | "S3", "A12" | "A23">;
  let fn: vt.Mock;
  const args = ["1", "2", "3"];

  vt.beforeEach(() => {
    sm = new StateMachine<"S1" | "S2" | "S3", "A12" | "A23">("S1");
    fn = vt.vi.fn((..._args) => {
      vt.expect(_args).toEqual(args);
    });
    sm.register("S1", "S2", "A12", fn);
    sm.register("S2", "S3", "A23", fn);
  });

  vt.it("when register then dispatch", () => {
    sm.dispatch("A12", ...args);
    vt.expect(fn).toBeCalledTimes(1);
    vt.expect(sm.getState()).toBe("S2");
  });

  vt.it("when dispatch an action which doesn't match current state", () => {
    sm.dispatch("A23", ...args);
    vt.expect(fn).toBeCalledTimes(0);
    vt.expect(sm.getState()).toBe("S1");
  });

  vt.it("auto transfer", () => {
    sm.dispatch("A23", ...args);
    vt.expect(fn).toBeCalledTimes(0);
    vt.expect(sm.getState()).toBe("S1");
  });
});
