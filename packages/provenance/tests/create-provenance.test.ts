import { describe, expect, it } from "vitest";
import { createProvenance } from "../src/index.js";
import { makeParam } from "./provence-utils.js";

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

    const id = "artifact:a";

    const params = {
      outputRef: id,
    };

    const p = createProvenance(makeParam(params));

    expect(p.outputRef).toBe(id);
  });

it("deep freezes nested values", () => {
  const params = makeParam({
    inputRefs: ["obs:a", "obs:b"],
    parentRefs: ["prov:parent1"],
  });

  const p = createProvenance(params);

  expect(Object.isFrozen(p.inputRefs)).toBe(true);
  expect(Object.isFrozen(p.parentRefs)).toBe(true);

  // Mutation should fail silently (non-strict) or throw (strict mode)
  expect(() => {
    (p.inputRefs as any).push("obs:c");
  }).toThrow(TypeError);

  expect(() => {
    (p.parentRefs as any)[0] = "prov:tampered";
  }).toThrow(TypeError);
});
});
