import { describe, expect, it } from "vitest";

import { createArtifact } from "../src/index.js";

describe("createArtifact", () => {
  it("creates an immutable artifact", () => {
    const artifact = createArtifact({
      representation: {
        answer: 42,
      },
      uncertainty: {
        variance: 0,
      },
    });

    expect(artifact.representation.answer).toBe(42);

    expect(artifact.uncertainty.variance).toBe(0);

    expect(Object.isFrozen(artifact)).toBe(true);
  });

  it("creates identical ids for equivalent artifacts", () => {
    const a = createArtifact({
      representation: { x: 1 },
      uncertainty: { v: 0 },
    });

    const b = createArtifact({
      uncertainty: { v: 0 },
      representation: { x: 1 },
    });

    expect(a.id).toBe(b.id);
  });
});
