# Subservable Implementation Plan

## Status

Implementation Planning Document v0.1

This document defines the implementation strategy following:

- Specification v0.1
- Architecture v0.1

No implementation details are defined here.

This document establishes:

- package boundaries,
- dependency direction,
- testing strategy,
- milestones,
- first reference implementation path.

---

# 1. Implementation Principles

The reference implementation MUST prioritize:

1. Correctness over optimization.
2. Explicit contracts over convenience.
3. Determinism over performance.
4. Testability over premature abstraction.
5. Small composable modules over large frameworks.

---

# 2. Repository Structure

Initial repository:
```
subservable/

├── spec/  
│ └── 0.1/

├── docs/  
│ ├── architecture/  
│ └── guides/

├── packages/

│ ├── core/  
│ ├── artifacts/  
│ ├── provenance/  
│ ├── observations/  
│ ├── procedures/  
│ ├── runtime/  
│ └── storage/

├── tests/

├── examples/

└── tools/
```


---

# 3. Package Responsibilities

## core

Foundation types shared across the system.

Responsibilities:

- identifiers,
- serialization interfaces,
- result types,
- validation primitives.

Dependencies:

None.

---

## observations

Responsible for immutable observations.

Responsibilities:

- create observations,
- validate observations,
- identify observations,
- retrieve observation history.

Depends on:

core


---

## artifacts

Responsible for artifact representation.

Responsibilities:

- artifact model,
- artifact identity,
- uncertainty container,
- artifact validation.

Depends on:

core

---

## provenance

Responsible for derivation history.

Responsibilities:

- provenance records,
- parent relationships,
- provenance validation,
- graph traversal.

Depends on:

core
artifacts


---

## procedures

Responsible for defining executable procedures.

Responsibilities:

- procedure contracts,
- procedure metadata,
- procedure registration.

Depends on:

core
artifacts


---

## runtime

Responsible for executing procedures.

Responsibilities:

- procedure execution,
- deterministic execution boundary,
- artifact generation,
- provenance generation.

Depends on:

core  
artifacts  
provenance  
procedures


---

## storage

Responsible for persistence boundaries.

Responsibilities:

- observation storage,
- artifact storage,
- provenance storage.

The first implementation MAY be in-memory.

Depends on:

core

---

# 4. Dependency Direction

Dependencies MUST flow one direction.

             runtime

                |
                v

procedures --> provenance

                |
                v

artifacts --> observations

                |
                v

               core


Lower layers MUST NOT depend on higher layers.

---

# 5. Testing Strategy

Testing is a first-class requirement.

Every feature MUST include tests.

A feature is incomplete until:

- implementation exists,
- tests exist,
- tests pass.

---

# Test Layers

## Unit Tests

Validate individual package behavior.

Examples:

- artifact hashing,
- observation immutability,
- provenance validation.

---

## Contract Tests

Validate architecture boundaries.

Examples:

- procedure produces artifact,
- provenance references artifact,
- runtime preserves determinism.

---

## Integration Tests

Validate complete workflows.

Example:

Observation

```
  |
```

Procedure

```
  |
```

Artifact

```
  |
```

Provenance


---

# 6. First Vertical Slice

The first implementation milestone is intentionally small.

Goal:

Create one complete deterministic pipeline.
Create Observation

```
    |
```

Execute Procedure

```
    |
```

Generate Artifact

```
    |
```

Generate Provenance

```
    |
```

Reproduce Result


---

# 7. Milestones

## Milestone 0 — Repository Foundation

Deliver:

- repository structure,
- documentation,
- testing framework,
- package configuration.

No implementation.

---

## Milestone 1 — Core Types

Implement:

- identifiers,
- canonical serialization interface,
- base result types.

Tests required.

---

## Milestone 2 — Observation System

Implement:

- immutable observations,
- observation identity,
- storage interface.

Tests required.

---

## Milestone 3 — Artifact System

Implement:

- artifact creation,
- artifact hashing,
- uncertainty container.

Tests required.

---

## Milestone 4 — Provenance System

Implement:

- provenance records,
- parent relationships,
- validation.

Tests required.

---

## Milestone 5 — Procedure Runtime

Implement:

- procedure execution,
- deterministic boundary,
- artifact creation,
- provenance generation.

Tests required.

---

## Milestone 6 — Reference Procedure

Create the first built-in procedure.

Purpose:

Validate the complete system.

Example:

Identity Procedure

Input:  
Observation

Output:  
Equivalent Artifact


---

# 8. Initial Non-Goals

The first implementation will NOT include:

- distributed nodes,
- blockchain consensus,
- machine learning,
- UI,
- visualization,
- external APIs,
- optimization layers.

These may be future extensions.

---

# 9. Completion Criteria

The reference implementation is considered valid when:

A user can:

1. Create an immutable observation.
2. Execute a deterministic procedure.
3. Produce an artifact.
4. Produce provenance.
5. Reproduce the same artifact from the same inputs.
6. Verify the provenance chain.

---

# Final Principle

The first implementation should prove the smallest possible version of the Subservable model:

Immutable observations in.

Deterministic procedures applied.

Reproducible artifacts out.

Everything else follows from this foundation.
