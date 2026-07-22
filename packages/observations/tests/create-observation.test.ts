import { describe, expect, it } from "vitest";

import { createObservation } from "../src/index.js";

describe("createObservation", () => {
  it("creates a content-addressed immutable observation", () => {
    const observation = createObservation({
      value: 42,
    });

    expect(observation.payload).toEqual({
      value: 42,
    });

    expect(typeof observation.id).toBe("string");

    expect(Object.isFrozen(observation)).toBe(true);
    expect(Object.isFrozen(observation.payload)).toBe(true);
  });
});
