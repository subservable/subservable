import { describe, it, expect } from "vitest";

import { JsonSerializer } from "../src/index.js";

describe("serialization", () => {
  it("serializes deterministically", () => {
    const serializer = new JsonSerializer();

    const a = serializer.serialize({
      value: 1,
    });

    const b = serializer.serialize({
      value: 1,
    });

    expect(a).toEqual(b);
  });
});
