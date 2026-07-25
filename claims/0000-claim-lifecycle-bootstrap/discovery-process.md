# Discovery Process

## Purpose

This document records why the bootstrap claim exists.

It preserves reasoning behind the first insertion.

---

## Observation

Before accepting meaningful claims, the system requires evidence that it can preserve and replay claims.

---

## Initial Interpretation

A minimal claim should be inserted before domain-specific claims.

This allows infrastructure validation to occur independently from semantic exploration.

---

## Challenge

Potential risk:

A first meaningful claim could accidentally test both:

- the claim lifecycle;
- the claim itself.

Separating these concerns reduces ambiguity.

---

## Evaluation

The bootstrap claim was created as a minimal lifecycle witness.

Its purpose is operational validation.

---

## Current Understanding

The first claim accepted by the system should demonstrate that the system can preserve claims.

Future claims may then depend on this proven lifecycle.

---

## Replay

Expected replay:

Create claim

↓

Record provenance

↓

Generate artifact

↓

Persist artifact

↓

Reload artifact

↓

Verify identity

---

## Preserved Unknowns

Open questions:

- How claims relate to one another.
- How projections are represented.
- How semantic relationships emerge.

These are intentionally deferred.
