import {
  describe,
  expect,
  it
} from "vitest";

import {
  createObservation
} from "../src/index.js";


describe("observation validation", () => {

  it("rejects undefined values", () => {

    expect(() =>
      createObservation({
        value: undefined
      })
    )
    .toThrow();

  });


  it("rejects functions", () => {

    expect(() =>
      createObservation({
        value: () => {}
      })
    )
    .toThrow();

  });


  it("rejects cyclic objects", () => {

    const value:any = {};
    value.self = value;

    expect(() =>
      createObservation(value)
    )
    .toThrow();

  });

});
