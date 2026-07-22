import {
  describe,
  expect,
  it
} from "vitest";

import {
  createObservation
} from "../src/index.js";


describe("observation identity", () => {

  it("creates identical ids for equivalent payloads", () => {

    const first =
      createObservation({
        a: 1,
        b: 2
      });


    const second =
      createObservation({
        b: 2,
        a: 1
      });


    expect(first.id)
      .toBe(second.id);

  });

});
