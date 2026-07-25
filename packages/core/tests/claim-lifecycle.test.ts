import { describe, expect, it } from "vitest";

import { createArtifact } from "../../artifacts/src/index.js";
import { createProvenance } from "../../provenance/src/index.js";
import { loadClaim } from "../../core/src/index.js";

describe("claim lifecycle", () => {

    it("loads P-0000 bootstrap claim", async () => {
      const claim = await loadClaim("claims/0000-claim-lifecycle-bootstrap");

      expect(claim.id).toBe("P-0000");

      expect(claim.files["claim.md"]).toContain("#");
      expect(claim.files["supporting-assets.md"]).toContain("#");
      expect(claim.files["discovery-process.md"]).toContain("#");
      expect(claim.files["witnesses.md"]).toContain("#");
      expect(claim.files["status.md"]).toContain("#");
    });
    
  it("preserves a claim through artifact and provenance lifecycle", () => {
    const claim = {
      id: "P-0000",
      title: "Bootstrap Claim Lifecycle Validation",
      statement:
        "A claim can be represented, preserved, reconstructed, and evaluated.",
      assets: [
        "claim.md",
        "supporting-assets.md",
        "discovery-process.md",
        "witnesses.md",
        "status.md",
      ],
    };

    const artifact = createArtifact({
      representation: claim,
      uncertainty: {
        status: "proposed",
      },
    });

    const provenance = createProvenance({
      inputRefs: claim.assets,
      procedureId: "claim:create",
      outputRef: artifact.id,
      parentRefs: [],
    });

    expect(provenance.outputRef).toBe(artifact.id);

    expect(artifact.representation).toEqual(claim);

    expect(Object.isFrozen(artifact)).toBe(true);
    expect(Object.isFrozen(provenance)).toBe(true);
  });
});
