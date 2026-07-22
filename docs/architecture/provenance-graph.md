# Provenance Graph Architecture

## Purpose

The Provenance subsystem records how artifacts are derived.

---

# Graph Model

Provenance forms a directed acyclic graph.

Observation
     |
     v
Procedure
     |
     v
Artifact A
     |
     v
Procedure
     |
     v
Artifact B


---

# Node Types

The graph contains:

## Artifact Nodes

Represent:

\[
A=(R,U)
\]

---

## Procedure Nodes

Represent:

\[
f
\]

including:

- identity,
- version,
- implementation hash.

---

## Provenance Edges

Represent derivation relationships.

---

# Requirements

The provenance graph MUST support:

- reproducibility,
- ancestry queries,
- dependency tracing,
- auditability.

---

# Immutability

Existing provenance records MUST NOT change.

New derivations create new graph nodes.

---

# Parent Relationships

Composition:

\[
f_2(f_1(M))
\]

creates:

Artifact B  
|  
+-- parent --> Artifact A


---

# Storage Independence

The graph model MUST NOT assume a specific storage technology.
