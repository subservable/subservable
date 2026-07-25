# Experiments

Experiments describe proposed or completed evaluations of the Subservable system.

An experiment is not a claim, observation, or proof.

Its purpose is to define a repeatable procedure that can generate future observations, artifacts, or claims.

Experiments answer questions such as:

- Can this idea be evaluated?
- What evidence would support or contradict it?
- What data or assets are required?
- Is the procedure replayable?

Experiments may produce:

- Observations
- Supporting assets
- Provenance
- Claims
- New questions

They do not establish truth by themselves.

---

## Experiment Design

Before collecting data, every experiment must identify its atomic Observation.

The Observation boundary determines:

- provenance granularity,
- replay fidelity,
- comparison semantics,
- projection behavior.

Changing the Observation boundary creates a different experiment.

## Lifecycle

```text
Idea
    ↓
Experiment
    ↓
Observation(s)
    ↓
Claim(s)
    ↓
Review
```

An experiment may produce no meaningful result.

That outcome is still valuable because the procedure remains replayable.

---

## Guidelines

- Prefer small, replayable experiments.
- Record procedures before conclusions.
- Preserve both successful and unsuccessful outcomes.
- Do not rewrite history after execution.
- Treat experiments as deterministic recipes whenever possible.

---

## Relationship to Other Artifacts

| Artifact          | Purpose                                                 |
| ----------------- | ------------------------------------------------------- |
| Observation       | Preserve something that was noticed.                    |
| Experiment        | Define something to evaluate.                           |
| Claim             | Assert something that can be supported or contradicted. |
| Supporting Assets | Preserve source material used by a claim or experiment. |
| Provenance        | Record deterministic derivation.                        |

---

## Naming

Experiments use sequential identifiers.

```
experiment-0000.md
experiment-0001.md
...
```

Each experiment should remain independently replayable whenever practical.
