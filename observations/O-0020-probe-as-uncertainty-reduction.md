O-0020 — probe-as-uncertainty-reduction
Title
Probe as Uncertainty Reduction
Context
During the Layer identity experiment, a witness was created to evaluate the claim:
Equivalent immutable layers should produce equivalent identities.

The witness produced an unexpected result:
Equivalent structures currently produce different identities.

The initial interpretation could have been:
The implementation is incorrect.

However, preserving the result revealed a different possibility:
The witness exposed an unresolved classification question about the nature of Layer identity.

The experiment demonstrated that a failing witness can function as a probe.
Observation
A probe is not necessarily intended to confirm a hypothesis.
A probe may intentionally interact with a system in order to reveal hidden structure, boundaries, or assumptions.
The Layer identity witness acted as a probe:
Claim
↓
Witness
↓
Unexpected result
↓
Unknown boundary exposed
The result was valuable because it narrowed the space of possible interpretations.
Chaos Probe
A chaos probe is a deliberate introduction of variation designed to reveal which properties a system treats as meaningful.
The purpose is not to create disorder.
The purpose is to expose hidden dependencies.
Examples:
Change one property.
Observe what changes.

Hold structure constant.
Vary history.

Hold history constant.
Vary structure.

Observe which identity relationships remain stable.
A chaos probe asks:
What does the system actually care about?

rather than:
What did we assume the system should care about?

Emerging CLI Implication
A Subservable interface may need first-class support for probes.
Traditional tooling optimizes for:
intent → action → result
A probe-oriented system optimizes for:
question
↓
variation
↓
witness
↓
observation
↓
updated understanding
Emerging CLI Principle
A Subservable CLI should help users create and interpret probes.
Instead of asking only:
What command do you want to run?
The system may ask:
What uncertainty are you trying to reduce?
Possible Probe Drivers
Different users may require different projections of the same underlying probe system.
Engineer
Purpose:
Understand implementation behavior.
Questions:
What changed?
What witness covers this behavior?
What invariant was violated?
Researcher
Purpose:
Explore unknown structure.
Questions:
What assumptions remain untested?
What variations reveal new information?
What observations accumulate?
Maintainer
Purpose:
Protect integrity.
Questions:
Can this state be reconstructed?
Is provenance preserved?
Did the system behavior change intentionally?
Explorer
Purpose:
Understand relationships.
Questions:
Why does this exist?
What alternatives were possible?
How did this state emerge?
Emerging Understanding
Subservable may not only preserve objects.
It may preserve the probes used to understand objects.
The history of inquiry becomes part of the available context.
Status
\[
\text{-observed}
\]Dogear:
The concept of chaos probes requires future exploration.
Questions remain:
What defines a valid probe?
How should probes be represented?
Should probes themselves become immutable artifacts?
How do probes relate to experiments, witnesses, and observations?

---
