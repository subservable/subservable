import { describe, it, expect } from "vitest";
import { createProvenance } from "../src/index.js";
import { makeParam } from "./provence-utils.js";

describe("provenance parents", () => {
  it("supports zero parents", () => {
    const p = createProvenance(makeParam({ parentRefs: [] }));
    expect(p.parentRefs).toEqual([]);
  });

  it("supports one parent", () => {
    const p = createProvenance(makeParam({ parentRefs: ["prov:a"] }));
    expect(p.parentRefs).toEqual(["prov:a"]);
  });

  it("supports multiple parents", () => {
    const p = createProvenance(makeParam({ parentRefs: ["prov:a", "prov:b"] }));
    expect(p.parentRefs).toEqual(["prov:a", "prov:b"]);
  });

  it("preserves parent ordering", () => {
    const p = createProvenance(makeParam({ parentRefs: ["prov:b", "prov:a"] }));
    expect(p.parentRefs[0]).toBe("prov:b");
    expect(p.parentRefs[1]).toBe("prov:a");
  });
});
