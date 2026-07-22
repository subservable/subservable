import { describe, it, expect } from "vitest";

import { SHA256HashProvider } from "../src/index.js";

describe("hash provider", () => {
  it("produces identical hashes", () => {
    const hash = new SHA256HashProvider();

    const data = new TextEncoder().encode("hello");

    expect(hash.hash(data)).toBe(hash.hash(data));
  });
});
