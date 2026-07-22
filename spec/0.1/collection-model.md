# Subservable Collection Model v0.1

## Purpose

A collection is an immutable value used to group Subservable resources.

Collections do not behave like folders or mutable containers.

---

## Definition

A collection is represented by:

\[
C
\]

Collections MAY contain references to:

- observations,
- artifacts,
- provenance records,
- other collections.

---

## Properties

Collections MUST be:

- immutable,
- content-addressable,
- nestable,
- deterministic in serialization.

---

## Identity

Collection identity MUST be derived from its canonical serialized value.

Changing members creates a new collection identity.

---

## Relationship to the Model

Collections are a first-class model concept.

They organize immutable resources without changing the resources themselves.
