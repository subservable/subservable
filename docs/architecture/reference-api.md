# Reference Implementation API

## Purpose

This document defines the first public API boundary.

The reference implementation SHOULD expose the smallest possible surface.

Implementation details remain internal.

Code examples use camelCase field names.
Mathematical and specification notation may use snake_case.

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

## Artifact

```typescript
interface Artifact<Representation = unknown> {
  id: string;
  representation: Representation;
  uncertainty: unknown;
}
```

## Provenance

```typescript
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

## Collection

```typescript
interface Collection {
  id: string;
  memberRefs: string[];
  metadata?: Record<string, unknown>;
}
```

---

# Procedure Interface

```typescript
interface Procedure<
  Input,
  Output,
  Parameters
> {
  id(): string;

  uncertaintyModel(): unknown;

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

```typescript
interface ProcedureRuntime {
  execute<P extends Procedure<any, any, any>>(
    procedure: P,
    input: unknown,
    parameters: unknown
  ): {
    artifact: Artifact;
    provenance: Provenance;
  };
}
```

---

# Persistence Boundary

Persistence is intentionally abstract.

The API SHOULD depend on:

```typescript
ArtifactPersistence
ObservationPersistence
ProvenancePersistence
CollectionPersistence
```

rather than specific databases.

---

# Initial Reference API Goals

The first implementation SHOULD support:

1. Store immutable observations.
2. Store immutable collections.
3. Execute deterministic procedures.
4. Produce artifacts.
5. Generate provenance.
6. Reproduce identical outputs.

---

# Non-Goals

The first implementation does not require:

- distributed consensus,
- blockchain persistence,
- machine learning,
- visualization,
- user interfaces.
