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


## Mathematical Isomorphism

Defines what it means for two representations to preserve semantics.
This is independent of implementation.

Think of it as a theorem:

```
Representation₁ ≅ Representation₂
```

iff there exists a lossless mapping:
```
φ : R₁ → R₂
```

and:

```
φ⁻¹(φ(R₁)) = R₁
```

## Projection Equivalence

This belongs in testing.
It proves the implementation satisfies the theorem.

Example:
```
Notation Grammar

↓

Canonical Model

↑

English Grammar
```

Both normalize to exactly the same immutable value.
This is observable behavior.

The architecture becomes

```
Mathematical Isomorphism
        │
        ▼
Projection Equivalence Tests
        │
        ▼
Passing Implementation
```

The tests are evidence.
The theorem is the definition.

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

## Immutable Model

The single, canonical semantic source from which every representation of Subservable is derived.

The Immutable Model does not itself take a runnable or written form. It is formalized by the Canonical Grammar and communicated through every Projection.

No projection owns the Immutable Model. Every projection preserves its semantics.

---

## Canonical Grammar

The mathematical notation defined by the specification.

The canonical grammar formalizes the Immutable Model and is the single semantic source from which every other representation — executable, visual, structural, or locale — is derived.

The canonical grammar defines meaning. Projections communicate meaning.

---

## Projection

Any representation derived from the Canonical Grammar.

Projections include Executable Projection, Visual Projection, Structural Projection, and Locale Projection.

A projection may introduce affordances appropriate to its medium — syntax highlighting, animation, color, folding, search, interaction, zoom, accessibility features — provided those affordances do not alter canonical semantics.

Changing the projection must not change the meaning. See Semantic Isomorphism.

---

## Executable Projection

The category of projections that render the Canonical Grammar as executable software, including TypeScript, runtime execution, testing, and reference implementations.

Executable Notation is the specific grammar used within Subservable's public API to realize this projection.

---

## Visual Projection

The category of projections that render canonical relationships spatially, including diagrams, graphs, timelines, trees, debugging views, and interactive visualizations.

Visual Grammar is the notation system used to realize this projection. Visual Reasoning is the practice of applying that grammar for inspection, debugging, and explanation.

Visual projections communicate structure without altering semantics.

---

## Structural Projection

The category of projections that preserve canonical structure for storage and transport, including JSON, CBOR, and MessagePack.

Structural projection preserves structure. It does not define semantics.

---

## Locale Projection

The category of projections that communicate canonical semantics through natural language, including English, Español, 日本語, and Français.

No locale is canonical. Every locale communicates the same semantics through a different linguistic system.

---

## Visual Grammar

The notation system — nodes, edges, and visual confidence encoding — that renders canonical relationships spatially.

Visual grammar preserves the same meaning as the mathematical model while making the model readable as diagrams, symbols, and confidence cues.

Visual Grammar is the specific notation instance of the Visual Projection category, in the same relationship Executable Notation holds to Executable Projection.

---

## Executable Notation

A public grammar that maps the formal specification directly onto code-like expressions.

Executable notation preserves the same meaning as the mathematical model while making the model readable as runnable-style syntax.

Both notation and English forms MAY be first-class, provided they remain semantically equivalent.

Executable Notation is the specific grammar instance of the Executable Projection category.

---

## Visual Reasoning

The use of visual representations as direct projections of the model for inspection, debugging, and explanation.

Visual reasoning is first-class when diagrams, symbols, and confidence cues preserve the same semantic relationships as the specification.

Visual reasoning MUST NOT introduce a separate meaning from the model it depicts.

Visual Reasoning is the practice of applying Visual Grammar, the notation instance of the Visual Projection category.