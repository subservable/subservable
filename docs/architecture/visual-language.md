## Vocabulary

### Nodes

```
● Observation

◆ Artifact

□ Procedure

⬢ Provenance

○ Unknown

△ Assumption

◇ Collection
```

### Edges

```
──── observed

→ transformed

⇢ composed

≈ estimated

- - - inferred

⋯ related
```

### Visual Confidence

```
solid
high confidence

semi-transparent
medium confidence

ghosted
unknown

blurred
estimated

dashed
assumption
```

## Purpose

Visual language is a first-class projection of the model.

It is not a screenshot layer or a documentation afterthought.

---

## Design Principles

- preserve semantic relationships,
- reuse the same symbols across diagrams and diagnostics,
- keep confidence states explicit,
- prefer executable visuals over decorative diagrams.

---

## Node Types

Nodes represent immutable model elements and stable process states.

Recommended node meanings:

- `● Observation`
- `□ Procedure`
- `◆ Artifact`
- `⬢ Provenance`
- `◇ Collection`
- `○ Unknown`
- `△ Assumption`

---

## Edge Types

Edges describe relationships between nodes.

Recommended edge meanings:

- observed,
- transformed,
- composed,
- estimated,
- inferred,
- related.

---

## Visual Uncertainty

Visual confidence SHOULD map directly onto uncertainty.

For example:

- solid → high confidence,
- semi-transparent → medium confidence,
- ghosted → unknown,
- blurred → estimated,
- dashed → assumption.

---

## Projection Rules

- do not change meaning when changing presentation,
- keep mathematical and visual projections aligned,
- preserve provenance in debug and explanatory views,
- use the same vocabulary in logs and diagrams.

---

## Debug Views

Debug views SHOULD prefer symbolic language over prose labels when the symbols are already defined.

Example:

```text
● Observation

↓

□ Procedure

↓

◆ Artifact
```

---

## Future Interactive Views

Future interactive views MAY add hover details, filtering, and graph traversal without changing the underlying symbols.
