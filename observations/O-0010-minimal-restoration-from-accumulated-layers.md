# O-0010 — minimal-restoration-from-accumulated-layers

## Statement

As layers accumulate through repeated preservation and provenance
recording, it may become possible for a small preserved fragment to
reconstruct a much larger portion of accumulated history — if later
layers reference rather than duplicate earlier ones.

This is not assumed to be automatic. It depends on whether accumulated
structure has enough internal reference (e.g. provenance chains) for
reconstruction to work from a small starting point.

## Context

Noted while beginning work on persistence. The instinct to stress-test
persistence aggressively and early ("break everything, small bits to
bit") is treated here as sound practice, not recklessness — persistence
is where durable errors would actually cost something, so testing it
hard now is the right moment to do so.

## Working Question

Given \(n\) accumulated layers with recorded provenance, is there a
minimal subset of preserved material — for example, the terminal layer's
identifier plus its provenance chain — sufficient to deterministically
reconstruct all \(n\) layers?

This resembles an existing, well-understood pattern (content-addressed
structures, Merkle-style verification) where a small reference can verify
or reconstruct something much larger, provided sufficient internal
redundancy or reference structure exists.

## Constraints

No claim is made that this property currently holds in the system.

No new primitive proposed.

This does not assert that all accumulated layers will compress this way
— only that the question is worth testing directly.

## Required Test

1. Build a chain of 3–4 layers with recorded provenance (as in O-0007's
   working model).
2. Delete all preserved material except the final layer's identifier and
   its provenance chain.
3. Attempt full reconstruction of the chain from that minimal remainder.
4. Record whether reconstruction succeeds, partially succeeds, or fails.

## Questions

- Does `parentRefs`, as currently a plain reference rather than embedded
  content, already provide this property for free?
- Is there a point past which minimal restoration becomes impossible —
  i.e., a floor below which some information is genuinely, unrecoverably
  lost?
- Does this property, if it holds, need to be asserted anywhere formally,
  or does it fall out naturally from Provenance as already defined?

## Status

\[
\text{-exploratory}
\]
