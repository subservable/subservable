# O-0007 — preserved-source-&-experimental-branching

## Working Model

A preserved source can be used to construct multiple trajectories without modifying the source:

\[
M_0
\xrightarrow{f_1}
M_s
\xrightarrow{f_2(\,\cdot\,,\theta_A)}
A
\xrightarrow{\text{observe}}
M_A
\]

\[
M_0
\xrightarrow{f_1}
M_s
\xrightarrow{f_2(\,\cdot\,,\theta_B)}
B
\xrightarrow{\text{observe}}
M_B
\]

where:

- \(M_0\) = preserved source observation
- \(f_1\) = a Procedure used to select material from the source
- \(M_s\) = selected material
- \(f_2\) = reconstruction Procedure
- \(\theta_A,\theta_B\) = differing experimental contexts or parameters
- \(A,B\) = resulting artifacts
- \(M_A,M_B\) = observations of resulting behavior

The source remains unchanged:

\[
M_0 = M_0
\]

The resulting trajectories may diverge because their contexts or procedures differ.

### Selection Boundary

Selection is **not currently proposed as a new primitive**.

For this observation, selection is treated as a use of the existing Procedure model: a Procedure whose output happens to be selected material.

Whether the existing Procedure model is sufficient to represent selection remains an open question.

---

## Observation

A preserved source may be used to construct a new trajectory without modifying the source or the conditions from which it was preserved.

The original material remains undisturbed.

A selected portion may be reconstructed into a new context, where subsequent behavior can be observed independently.

The resulting trajectory is not a replacement for the source trajectory.

It is a new branch.

---

## Core Distinction

The system may need to distinguish between:

- **preserved source** — the original material and its recorded conditions
- **selection** — material intentionally carried forward by a Procedure
- **reconstruction** — the deterministic process by which selected material is instantiated or transformed
- **experimental context** — conditions introduced for the new trajectory
- **observed behavior** — what occurs after reconstruction
- **trajectory** — the resulting sequence of states, transformations, and observations

The introduction of experimental context must not modify the preserved source.

---

## Tree / Soil Model

A tree may produce fruit.

Fruit may be selected and used to grow another tree.

The original tree and its soil remain undisturbed.

The new tree may be grown in different soil.

That new soil is experimental context. It does not become part of the original tree's history merely because selected material was reconstructed within it.

```text
                         PRESERVED SOURCE
                              │
                           selection
                              │
                              ▼
                         selected fruit
                              │
                    ┌─────────┴─────────┐
                    │                   │
             experimental A       experimental B
                    │                   │
                    ▼                   ▼
                new tree A           new tree B
                    │                   │
                behavior A          behavior B
```

The original remains:

```text
                    ORIGINAL TREE
                         │
                         │
                    ORIGINAL SOIL
                         │
                       CONTROL
                         │
                    UNDISTURBED
```

The control is preserved rather than recreated.

---

## Reconstruction Invariant

Reconstruction must not require modification of the preserved source.

A Procedure may select material from the source:

\[
M_0 \xrightarrow{f_1} M_s
\]

That selected material may then be reconstructed repeatedly:

\[
M_0
\xrightarrow{f_1}
M_s
\xrightarrow{f_2(\cdot,\theta_1)}
A_1
\]

\[
M_0
\xrightarrow{f_1}
M_s
\xrightarrow{f_2(\cdot,\theta_2)}
A_2
\]

The source remains available for another reconstruction.

The resulting artifacts may differ because their contexts differ.

---

## Behavior

Behavior is treated as recorded output rather than presumed internal meaning.

For example:

(M_s,\theta_A)\xrightarrow{f_2}A

may produce one observed behavior while:

(M_s,\theta_B)\xrightarrow{f_2}B

produces another.

The difference is itself observable.

It does not, by itself, establish why the behaviors differ.

Any interpretation of that difference remains a later Claim or Discovery.

---

## Shared Ancestry and Divergent Trajectory

Multiple trajectories may share the same preserved source:

```text
                         M₀
                         │
                      procedure
                     (selection)
                         │
                        Mₛ
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          context A   context B   context C
             │           │           │
             ▼           ▼           ▼
        trajectory A trajectory B trajectory C
```

The shared ancestry should remain visible.

The divergent context should remain visible.

The resulting behavior should remain independently observable.

---

## Relationship to Existing Lifecycle

This observation does not propose a new primitive.

It applies the existing lifecycle:

```text
Observation
     │
     ▼
 Procedure
     │
     ▼
 Artifact
     │
     ▼
 Observation
```

Selection is represented here as a use of Procedure rather than as a separate primitive.

The additional concern is that the resulting Observation may belong to a new trajectory while retaining provenance to preserved source material.

Whether this existing lifecycle is sufficient to represent the full branching model remains open.

---

## Control

The preserved source acts as an undisturbed control.

The experimental branch is permitted to change.

The source is not recreated merely to serve as a control; it remains the original preserved material.

This creates a distinction between:

- source state
- selected material
- experimental context
- shared ancestry
- divergent trajectory
- observed behavior

The source should remain available for repeated reconstruction into additional contexts.

One preserved source could therefore produce multiple independently recorded trajectories:

```text
                         preserved source
                              │
                         selection
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
              context A    context B    context C
                 │            │            │
                 ▼            ▼            ▼
            trajectory A trajectory B trajectory C
```

No branch needs to consume or mutate the source.

---

## Why This Matters

This may provide a mechanism for handling change without losing the original.

Instead of:

```text
source → modify → new state
```

the model becomes:

```text
                  source
                    │
              preserve forever
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       branch A  branch B  branch C
          │         │         │
       observe    observe   observe
```

The system can therefore accumulate behavioral evidence without requiring the original material to be altered in order to generate it.

This may be especially relevant to the broader goal of preserving possibility before deciding what it means.

---

## Required Test

A future experiment should demonstrate that:

1. a source is preserved;
2. a reproducible selection is made from that source using the existing Procedure model;
3. the source remains unchanged;
4. selected material is reconstructed in a distinct context;
5. resulting behavior is recorded;
6. the original source remains available;
7. another reconstruction can be performed independently;
8. provenance distinguishes shared ancestry from divergent context;
9. neither trajectory requires rewriting the preserved source.

Successful and unsuccessful reconstruction attempts should both be recordable.

---

## Questions

- Is the existing Procedure model sufficient to represent selection?
- What precisely constitutes a selection from preserved material?
- How is the boundary between source and reconstructed branch represented?
- Does experimental context become an Observation, an input reference, or both?
- Can multiple trajectories share preserved source material while remaining independently reconstructable?
- What is the minimum provenance required to reconstruct a branch faithfully?
- Can behavior be compared across branches without asserting its cause?
- Does a branch itself become a future source without collapsing ancestry and identity?
- What happens when an experimental branch produces material that is selected for another branch?
- What test would demonstrate that selection requires a primitive distinct from Procedure?

---

## Constraints

No architecture changes proposed.

No new primitive proposed.

Selection is not defined as a new primitive by this observation.

No claim is made that experimental context causes observed behavioral differences.

No claim is made that reconstructed behavior represents the behavior of the preserved source in general.

No branch is considered more correct than its source or sibling branches.

The preserved source remains available as an undisturbed control.

Interpretation of behavioral differences remains outside this observation.

---

## Status

-exploratory
