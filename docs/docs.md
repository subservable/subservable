## decision template

Decision ID: PD-###
Title:
Status: Proposed | Accepted | Modified | Rejected | Deferred
Affects:
Rationale:
Alternatives:
Decision:

## decision flow

When a decision is accepted:
Specification changes → update spec/0.1
Architecture changes → update docs/architecture
Roadmap changes → update docs/roadmap
Implementation changes → update impl-plan.md
Nothing else changes.


PD-001 — Rename storage → persistence
Status: Proposed
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

Recommendation
Accept

---

PD-002 — Dual Public Grammar
Status: Proposed
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

Recommendation
Accept

---

PD-003 — Executable Notation
Status: Proposed
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
Recommendation
Accept
I think this is one of the defining ideas of Subservable.

---

PD-004 — Semantic Isomorphism
Status: Proposed
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
Recommendation
Accept

I would actually elevate this to an architectural principle.

---

PD-005 — Projection Invariance
Status: Proposed
Every representation is a projection.
No representation owns the truth.
The immutable model is canonical.
Recommendation
Modify

I think this overlaps heavily with PD-004.
My recommendation is:
merge into Semantic Isomorphism
use "Projection" as terminology rather than a separate principle

---

PD-006 — Visual Language
Status: Proposed
Visual representations are first-class.
Not documentation.
Not screenshots.
Not UML.
Executable projections of the model.
Recommendation
Accept

---

PD-007 — Collections
Status: Proposed
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
Recommendation
Accept

---

PD-008 — Currying for Notation Grammar
Status: Proposed
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
Recommendation
Accept, with one refinement:
Only the notation grammar should use staged construction. The English grammar should remain direct and idiomatic.

---

PD-009 — Debug Visualizations
Status: Proposed
Logs, CLI output, and future tooling should reuse the visual language.
Example
● Observation

↓

□ Procedure

↓

◆ Artifact
instead of
Created observation...
Recommendation
Accept