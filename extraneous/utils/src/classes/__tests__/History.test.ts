// import {it} from "vitest"
import * as vt from "vitest";
import { History } from "../History";

vt.test("History", () => {
  const history = new History(1);
  vt.expect(history.back(1)).toBe(1);
  vt.expect(history.forward(1)).toBe(1);

  history.visit(2);
  history.visit(3);
  vt.expect(history.back(1)).toBe(2);
  vt.expect(history.forward(1)).toBe(3);
  vt.expect(history.back(1)).toBe(2);
  vt.expect(history.back(1)).toBe(1);
  vt.expect(history.forward(1)).toBe(2);
  vt.expect(history.forward(1)).toBe(3);

  vt.expect(history.back(1)).toBe(2);
  history.visit(5);
  vt.expect(history.forward(1)).toBe(5);
});
