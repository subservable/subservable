## decision template

Decision ID: PD-###
Title:
Status: Proposed | Accepted | Modified | Rejected | Deferred
Affects:
Rationale:
Alternatives:
Decision:

## decision flow

Status is authoritative.
Proposal is advisory.
Decision records the final chosen outcome.

When a decision is accepted or modified:
Specification changes → update spec/0.1 in place
Architecture changes → update docs/architecture
Roadmap changes → update docs/roadmap
Implementation changes → update docs/architecture/implementation-plan.md
Nothing else changes.

PD-001 — Rename storage → persistence
Status: Accepted
Rationale
Storage implies a specific implementation.
Persistence is the capability.
Implementations become:

```text
Persistence

├── Memory

├── Filesystem

├── SQLite

├── Git

├── Blockchain
```

Decision
Rename storage to persistence.

---

PD-002 — Dual Public Grammar
Status: Accepted
Public API has two equivalent grammars.
English
```
Observation.of(payload)

Artifact.of({
    representation,
    uncertainty,
})
```

Notation

```
Artifact.of
    .R(representation)
    .U(uncertainty);
```

Neither owns semantics.
Both produce identical immutable values.

Decision
Keep both grammars as first-class, equivalent APIs.

---

PD-003 — Executable Notation
Status: Accepted
The mathematical specification should map directly onto executable code.
The implementation is the notation hydrated with meaningful names.
Example
Specification
A = (R,U)
Code
const A =
    Artifact.of
        .R(featureVector)
        .U(confidenceBounds);

Decision
Make the notation executable.

I think this is one of the defining ideas of Subservable.

---

PD-004 — Semantic Isomorphism
Status: Accepted
Every representation should preserve semantics.
Representations include
Specification
English
Mathematical notation
Code
Diagrams
Logs
Markdown
Changing representation must not change meaning.

Decision
Preserve meaning across all projections.

I would actually elevate this to an architectural principle.

---

PD-005 — Projection Invariance
Status: Modified
Every representation is a projection.
No representation owns the truth.
The immutable model is canonical.

Decision
Merge into Semantic Isomorphism and keep projection as terminology.

I think this overlaps heavily with PD-004.
My recommendation is:
merge into Semantic Isomorphism
use "Projection" as terminology rather than a separate principle

---

PD-006 — Visual Language
Status: Accepted
Visual representations are first-class.
Not documentation.
Not screenshots.
Not UML.
Executable projections of the model.

Decision
Treat visual language as a first-class executable projection.

---

PD-007 — Collections
Status: Accepted
Collections become immutable values.
Not folders.
Not containers.
Collections may contain
observations
artifacts
provenance
collections
This allows scaling from
one observation

↓

research notebook

↓

git repository

↓

distributed archive
without changing abstractions.

Decision
Add immutable collections as a first-class model concept.

---

PD-008 — Currying for Notation Grammar
Status: Accepted
English API remains conventional.
Notation API uses staged construction.
Example
Artifact.of
    .R(...)
    .U(...);
This allows descriptive variables
Artifact.of
    .R(sensorCalibrationResult)
    .U(confidenceInterval95);
mirroring
A=(R,U)

Decision
Limit staged construction to notation grammar; keep English grammar direct and idiomatic.

---

PD-009 — Debug Visualizations
Status: Accepted
Logs, CLI output, and future tooling should reuse the visual language.
Example
● Observation

↓

□ Procedure

↓

◆ Artifact
instead of
Created observation...

Decision
Reuse the visual language in diagnostics and tooling.

---

PD-011 — Composition Over Helpers
Status: Accepted
Principle
Every transformation should represent exactly one semantic operation.
Composition is explicit.
Behavior is never hidden behind convenience helpers.

Good

```
const canonical = canonicalize(value);
const id = hash(canonical);

return deepFreeze({
    id,
    value,
});
```

Avoid

```
return createImmutableThing(value);
```

The second hides three independent concepts:
canonicalization
identity
immutability
Those concepts already exist in the specification and should remain visible in the implementation.

---

PD-012 — Projection Isomorphism
Status: Accepted (Specification)
This replaces the current one-sided definition.
Normative Definition
Let \(M\) be the canonical semantic model and let
\[
\pi_i : M \rightarrow R_i
\]be a projection into representation \(R_i\).
A projection is semantically isomorphic iff there exists an inverse
\[
\pi_i^{-1}:R_i\rightarrow M
\]such that
\[
\forall m\in M,\qquad
\pi_i^{-1}(\pi_i(m))=m
\]and
\[
\forall r\in R_i,\qquad
\pi_i(\pi_i^{-1}(r))=r.
\]Equivalently,
\[
\pi_i^{-1}\circ\pi_i=\mathrm{id}_M
\]and
\[
\pi_i\circ\pi_i^{-1}=\mathrm{id}_{R_i}.
\]Notice what changed.
We are not proving
\[
English \cong JSON
\]or
\[
TypeScript \cong Diagram.
\]Every representation is isomorphic through the canonical semantic model.
That scales indefinitely.
                Canonical Semantic Model
                     /    |    |    \
                    /     |    |     \
          English  TS   JSON  Diagram  ...
Every future representation satisfies the same theorem.

