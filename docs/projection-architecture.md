# Projection Architecture

## Purpose

Subservable defines meaning exactly once.

Every other representation is a projection of the same immutable semantics.

Mathematics is the canonical language of the model.

Every projection preserves those semantics while presenting them in a form appropriate for its medium.

---

# Canonical Projection Hierarchy

```text
                     Immutable Model
                (Canonical Semantic Source)
                              │
                              ▼
                  Mathematical Notation
                     (Canonical Grammar)
                              │
      ┌──────────────┬──────────────┬──────────────┬──────────────┐
      ▼              ▼              ▼              ▼
 Executable      Visual         Structural        Locale
  Notation       Grammar       Serialization    Projections
(TypeScript)   (Diagrams)     (JSON / CBOR)   (English, Español,
                                              日本語, Français, …)
```

---

# Canonical Grammar

The mathematical notation defined by the specification is the canonical semantic representation of Subservable.

Every other representation is derived from that notation.

The canonical grammar defines meaning.

Projections communicate meaning.

---

# Projection Types

## Executable Projection

Executable notation renders the canonical grammar as executable software.

Examples include:

- TypeScript
- Runtime execution
- Testing
- Reference implementations

The implementation should resemble the canonical notation as closely as practical.

Implementation is an executable reading of the specification.

---

## Visual Projection

Visual grammar renders canonical relationships spatially.

Examples include:

- Diagrams
- Graphs
- Timelines
- Trees
- Debugging views
- Interactive visualizations

Visual projections communicate structure without altering semantics.

---

## Structural Projection

Structural serialization preserves canonical structure for storage and transport.

Examples include:

- JSON
- CBOR
- MessagePack

Serialization preserves structure.

Serialization does not define semantics.

---

## Locale Projection

Locale projections communicate canonical semantics through natural language.

Examples include:

- English
- Español
- 日本語
- Français

No locale is canonical.

Every locale communicates the same semantics through a different linguistic system.

---

# Semantic Isomorphism

Every projection is expected to remain semantically isomorphic to the canonical grammar.

Equivalent meaning should remain equivalent regardless of whether it is expressed as:

- mathematical notation,
- executable notation,
- visual grammar,
- serialized structure,
- or localized natural language.

A projection may introduce affordances appropriate to its medium provided those affordances do not alter canonical semantics.

Examples include:

- syntax highlighting,
- animation,
- color,
- folding,
- search,
- interaction,
- zoom,
- accessibility features.

These improve communication.

They do not change meaning.

---

# Design Principle

Subservable intentionally separates **meaning** from **representation**.

The immutable model defines meaning.

The canonical grammar formalizes meaning.

Every projection faithfully communicates that meaning.

Changing the projection changes only how information is experienced.

It never changes what the information means.