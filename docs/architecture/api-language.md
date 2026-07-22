> Executable Notation
> The public API should preserve a recognizable correspondence with the formal mathematical specification. Where practical, symbols defined in the specification should have equivalent expressive forms in code.

Purpose

Define how the public API should read and evolve.

1. Design Philosophy

2. Dual Grammar
   - Mathematical Grammar
   - English Grammar

3. Executable Notation

4. Naming Rules

5. Composition Rules

6. Examples

Observation.of(payload)

```
Artifact.of({
    representation,
    uncertainty,
})
```

And

```
const A =
    Artifact.of
        .R(featureVector)
        .U(confidenceInterval);
```

Are **both** first-class APIs.

7. Anti-patterns
