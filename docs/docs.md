# Project Decisions

## Decision Template

```text
Decision ID: PD-###
Title:
Status: Proposed | Accepted | Modified | Rejected | Deferred
Affects:
Rationale:
Alternatives:
Decision:
```

## Decision Flow

Status is authoritative.

Proposal is advisory.

Decision records the final chosen outcome.

When a decision is accepted or modified:

- Specification changes → update `spec/<version>`
- Architecture changes → update `docs/architecture`
- Roadmap changes → update roadmap documents
- Implementation changes → update implementation documentation

Nothing else changes.

---

# Accepted Constitutional Decisions

## PD-001 — Rename Storage → Persistence

Status: Accepted

### Decision

Rename storage to persistence.

Storage describes an implementation.

Persistence describes a capability.

Implementations may include:

```text
Persistence

├── Memory

├── Filesystem

├── SQLite

├── Git

└── Blockchain
```

---

## PD-002 — Dual Public Grammar

Status: Accepted

Subservable exposes two equivalent public grammars.

### English Grammar

```ts
Observation.of(payload)

Artifact.of({
    representation,
    uncertainty,
})
```

### Notation Grammar

```ts
Artifact.of
    .R(representation)
    .U(uncertainty);
```

Neither grammar owns semantics.

Both produce identical immutable values.

---

## PD-003 — Executable Notation

Status: Accepted

The mathematical specification maps directly onto executable code.

The implementation is the notation hydrated with meaningful names.

Example:

\[
A=(R,U)
\]

```ts
const A =
    Artifact.of
        .R(featureVector)
        .U(confidenceBounds);
```

The implementation is an executable reading of the specification.

---

## PD-004 — Semantic Isomorphism

Status: Accepted

Every representation preserves canonical semantics.

Representations include:

- mathematical notation,
- executable notation,
- diagrams,
- serialization,
- natural language.

Changing representation must not change meaning.

---

## PD-005 — Projection Terminology

Status: Modified

Projection is the preferred terminology.

No projection owns semantics.

The immutable model is canonical.

Projection invariance is represented through semantic isomorphism.

---

## PD-006 — Visual Grammar

Status: Accepted

Visual representations are first-class projections.

They are:

- not documentation,
- not screenshots,
- not static explanations.

They are executable views of the model.

---

## PD-007 — Immutable Collections

Status: Accepted

Collections are immutable values.

Collections may contain:

- observations,
- artifacts,
- provenance,
- collections.

The abstraction scales from:

```text
one observation
```

to:

```text
research notebook

↓

repository

↓

distributed archive
```

without changing the model.

---

## PD-008 — Currying for Notation Grammar

Status: Accepted

English grammar remains direct and idiomatic.

Notation grammar uses staged construction.

Example:

```ts
Artifact.of
    .R(sensorCalibrationResult)
    .U(confidenceInterval95);
```

This mirrors:

\[
A=(R,U)
\]

---

## PD-009 — Visual Diagnostics

Status: Accepted

Logs, CLI output, and debugging tools should reuse the visual grammar.

Example:

```text
● Observation

↓

□ Procedure

↓

◆ Artifact
```

Diagnostics should communicate model structure.

---

## PD-011 — Composition Over Helpers

Status: Accepted

Every transformation represents one semantic operation.

Composition remains explicit.

Avoid hiding foundational operations behind convenience helpers.

Preferred:

```ts
const canonical = canonicalize(value);
const id = hash(canonical);

return deepFreeze({
    id,
    value,
});
```

Avoid:

```ts
createImmutableThing(value)
```

because it hides:

- canonicalization,
- identity,
- immutability.

---

# Accepted Architecture Decisions

## PD-012 — Repository Dogfooding

Status: Accepted

The Subservable repository SHALL become the first canonical dataset managed by Subservable itself.

## Objective

Use the system to manage its own:

- proposals,
- decisions,
- tasks,
- issues,
- milestones,
- releases,
- documentation.

## Deliverables

- Project observation model.
- Procedures deriving:
  - roadmap,
  - TODO views,
  - milestones,
  - release notes,
  - changelog,
  - specification status.
- CLI for recording observations.
- Markdown projections generated from observations.
- Future external synchronization.

## Acceptance Criteria

Manual project tracking progressively becomes a projection of immutable observations.

---

## PD-013 — Projection Isomorphism

Status: Accepted

Let:

\[
M
\]

be the canonical semantic model.

A projection:

\[
\pi_i:M\rightarrow R_i
\]

is semantically isomorphic when there exists:

\[
\pi_i^{-1}:R_i\rightarrow M
\]

such that:

\[
\forall m\in M:
\pi_i^{-1}(\pi_i(m))=m
\]

and:

\[
\forall r\in R_i:
\pi_i(\pi_i^{-1}(r))=r
\]

Every projection derives meaning through the canonical model.

Examples:

```text
Canonical Model

      |
 ┌────┼────┐
 ▼    ▼    ▼

TS  JSON  Diagram
```

---

## PD-014 — Projection Equivalence Verification

Status: Accepted

Projection Isomorphism defines the theorem.

Projection Equivalence Tests verify implementations satisfy the theorem.

Testing layers:

```text
1. Unit Tests

2. Contract Tests

3. Projection Equivalence Tests

4. Integration Tests

5. End-to-End MVP Tests
```

---

## PD-015 — Reproducibility Boundary

Status: Accepted

Reproducibility has two layers.

## Specification Reproducibility

Given:

- canonical observations,
- canonical procedures,
- canonical serialization,
- identical specification version,

the canonical result MUST be identical.

## Reference Implementation Reproducibility

Given:

- identical implementation,
- identical dependencies,
- identical execution identity,

the artifact hash MUST be identical.

---

## PD-016 — Execution Identity

Status: Accepted

Execution Identity is a first-class immutable value.

It records the execution context required for reproducible derivation.

It is distinct from:

- Observation,
- Procedure,
- Artifact,
- Provenance.

Execution Identity is referenced by Provenance.

---

## PD-017 — Canonical Development Workflow

Status: Accepted

Subservable is developed using the same reproducible workflow it defines.

```text
Observation

↓

Proposal

↓

Specification

↓

Normative Rules

↓

Failing Tests

↓

Reference Implementation

↓

Projection Equivalence Tests

↓

Documentation

↓

Dogfooding

↓

Review
```

Implementation must not introduce concepts that have not first been defined by specification.

---

# Future Tasks

## Task-001 — Workflow CLI

Status: Planned

Create executable tooling for the development workflow.

Possible commands:

```bash
sub observe

sub derive

sub review

sub release
```

These commands are human projections of the canonical transformation system.

They are not the underlying model.

---

# Research

## Research-001 — Replay Transformations

Status: Incubating

Explore whether transformations can be represented as reusable mathematical procedures that remain:

- pure,
- composable,
- deterministic,
- reproducible.

Example:

\[
M \xrightarrow{f_1} A_1 \xrightarrow{f_2} A_2
\]

The goal is not convenience.

The goal is proving that transformations remain reconstructable.

---