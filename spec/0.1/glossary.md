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

## Collection

An immutable value that groups references to observations, artifacts, provenance records, and other collections.

Represented by:

\[
C
\]

Collections are content-addressable, never mutable, and may be nested.

---

## Semantic Isomorphism

Every representation of a model—formal specification, executable API, visualization, logs, Markdown, or future integrations—should preserve the same semantic relationships.

Changing the projection must not change the meaning.

Projection is terminology for a rendering of the model, not a separate principle.

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

---

## Executable Notation

A public grammar that maps the formal specification directly onto code-like expressions.

Executable notation preserves the same meaning as the mathematical model while making the model readable as runnable-style syntax.

Both notation and English forms MAY be first-class, provided they remain semantically equivalent.

---

## Visual Reasoning

The use of visual representations as direct projections of the model for inspection, debugging, and explanation.

Visual reasoning is first-class when diagrams, symbols, and confidence cues preserve the same semantic relationships as the specification.

Visual reasoning MUST NOT introduce a separate meaning from the model it depicts.
