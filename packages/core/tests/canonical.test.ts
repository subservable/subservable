import { describe, expect, it } from "vitest";

import { CanonicalJsonSerializer } from "../src/index.js";

describe("CanonicalJsonSerializer", () => {

  it("serializes equivalent objects identically", () => {

    const serializer =
      new CanonicalJsonSerializer();

    const a = serializer.serialize({
      a: 1,
      b: 2
    });

    const b = serializer.serialize({
      b: 2,
      a: 1
    });

    expect(a).toEqual(b);

  });

});
