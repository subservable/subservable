# O-0011 — reconstruction-under-extreme-compression (future experiment candidate)

## Statement

An informal image ("spaghettification, but replayable") pointed toward a
real question — whether extreme compression of accumulated layers can
remain fully reconstructable — but the metaphor itself points the wrong
direction and should not be carried forward as-is.

## Correction

Spaghettification describes destructive, irreversible stretching under
differential force — it is specifically _not_ survivable or reversible
for whatever undergoes it. If the goal is replayability, the relevant
process is closer to lossless compression or content-addressed
verification (e.g. a Merkle structure), where a small artifact
provably reconstructs a larger one without anything being destroyed in
the process.

The corrected framing: not "how much can be stretched to breaking before
replay fails," but "how small can a preserved remainder become while
still guaranteeing full, lossless reconstruction."

## Why This Is Not Yet a Claim or Experiment

This depends on O-0010's minimal-restoration question being tested first.
Extreme-compression behavior can't be meaningfully explored until basic
minimal restoration (a handful of layers) is understood.

## Intent

This is preserved as a candidate future experiment, once the system is
mature enough to have real accumulated layers at scale — intended to help
teach and demonstrate the reconstruction guarantee concretely, not merely
assert it.

## Constraints

No experiment defined yet.

No claim made about compression limits.

Explicitly deferred until O-0010 has been tested against real data.

## Status

\[
\text{-exploratory}
\]
