# Artifact Model v0.1

## Purpose

An Artifact is the fundamental output unit of a Subservable procedure.

Artifacts represent reproducible derived structures while preserving separation between:

- the derived representation,
- uncertainty about that representation,
- provenance describing its creation.

---

# Definition

A mathematical artifact is:

\[
A=(R,U)
\]

where:

- \(R\) is the derived representation.
- \(U\) is the uncertainty associated with that representation.

An artifact MUST NOT contain its own provenance.

Provenance is a separate structure:

\[
P=\operatorname{prov}(A)
\]

---

# Representation

The representation \(R\) defines what has been derived.

Examples include:

- estimated signals,
- model parameters,
- transformed representations,
- feature vectors,
- probability distributions,
- embeddings,
- spectra.

The meaning of \(R\) is defined by the procedure that produced it.

---

# Uncertainty

The uncertainty component \(U\) describes limitations or confidence associated with \(R\).

The uncertainty model depends on the procedure.

Examples include:

- variance,
- confidence intervals,
- credible intervals,
- posterior distributions,
- prediction intervals,
- interval bounds.

A procedure MUST define how uncertainty is produced and propagated.

---

# Artifact Identity

Artifacts SHOULD be content-addressable.

A recommended identity model:

\[
artifact\_id = hash(A)
\]

where:

\[
A=(R,U)
\]

is serialized canonically before hashing.

The serialization method MUST be deterministic.

---

# Artifact Immutability

Artifacts MUST be immutable after creation.

A changed representation or uncertainty value creates a new artifact.

Artifacts are identified by content, not location.

---

# Artifact Relationships

Artifacts MAY reference parent artifacts through provenance.

The artifact itself remains independent of its derivation history.

This allows:

- reproducibility,
- branching,
- alternate interpretations,
- independent recomputation.