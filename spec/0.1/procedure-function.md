# The Procedure Function `f`

## Version 0.1

## Purpose

Subservable preserves immutable observations and derives reproducible artifacts through deterministic procedures.

Subservable does not preserve conclusions.

It preserves:

- observations,
- procedures,
- artifacts,
- provenance.

The purpose of `f` is to make structure reproducibly observable.

---

# Procedure Definition

Let:

\[
\mathcal{F}
\]

represent the family of deterministic procedures.

A procedure is:

\[
f\in\mathcal{F}
\]

A procedure maps inputs into artifacts:

\[
f:(M,\theta)\rightarrow(A,P)
\]

where:

- \(M\) is an immutable observation set.
- \(\theta\) contains explicit parameters.
- \(A\) is the resulting artifact.
- \(P\) is provenance.

---

# Required Properties

## Purity

A procedure MUST be a pure function of:

\[
(M,\theta)
\]

A procedure MUST NOT depend on:

- wall clock time,
- hidden randomness,
- mutable global state,
- external services,
- environment variables,

unless explicitly supplied through \(\theta\).

---

## Determinism

Identical:

- observations,
- parameters,
- procedure identity,

MUST produce identical results.

---

## Immutability

Procedures MUST NOT modify observations.

\[
Store(M)_{before}=Store(M)_{after}
\]

---

## Composition

Procedures MAY compose.

\[
(A_1,P_1)=f_1(M)
\]

\[
(A_2,P_2)=f_2(A_1)
\]

Composition MUST preserve:

- determinism,
- immutability,
- provenance,
- uncertainty behavior.

---

## Uncertainty

Procedures producing uncertain outputs MUST define:

\[
U_{out}=f_U(U_{in},R,\theta)
\]

The uncertainty model MAY use:

- analytic propagation,
- Jacobian methods,
- Monte Carlo,
- Bayesian methods,
- bootstrap,
- interval arithmetic.

Uncertainty MUST NOT be silently discarded.