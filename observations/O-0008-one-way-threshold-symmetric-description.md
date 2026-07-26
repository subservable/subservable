# O-0008 — one-way-threshold-symmetric-description

## Statement

A boundary may be describable identically from both sides while permitting
traversal in only one direction.

Crossing such a boundary is not reversible by retracing the same operation,
even though the boundary's properties can be characterized from either
side of it.

## Context

This observation originated informally, from an unrelated line of
thinking about physical thresholds (a point of no return, mirrored in its
description from both sides). It is included here as a candidate shape
worth preserving, not because the originating context is itself part of
Subservable.

The pattern noticed was: a threshold need not be a wall (impassable) or a
plain marker (crossing changes nothing). It may instead be a transition
where the _description_ of the boundary is symmetric, but the _act_ of
crossing is not reversible by any inverse operation.

## Working Model

\[
\text{threshold}(x) : \text{Before} \rightarrow \text{After}
\]

The boundary has a description that holds from both sides:

\[
\text{describe}(\text{Before}) \leftrightarrow \text{describe}(\text{After})
\]

But no operation exists such that:

\[
\text{threshold}^{-1}(\text{After}) = \text{Before}
\]

Reconstruction of _how_ the transition occurred may still be possible.
Reversal of the transition itself is not.

## Possible Relationship to Existing Concepts

This may already resemble something the system has:

- Provenance already permits reconstructing _how_ an Artifact was derived
  from an Observation, without permitting the reverse — an Artifact cannot
  be un-derived back into erasing its Observation's occurrence.
- The asymmetry here (describable both ways, traversable one way) may be
  the same shape as Provenance's asymmetry (reconstructable derivation,
  without implying reversibility of the underlying event).

This has not been tested. It may also be entirely coincidental structural
resemblance — the same caution given to prior premature-compression cases
(O-0006) applies here.

## Constraints

No architecture changes proposed.

No new primitive proposed.

No claim is made that this maps onto Provenance, Procedure, or any
existing Subservable concept beyond surface resemblance.

This observation is more speculative than most filed to date and should
be weighted accordingly.

## Questions

- Is there a concrete case in the existing system where this shape would
  actually apply, or does it remain purely descriptive?
- Does Provenance's asymmetry (reconstructable derivation without
  reversibility) genuinely share structure with this, or only
  superficially?
- What would distinguish a true instance of this pattern from an ordinary
  one-way Procedure?

## Status

\[
\text{-exploratory}
\]
