// import {it} from "vitest"
import * as vt from "vitest";
import { Emitter } from "../Emitter";

vt.describe("Emitter", () => {
  vt.it("when subscribe single topics", () => {
    const emitter = new Emitter<"eat">();
    const ob = vt.vi.fn().mockImplementation((data) => {
      vt.expect(data).toBe("onEating");
    });
    emitter.on("eat").subscribe(ob);
    emitter.emit("eat", "onEating");
    vt.expect(ob).toBeCalledTimes(1);
  });

  vt.it("when subscribe multiple topics", () => {
    const emitter = new Emitter<"e1" | "e2">();
    const ob = vt.vi.fn().mockImplementation((data) => {
      vt.expect(data).toBe("onEating");
    });
    emitter.on(["e1", "e2"]).subscribe(ob);
    emitter.emit("e1", "onEating");
    emitter.emit("e2", "onEating");
    vt.expect(ob).toBeCalledTimes(2);
  });
});
