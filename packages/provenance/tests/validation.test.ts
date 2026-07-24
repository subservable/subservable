import { describe, it, expect } from "vitest";
import { createProvenance } from "../src/index.js";
import { makeParam } from "./provence-utils.js";

describe("provenance validation", () => {
it("requires input references", () => {
  expect(() => createProvenance(makeParam({ inputRefs: [] }))).toThrow();
});
  
it("requires procedure id", () => {
  expect(() => createProvenance(makeParam({ procedureId: "" }))).toThrow();
});

it("requires output reference", () => {
  expect(() => createProvenance(makeParam({ outputRef: "" }))).toThrow();
});

it("rejects undefined values", () => {
  expect(() =>
    createProvenance(makeParam({ inputRefs: undefined as any })),
  ).toThrow();
});

it("rejects cyclic values", () => {
  const cyclic: any = {};
  cyclic.self = cyclic;
  expect(() => createProvenance(makeParam({ parentRefs: [cyclic] }))).toThrow();
});
});
