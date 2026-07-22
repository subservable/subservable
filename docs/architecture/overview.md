# Architecture Overview

## Status

Architecture Document [v0.1](../../spec/0.1/README.md)

This document describes the intended architecture derived from specification [v0.1](../../spec/0.1/README.md).

The architecture defines system organization and boundaries.

It does not define implementation details.

---

# Design Principles

Subservable is built around six foundational principles:

1. Immutable observations
2. Deterministic procedures
3. Reproducible artifacts
4. Explicit provenance
5. Composable transformations
6. Immutable collections

---

# System Layers

The architecture is divided into layers.

```text
+------------------------------------------------+
|                Applications                    |
+------------------------------------------------+
|             Reference API Layer                |
+------------------------------------------------+
|           Procedure Runtime Layer              |
+------------------------------------------------+
| Collection | Artifact | Provenance | Observation Services |
+------------------------------------------------+
|             Immutable Persistence              |
+------------------------------------------------+

```
---

# Core Components

## Observation Layer

Responsible for:

- accepting observations,
- preserving immutability,
- assigning identity,
- providing retrieval.

---

## Collection Layer

Responsible for:

- grouping immutable resources,
- preserving membership history through new collection values,
- providing collection retrieval.

---

## Artifact Layer

Responsible for:

- representing derived outputs,
- storing uncertainty,
- validating artifact identity.

---

## Provenance Layer

Responsible for:

- derivation history,
- procedure identity,
- parent relationships,
- reproducibility.

---

## Procedure Runtime

Responsible for:

- executing deterministic procedures,
- enforcing contracts,
- producing artifacts.

---

# Data Flow

The primary execution path:

```text
Observation
      |
      v
Procedure
      |
      v
Artifact
      |
      v
Provenance Record
```

---

# Multiple projections

```text
Specification
        │
        ▼
Immutable Model
   ├── Mathematics
   ├── English API
   ├── Visualization
   ├── Markdown
   └── Runtime
```

Everything is a projection of the same immutable model.
No projection owns the truth.

---

# Non-Goals

The architecture does not prescribe:

- database technology,
- programming language,
- distributed architecture,
- user interface,
- visualization system.

Those decisions belong to implementation layers.

---

# Future Extensions

Possible future components:

- distributed artifact exchange,
- collaborative provenance graphs,
- domain-specific Prism libraries,
- automated procedure discovery.
