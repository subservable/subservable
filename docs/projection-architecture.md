# Projection Architecture

## Canonical Semantic Hierarchy

```text
                           Immutable Model
                      (Semantic Source of Truth)
                                   │
                                   ▼
                     Mathematical Notation
                        (Canonical Grammar)
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
        ▼                          ▼                          ▼
 Executable Notation        Visual Grammar           Structural Serialization
 (TypeScript / Runtime)   (Diagrams / Debugger)       (JSON / Storage)
                                   │
                                   ▼
                             Locale Layer
        ┌─────────────┬─────────────┬─────────────┬─────────────┐
        │             │             │             │             │
        ▼             ▼             ▼             ▼             ▼
     English       Español        日本語       Français        …
```

---

# Canonical Grammar

The mathematical notation defined by the specification is the canonical semantic representation of Subservable.

All other representations are projections of that notation.

No projection introduces new meaning.

No projection removes meaning.

Changing the projection **MUST NOT** change the semantics.

---

# Projection Types

## Executable Projection

Executable notation expresses the canonical grammar as executable software.

Example:

- TypeScript
- Runtime execution
- Testing

---

## Visual Projection

Visual grammar expresses canonical relationships spatially.

Examples include:

- Diagrams
- Timelines
- Graphs
- Debugging views
- Interactive visualizations

---

## Structural Projection

Structural serialization preserves immutable data for storage and transport.

Examples include:

- JSON
- CBOR
- MessagePack

Serialization preserves structure.

It does not define semantics.

---

## Locale Projection

Natural languages describe the canonical grammar for human readers.

Examples include:

- English
- Español
- 日本語
- Français

No locale is canonical.

Locales communicate the same semantics through different linguistic systems.

---

# Semantic Isomorphism

Every projection is expected to be semantically isomorphic to the canonical grammar.

Equivalent meaning should remain equivalent regardless of whether it is expressed as:

- mathematics,
- executable notation,
- diagrams,
- serialized data,
- or natural language.

The mathematical notation remains the single canonical source from which all projections are derived.
