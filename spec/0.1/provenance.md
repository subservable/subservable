# Provenance Model v0.1

## Purpose

Provenance records how an artifact was derived.

It provides reproducibility, auditability, and traceability.

Provenance is metadata about an artifact.

It is not part of the artifact itself.

A provenance record is sufficient when it enables deterministic reconstruction as defined by the specification.

Completeness is verified by [reconstruction](provenance-graph.md) rather than inspection.

---

# Definition

Every artifact SHOULD have an associated provenance record:

\[
P=\operatorname{prov}(A)
\]

---

# Provenance Structure

A minimal provenance record:

```text
Provenance = {
  input_refs: [...],
  procedure_id: "...",
  implementation_hash: "...",
  runtime_hash: "...",
  parameters: {...},
  parents: [...],
  timestamp: "...",
  output_ref: hash(A)
}
```

In code, these names map to idiomatic camelCase fields such as `inputRefs` and `procedureId`.

---


# Output Reference

The output reference MUST identify the artifact.

\[ output\_ref=hash(A) \]

The provenance record MUST NOT be included in the artifact hash.

This avoids circular references:

\[ hash(A,P) \]

is invalid because:

\[ P \]

contains:

\[ hash(A) \]

---

# Procedure Identity

A provenance record SHOULD identify the exact procedure used.

Recommended fields:

- human-readable procedure identifier,
- implementation hash,
- dependency/runtime fingerprint.

Semantic versions MAY be included for communication.

Exact reproduction SHOULD rely on immutable identifiers.

---

# Parameters

All procedure parameters MUST be recorded.

Hidden parameters MUST NOT influence output.

The provenance record MUST contain sufficient information to reconstruct execution.

---

# Parent Relationships

Composition creates provenance ancestry.

Example:

\[ A_2=f_2(A_1) \]

creates:

\[ P_2.parents=\{P_1\} \]

This forms a derivation graph.

---

# Canonical Serialization

Artifact and provenance hashing require deterministic serialization.

Implementations MUST define:

- encoding format,
- ordering rules,
- numeric representation rules,
- versioning strategy.

---
