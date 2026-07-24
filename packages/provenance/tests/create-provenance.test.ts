import { describe, expect, it } from "vitest";
import { createProvenance } from "../src/index.js";

describe("createProvenance", () => {
it("creates an immutable provenance record", () => {
  const p = createProvenance({
    inputRefs: ["obs:a"],
    procedureId: "proc:identity",
    outputRef: "artifact:a",
    parentRefs: [],
  });

  expect(Object.isFrozen(p)).toBe(true);
});

  it("creates identical ids for equivalent provenance", () => {

    const params = {
      inputRefs: ["obs:a"],
      procedureId: "proc:identity",
      outputRef: "artifact:a",
      parentRefs: [],
    };

    const a = createProvenance({ ...params });
    const b = createProvenance({ ...params });

    expect(a.id).toBe(b.id);
    for (const key of Object.keys(params)) {
      expect((a as any)[key]).toEqual((b as any)[key]);
    }
  });

  it("includes procedure identity", () => {
    throw new Error("Not implemented");
  });

  it("includes output reference", () => {
    throw new Error("Not implemented");
  });

  it("deep freezes nested values", () => {
    throw new Error("Not implemented");
  });
});
