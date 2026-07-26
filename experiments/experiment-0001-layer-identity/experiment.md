# Experiment 0001

## Title

Layer Identity Composition

---

## Purpose

Determine whether equivalent immutable layer structures produce stable equivalent identities.

This experiment evaluates the identity behavior of layers within Subservable.

The experiment does not assume that layer identity should be structural or assigned.

Its purpose is to observe which properties participate in identity generation and determine whether the current behavior satisfies the intended identity model.

---

## Current State

### Claim

Equivalent immutable layers should produce equivalent identities.

### Witness

`packages/layering/tests/layering.test.ts`

### Observation

Equivalent structures currently produce different identities.

### Unknown

Whether identity should be structural, event-based, or hybrid.

---

## Motivation

Subservable relies on deterministic identity to preserve, compare, and reconstruct immutable structures.

If two layers represent equivalent structures, they may be expected to produce equivalent identities.

However, a layer identity may also represent a unique creation event rather than only structural content.

This experiment evaluates the distinction.

---

## Primary Design Question

What properties define layer equivalence?

Possible identity inputs include:

- observation references
- parent references
- supplied identifiers
- timestamps
- metadata
- creation context

The experiment exists to determine which properties participate in identity generation.

---

## Competing Hypotheses

### H1 — Structural Identity

Equivalent layer structures produce equivalent identities.

\[
L_a \equiv L_b \Rightarrow id(L_a)=id(L_b)
\]

---

### H2 — Event Identity

Each layer creation represents a unique event.

Equivalent contents may produce different identities.

---

### H3 — Hybrid Identity

Some properties define identity while others represent metadata.

For example:

- structural references participate,
- timestamps do not,
- supplied identifiers may or may not.

---

## Dataset

Two independently created layer inputs.

Controlled properties:

- same observation reference
- same parent references

Varied properties:

- supplied identifiers
- timestamps

---

## Procedure

1. Create layer A.
2. Create layer B.
3. Provide equivalent structural content.
4. Vary candidate identity fields.
5. Compare generated identities.
6. Record which properties influence identity generation.

---

## Witness

See:

`witness.md`

The witness is the automated test and observed output produced during implementation.

---

## Result

Equivalent layer structures with different supplied identifiers produced different identities.

This indicates that supplied identity currently participates in layer identity generation.

No conclusion is drawn about whether this behavior is correct.

---

## Updated Understanding

The current Layer implementation treats identity as supplied input.

Identity is not currently derived from layer structure.

Current model:

\[
createLayer(id, structure) \rightarrow Layer
\]

Possible future models:

Structural identity:

\[
id = h(structure)
\]

Event identity:

\[
id = h(creation\ event)
\]

Hybrid identity:

\[
id = h(selected\ structural\ and\ contextual\ fields)
\]

The identity ownership model remains unresolved.

---

## Status

\[
\text{-exploratory}
\]

---

## Future Directions

Possible follow-up experiments:

- determine canonical layer identity inputs,
- test identity stability across serialization,
- test identity stability across persistence and replay,
- evaluate whether layer identity should be content-addressed.
