# Observation O-0004

# Procedure Execution Topology

## Summary

While exploring multi-selection and lens composition, a distinction emerged
between a Procedure and the strategy used to execute that Procedure over a
Collection.

This distinction may already be expressible using existing system concepts.

No new architecture is proposed.

---

## Observation

A deterministic Procedure defines _what_ transformation is performed.

Execution topology defines _how_ that Procedure is applied across a Collection.

Two possible execution strategies were identified:

- Sequential (item-by-item)
- Collection-wide (whole selection)

These strategies may produce identical Artifacts, or they may represent
fundamentally different Procedures.

This has not yet been determined.

---

## Current Understanding

Existing concepts may already describe most of this behavior.

Collection
→ defines what is selected.

Procedure
→ defines the deterministic transformation.

Composition
→ defines how Procedures combine.

The remaining open question is whether execution topology belongs to the
Procedure itself or is merely an implementation detail.

---

## Primary Design Question

If applying a Procedure to an entire Collection can produce an Artifact that
cannot be reproduced by applying the same Procedure independently to each item,
then collection-wide execution represents a different Procedure rather than a
different execution strategy.

If both approaches always produce equivalent Artifacts, execution topology
should remain outside the deterministic model.

---

## Evidence

This observation emerged while discussing:

- Lens composition
- Multiple selection
- Batch versus sequential execution
- Replay through Provenance

---

## Constraints

No new notation is proposed.

No new Collection model is proposed.

No changes to Procedure or Provenance are proposed.

This observation records a design question only.

---

## Status

Exploratory

Future work should determine whether execution topology affects deterministic
reconstruction or is purely an implementation concern.
