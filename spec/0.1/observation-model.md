# Subservable Observation Model v0.1

## Purpose

An observation is the immutable input foundation for Subservable.

Observations preserve the original measured, received, or recorded state.

---

## Definition

An observation is represented by:

\[
M
\]

Observations are immutable and content-addressable.

An observation MUST NOT be modified after creation.

---

## Observation Identity

Observation identity MUST be deterministic.

Identity MUST NOT depend on:

- persistence location,
- insertion order,
- runtime environment.

---

## Metadata

Observations MAY include metadata such as:

- acquisition timestamp,
- source identifier,
- contextual notes,
- external references.

Metadata is part of the immutable observation.

---

## Observation Collections

Observation collections are immutable values.

Collections MAY group observations, artifacts, provenance records, and other collections.

Existing observations remain unchanged when collections evolve.
