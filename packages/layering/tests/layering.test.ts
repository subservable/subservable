import { describe, it, expect } from "vitest";
import { createLayer } from "../src/create-layer";

describe("createLayer", () => {
  it("creates an immutable layer", () => {
    const layer = createLayer({
      parentRefs: [],
      observationRef: "obs-0001",
    });

    expect(layer.observationRef).toBe("obs-0001");
    expect(layer.parentRefs).toEqual([]);
    expect(Object.isFrozen(layer)).toBe(true);
  });

  it("does not mutate a parent layer", () => {
    const parent = createLayer({
      parentRefs: [],
      observationRef: "obs-parent",
    });

    const snapshot = structuredClone(parent);

    const child = createLayer({
      parentRefs: [parent.id],
      observationRef: "obs-child",
    });

    expect(parent).toEqual(snapshot);
    expect(Object.isFrozen(parent)).toBe(true);

    expect(child.parentRefs).toEqual([parent.id]);
  });

  it("creates identical ids for equivalent layers", () => {
    const a = createLayer({
      parentRefs: [],
      observationRef: "obs-1",
    });

    const b = createLayer({
      parentRefs: [],
      observationRef: "obs-1",
    });

    expect(a.id).toBe(b.id);
  });   
});
