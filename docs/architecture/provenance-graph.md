# Provenance Graph Architecture

## Purpose

The Provenance subsystem records how artifacts are derived.

---

# Graph Model

Provenance forms a directed acyclic graph.

```text
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
```

---

# Node Types

The graph contains:

## Artifact Nodes

```text
Represent:

\[
A=(R,U)
\]

```

---


## Procedure Nodes

Represent:

```text
\[
f
\]
```

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

```text
\[
f_2(f_1(M))
\]
```

creates:

```text
Artifact B  
|  
+-- parent --> Artifact A
```

---

# Persistence Independence

The graph model MUST NOT assume a specific persistence technology.
