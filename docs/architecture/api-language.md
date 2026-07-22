# API Language

## Purpose

The public API should preserve a recognizable correspondence with the formal specification.

Where practical, symbols defined in the specification should have equivalent expressive forms in code.

---

## 1. Design Philosophy

The API should read like a direct expression of the model.

It should prefer small, explicit, immutable values over convenience wrappers that hide meaning.

---

## 2. Dual Grammar

Subservable exposes two equivalent grammars:

- Mathematical grammar for formal reasoning.
- English grammar for conventional code.

Both grammars MUST preserve the same semantics.

---

## 3. Executable Notation

Notation grammar may use staged construction when it improves readability.

English grammar SHOULD remain direct and idiomatic.

Examples:

```typescript
Observation.of(payload)
```

```typescript
Artifact.of({
  representation,
  uncertainty,
})
```

```typescript
const artifact =
  Artifact.of
    .R(featureVector)
    .U(confidenceInterval);
```

---

## 4. Naming Rules

Code uses camelCase.

Spec notation may use snake_case or symbolic names.

Field names SHOULD map consistently between the two grammars.

---

## 5. Composition Rules

Outputs of one step MAY become inputs to another.

Composition MUST preserve:

- immutability,
- determinism,
- provenance,
- uncertainty handling.

---

## 6. Examples

- `Observation.of(payload)`
- `Collection.of([observationRef, artifactRef])`
- `Artifact.of({ representation, uncertainty })`

---

## 7. Anti-patterns

- hidden inputs,
- mutable return values,
- one-off naming for the same concept,
- grammar-specific semantics,
- implementation details leaking into the public boundary.
