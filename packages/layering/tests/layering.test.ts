import { describe, it, expect } from "vitest";
import { createLayer } from "../src/create-layer.js";

describe("createLayer", () => {
  it("creates an immutable layer", () => {
    const layer = createLayer({
      createdAt: "now",
      parentRefs: [],
      observationRef: "obs-0001",
    });

    expect(layer.observationRef).toBe("obs-0001");
    expect(layer.parentRefs).toEqual([]);
    expect(Object.isFrozen(layer)).toBe(true);
  });

  it("does not mutate a parent layer", () => {
    const parent = createLayer({
      createdAt: "now",
      parentRefs: [],
      observationRef: "obs-parent",
    });

    const snapshot = structuredClone(parent);

    const child = createLayer({
      id: "child",
      createdAt: "later",
      parentRefs: [parent.id],
      observationRef: "obs-child",
    });

    expect(parent).toEqual(snapshot);
    expect(Object.isFrozen(parent)).toBe(true);

    expect(child.parentRefs).toEqual([parent.id]);
  });

  it("creates identical ids for equivalent layers", () => {
    const a = createLayer({
      createdAt: "now",
      parentRefs: [],
      observationRef: "obs-1",
    });

    const b = createLayer({
      createdAt: "then",
      parentRefs: [],
      observationRef: "obs-1",
    });

    expect(a.id).toBe(b.id);
  });

  it("creates different ids for different layer structure", () => {
    const a = createLayer({
      createdAt: "now",
      parentRefs: [],
      observationRef: "obs-1",
    });

    const b = createLayer({
      createdAt: "now",
      parentRefs: ["parent-1"],
      observationRef: "obs-1",
    });

    expect(a.id).not.toBe(b.id);
  });
});
