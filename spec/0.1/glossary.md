# Subservable Glossary v0.1

## Artifact

A reproducible mathematical output produced by a procedure.

Defined as:

\[
A=(R,U)
\]

where:

- \(R\) is representation.
- \(U\) is uncertainty.

---

## Observation

An immutable record representing an input state, event, or measurement.

Represented by:

\[
M
\]

Observations are preserved and never modified.

---

## Procedure

A deterministic transformation from observations or artifacts into new artifacts.

Defined as:

\[
f:(M,\theta)\rightarrow(A,P)
\]

---

## Procedure Family

The collection of valid deterministic procedures.

\[
\mathcal{F}
\]

---

## Parameter

An explicit input controlling procedure behavior.

Represented by:

\[
\theta
\]

Hidden parameters are prohibited.

---

## Representation

The derived structure contained in an artifact.

Represented by:

\[
R
\]

Examples:

- signal,
- feature vector,
- model,
- spectrum,
- embedding.

---

## Uncertainty

A characterization of limitations or confidence associated with a representation.

Represented by:

\[
U
\]

---

## Provenance

A record describing how an artifact was produced.

Represented by:

\[
P
\]

Provenance is separate from the artifact.

---

## Spectrum

A representation generated through a Prism.

Represented by:

\[
\Omega
\]

A Spectrum is not truth.

It is a coordinate system for observing structure.

---

## Prism

A coherent collection of procedures and assumptions used to examine observations.

\[
Prism\subseteq\mathcal{F}
\]

---

## Discovery

The attribution of meaning to reproducible structure.

Discovery is not a system guarantee.

Subservable produces representations; interpretation occurs outside the deterministic core.

---

## Determinism

The property that identical inputs and procedure identities produce identical outputs.

---

## Immutability

The property that existing observations and artifacts cannot be modified.

---

## Provenance Graph

The directed graph formed by artifact derivation relationships.

Nodes represent provenance records.

Edges represent dependency relationships.

---

## Canonical Serialization

A deterministic representation used before hashing.

Canonical serialization ensures identical content produces identical identifiers.