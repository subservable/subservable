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
    throw new Error("Not implemented");
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
