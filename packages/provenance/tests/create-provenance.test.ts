import { describe, expect, it } from "vitest";
import { createProvenance } from "../src/index.js";


const makeParam = (params = {}) => {
  const now = Date.now();

  return {
    inputRefs: [`obs:${now}`],
    procedureId: "proc:identity",
    outputRef: `artifact:${now}`,
    parentRefs: [],
    ...params,
  };
};

describe("createProvenance", () => {
  it("creates an immutable provenance record", () => {
    const p = createProvenance(makeParam());

    expect(Object.isFrozen(p)).toBe(true);
  });

  it("creates identical ids for equivalent provenance", () => {
    const params = makeParam();

    const a = createProvenance({ ...params });
    const b = createProvenance({ ...params });

    expect(a.id).toBe(b.id);
    for (const key of Object.keys(params)) {
      expect((a as any)[key]).toEqual((b as any)[key]);
    }
  });

  it("includes procedure identity", () => {
    const proc_id = "proc:identity";

    const params = {
      inputRefs: ["obs:a"],
      procedureId: proc_id,
      outputRef: "artifact:a",
      parentRefs: [],
    };

    const p = createProvenance(makeParam(params));

    expect(p.procedureId).toBe(proc_id);
  });

  it("includes output reference", () => {
    throw new Error("Not implemented");
  });

  it("deep freezes nested values", () => {
    throw new Error("Not implemented");
  });
});
