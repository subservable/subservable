# O-0012 — repetition-as-ambiguous-signal-borrowed-from-dry

## Statement

This observation borrows a well-established software engineering
principle — "Don't Repeat Yourself" (DRY) — and notes plainly that its
usual meaning does not transfer unmodified into this system.

In ordinary software, noticing repetition is a signal to eliminate it:
repeated code is treated as pure cost. This project's stated purpose is
the near-opposite by default — not losing what recurs. The same trigger
(repetition noticed) therefore cannot carry the same default response
here without being checked first.

This is not a new concept invented by this project. It is an existing,
well-known idea, applied honestly to a context where its usual
conclusion does not automatically hold, and flagged as such rather than
renamed or dressed in new vocabulary it has not earned.

## Context

Arose from a coding background: repetition (in code, in phrasing, in
observation content) reflexively triggers a "simplify this" response, per
ordinary DRY practice. Noticing that reflex firing while working on a
system whose stated purpose is not losing what recurs prompted a check —
is this repetition waste, or is it the actual signal the system exists to
preserve?

Two concrete instances from this session illustrate the ambiguity:

- Repeated, near-identical folder scaffolding for claims — ordinary DRY
  applies cleanly; this is waste, safe to automate away.
- Repeated appearance of a conceptual pattern across independent
  observations (e.g. the residual shape in O-0006, recurring across
  claim comparison and signal comparison) — ordinary DRY would say
  "collapse this," but this project's own discipline says the repetition
  itself is evidence worth preserving and testing before collapsing.

## What This Is Not

This is not a claim that friction, DRY, or repetition are new system
primitives. No new vocabulary is introduced here beyond naming the
borrowed principle honestly and noting where its usual application
breaks down in this context.

## Relationship to O-0006

O-0006 already names the risk of collapsing repeated-looking structures
(premature compression) and requires a real test before treating similar
shapes as one primitive. This observation adds the specific, named source
of the reflex that creates that risk: an imported engineering habit (DRY)
that assumes repetition is always waste, which is not a safe assumption
to import unexamined into a system built to avoid loss.

## A Related Practice: Multiple Vantage Points

Because this reflex differs by discipline — a coder's instinct toward
DRY is not the same as a designer's instinct, or the instinct of someone
simply present and observing without a technical background — checking
whether a given repetition is waste or signal may benefit from being
evaluated from more than one vantage point (e.g. "coder observation,"
"designer observation") rather than resolved from a single perspective.

This does not propose a formal multi-role review process. It only notes
that the ambiguity may not be resolvable from one discipline's reflexes
alone.

## Constraints

No new primitive proposed.

No claim that DRY is wrong in general — only that its default conclusion
does not transfer safely, unexamined, into this system.

No formal multi-perspective review process proposed; only noted as a
plausible mitigation.

## Questions

- Is there a reliable way to distinguish "repetition as waste" from
  "repetition as signal" before collapsing it, or only after testing (as
  O-0006 already requires)?
- Do other imported engineering principles (beyond DRY) carry similar
  unexamined assumptions that don't transfer cleanly into this system?
- Does evaluating repetition from multiple disciplinary vantage points
  actually change the outcome, or only the confidence in the outcome?

## Status

\[
\text{-exploratory}
\]
