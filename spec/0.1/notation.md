# Subservable Notation v0.1

This document defines shared notation used across Subservable specifications.

| Symbol | Meaning |
|---|---|
| \(M\) | Immutable observation set |
| \(\mathcal{F}\) | Family of deterministic procedures |
| \(f\) | A deterministic procedure |
| \(\theta\) | Explicit procedure parameters |
| \(A\) | Mathematical artifact |
| \(R\) | Derived representation |
| \(U\) | Uncertainty associated with representation |
| \(P\) | Provenance record |
| \(C\) | Immutable collection |
| \(\Omega\) | Spectrum representation |
| \(f_U\) | Uncertainty propagation procedure |

---

## Core Relationships

Procedure:

\[
f:(M,\theta)\rightarrow(A,P)
\]

Artifact:

\[
A=(R,U)
\]

Provenance:

\[
P=\operatorname{prov}(A)
\]

Artifact hashing:

\[
output\_ref=hash(A)
\]

Provenance MUST NOT be included in the artifact hash.
