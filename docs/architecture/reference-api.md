# Reference Implementation API

## Purpose

This document defines the first public API boundary.

The reference implementation SHOULD expose the smallest possible surface.

Implementation details remain internal.

---

# Design Principle

The API exposes intent.

The API MUST NOT expose internal architecture directly.

---

# Core Types

## Observation

```typescript
interface Observation {
  id: string;
  payload: unknown;
  metadata?: Record<string, unknown>;
}
```

---
## Provenance

```
interface Provenance {
  inputRefs: string[];
  procedureId: string;
  implementationHash: string;
  runtimeHash?: string;
  parameters: unknown;
  parents: string[];
  timestamp: string;
  outputRef: string;
}
```

---

# Procedure Interface

```
interface Procedure<
  Input,
  Output,
  Parameters
> {

  id(): string;

  execute(
    input: Input,
    parameters: Parameters
  ): {
    artifact: Artifact<Output>;
    provenance: Provenance;
  };
}
```

---

# Runtime Interface

```
interface ProcedureRuntime {

  execute<P extends Procedure<any, any, any>>(
    procedure: P,
    input: unknown,
    parameters: unknown
  ):
    {
      artifact: Artifact;
      provenance: Provenance;
    };

}
```

---

# Storage Boundary

Storage is intentionally abstract.

The API SHOULD depend on:

```
ArtifactStore
ObservationStore
ProvenanceStore
```

rather than specific databases.

---

# Initial Reference API Goals

The first implementation SHOULD support:

1. Store immutable observations.
2. Execute deterministic procedures.
3. Produce artifacts.
4. Generate provenance.
5. Reproduce identical outputs.

---

# Non-Goals

The first implementation does not require:

- distributed consensus,
- blockchain storage,
- machine learning,
- visualization,
- user interfaces.

```

---
```