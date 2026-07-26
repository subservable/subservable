# Witness

## Purpose

Record the executable evidence produced during Experiment 0001.

The witness does not establish correctness.

It measures whether an observed behavior matches an experimental hypothesis.

---

## Witness Type

Automated test

Location:
Location:

packages/layering/tests/layering.test.ts

Test:

creates identical ids for equivalent layers

---

## Hypothesis Being Tested

Equivalent immutable layers should produce equivalent identities.

Expected:

```text
a.id === b.id
```

Procedure
Create two layers independently.
Provide equivalent layer content.
Generate identities.
Compare resulting identifiers.
Observation
The witness produced:
Expected: "2"
Received: "1"
The generated identities were not equivalent.
Result
The current implementation does not satisfy the tested identity hypothesis.
Observed behavior:
equivalent inputs
        ↓
different identities
Interpretation
The witness indicates that at least one additional property participates in identity generation.
Possible contributors include:
supplied identifier values,
creation ordering,
generated metadata,
non-structural fields.
The witness does not determine which interpretation is correct.

