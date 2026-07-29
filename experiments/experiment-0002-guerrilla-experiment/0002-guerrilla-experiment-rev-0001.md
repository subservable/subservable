# Experiment 0002 — Guerrilla Experiment

**Status:** Active / Draft  
**Experiment:** Physical preservation and playback of observations without computational infrastructure

---

## 1. Premise

Subservable is intended to preserve observations independently of the mechanisms later used to interpret them.

This experiment removes as much computational infrastructure as possible.

Assume:

- electricity may be unavailable;
- computers may be unavailable;
- networks may be unavailable;
- software may be unavailable;
- the collector may have access only to physical materials.

The question becomes:

> What is the smallest physical system capable of preserving an observation and its sequence so that interpretation can occur later?

---

# 2. Physical Field Kit

A physical journal is used as the primary recording medium.

Material is collected and placed into the journal according to the sequence in which it is encountered or recorded.

The physical journal therefore provides two immediately observable properties:

1. **artifact preservation**
2. **sequence preservation**

The page itself participates in preserving history.

The field kit is intentionally primitive.

It does not require a database, filesystem, network, executable program, or electrical power.

---

# 3. Field Entry

A field entry may be represented abstractly as:

\[
E_n = (x_n,p_n)
\]

where:

- \(x_n\) = surviving artifact;
- \(p_n\) = physical position in the preserved sequence.

The physical record establishes an ordering:

\[
x_1 \prec x_2 \prec x_3 \prec \ldots \prec x_n
\]

The ordering is part of what survives.

---

# 4. Interpretation Boundary

The experiment intentionally separates the captured record from the collector's interpretation.

The initial record attempts to preserve only:

- what was collected;
- what physically survives;
- where it occurs in sequence;
- observable relationships between artifacts;
- representations subsequently produced from those artifacts.

The following are intentionally withheld from the initial evidence record:

- why an artifact was collected;
- what the collector believes it means;
- what pattern the collector expects;
- what hypothesis the collector is testing;
- what conclusion the collector has reached.

Interpretation is a later operation.

---

# 5. Multiple Media

The same experimental sequence may exist across different physical or digital media.

Current media include:

- physical field-kit photographs;
- SVG representations;
- mathematical notation;
- future field samples.

These media are related by experimental provenance but are not assumed to be equivalent.

A representation is not automatically the artifact from which it was derived.

---

# 6. Multiple Representational Branches

An artifact may support more than one decomposition or representation.

Given an artifact:

\[
A
\]

one representational procedure may produce:

\[
A
\overset{\Delta_1}{\longrightarrow}
R_1
\]

while another may independently produce:

\[
A
\overset{\Delta_2}{\longrightarrow}
R_2
\]

The branches may be represented as:

```text
                    A
                  /   \
               Δ₁       Δ₂
               ↓         ↓
              R₁        R₂
```

The important property is that the branches do not replace the artifact.

\[
\boxed{
A \text{ survives independently of }
\Delta_1,\Delta_2,\ldots,\Delta_n
}
\]

The resulting representations may be:

- different;
- complementary;
- incomplete;
- incompatible;
- equivalent;
- or related in ways not yet known.

No relationship between \(R_1\) and \(R_2\) is assumed merely because they originate from the same \(A\).

---

# 7. Deliberate or Accidental Branching

The origin of a representational branch is itself not yet resolved.

A branch may have been:

- deliberately produced;
- accidentally produced;
- discovered after collection;
- produced through interaction with the recording medium;
- or produced through some combination of these.

The experiment does not currently require this distinction to be resolved.

The possibility space is preserved.

This is intentional.

The purpose is to avoid prematurely collapsing an observed branching structure into a single explanation.

---

# 8. Parallel Sequence

The current experiment contains at least two related forms of sequence:

### Field sequence

Physical artifacts are collected and photographed in sequence.

\[
F_1 \rightarrow F_2 \rightarrow F_3 \rightarrow \ldots
\]

### Representation sequence

A related sequence of representations is produced in another medium.

\[
R_1 \rightarrow R_2 \rightarrow R_3 \rightarrow \ldots
\]

These sequences may correspond, but correspondence is an observation to be established rather than assumed.

The experiment therefore permits:

\[
\boxed{
\text{one source}
\rightarrow
\text{multiple media}
\rightarrow
\text{multiple representational paths}
}
\]

---

# 9. Findings

Findings record what has been established through the experiment so far.

They are deliberately separated from interpretation.

## Finding 0002.01 — Physical preservation

A physical journal can preserve collected material without computational infrastructure.

The physical medium itself can carry both artifact and sequence.

---

## Finding 0002.02 — Sequence survives independently

The ordering of collected material can remain available after the original collection process has ended.

Sequence therefore constitutes surviving information rather than merely temporary collection context.

---

## Finding 0002.03 — Raw playback is possible

A sequence of photographic captures can be provided to another observer without providing the collector's interpretation.

The observer can inspect the surviving record independently.

This establishes a primitive playback mechanism.

---

## Finding 0002.04 — Interpretation can remain outside the record

The collector's interpretation can be intentionally withheld while the artifact sequence remains available.

This demonstrates a practical separation between:

\[
\text{record}
\]

and:

\[
\text{interpretation}
\]

---

## Finding 0002.05 — Multiple representations can coexist

The experiment contains field-kit captures and SVG representations associated with the same broader sequence.

These representations can be preserved without replacing the original field record.

---

## Finding 0002.06 — A common artifact can branch into representations

The experiment provides a working representation for multiple decomposition paths:

\[
A
\overset{\Delta_1}{\longrightarrow}
R_1
\]

and:

\[
A
\overset{\Delta_2}{\longrightarrow}
R_2
\]

The existence of multiple paths does not require the paths to have the same purpose or meaning.

---

## Finding 0002.07 — Meaning remains intentionally unresolved

The meaning of the sequenced items has **not** been disclosed.

This is not missing documentation.

It is an experimental condition.

The collector possesses an interpretation that has intentionally not been entered into the record.

The observer may independently develop a possible interpretation.

Neither interpretation is currently promoted to a finding.

---

# 10. The Withheld Interpretation Layer

There is currently an intentionally sealed layer:

\[
\boxed{I_C}
\]

where \(I_C\) represents the collector's interpretation.

Separately, an observer may form:

\[
\boxed{I_O}
\]

where \(I_O\) represents an observer's interpretation.

At the current stage:

\[
I_C \notin \text{Evidence Record}
\]

and:

\[
I_O \notin \text{Evidence Record}
\]

The experiment therefore preserves the following distinction:

\[
\boxed{
\text{Evidence}
\quad\neq\quad
\text{Collector Interpretation}
\quad\neq\quad
\text{Observer Interpretation}
}
\]

The fact that both interpretations may exist does not make either one a finding.

---

# 11. Current Epistemic State

The experiment currently contains three distinct states of knowledge:

### Observed

What can be recovered directly from the surviving artifacts and their sequence.

### Possible

Interpretations or relationships that an observer may suspect but which have not been established.

### Withheld

Information known by the collector but intentionally not disclosed during playback.

These states must not be silently merged.

A useful current model is:

\[
\boxed{
O \rightarrow P
}
\]

while:

\[
I_C
\]

remains outside the playback channel.

The experiment therefore allows discovery to occur without giving the observer the answer key.

---

# 12. Playback Protocol

When a new field-kit sequence is provided for playback, the initial pass should record only:

1. visible artifacts;
2. sequence;
3. physical relationships;
4. repetitions;
5. transitions;
6. observable changes;
7. ambiguities;
8. missing information.

The observer should explicitly identify uncertainty rather than resolve it through assumption.

For example:

> Unknown from the record.

is preferable to:

> Probably intended to mean X.

during the raw playback phase.

Interpretation may be performed later as a separate operation.

---

# 13. Future Comparison

At a later stage, the collector may reveal \(I_C\).

The observer's prior interpretation \(I_O\) can then be compared against it.

The comparison itself becomes experimental material.

Possible outcomes include:

\[
I_O = I_C
\]

\[
I_O \neq I_C
\]

or:

\[
I_O \cap I_C \neq \varnothing
\]

without either interpretation being completely equivalent.

The experiment does not require agreement.

A divergence may be more informative than agreement.

---

# 14. Current Experimental Model

The experiment can currently be summarized as:

\[
\boxed{
A
\rightarrow
\text{Sequence}
\rightarrow
\text{Playback}
\rightarrow
\begin{cases}
R_1\\
R_2\\
\vdots\\
R_n
\end{cases}
\rightarrow
\text{Interpretation}
}
\]

while preserving:

\[
\boxed{
A
\text{ remains the surviving artifact}
}
\]

and:

\[
\boxed{
\text{interpretations remain downstream}
}
\]

---

# 15. Open Questions

These questions remain deliberately unanswered:

- How much information survives in the physical record?
- How much sequence is necessary for discovery?
- Can different observers reconstruct relationships without shared interpretation?
- Can two different representations be shown to derive from the same artifact?
- What relationships survive across media?
- Can a representation reveal structure without becoming the source of truth?
- How much of the collector's original intention is actually necessary?
- What happens when the observer's interpretation differs from the collector's?
- Can the process be repeated with increasingly primitive field equipment?
- What is the smallest viable Subservable field kit?

These are questions for subsequent experiments.

---

# 16. Current Status

The experiment remains active.

Additional field samples may be collected using the physical kit and added as new sequences.

The record should continue to preserve:

\[
\boxed{
\text{artifact}
+
\text{sequence}
+
\text{provenance}
}
\]

while keeping interpretation downstream.

The experiment is not yet attempting to explain what the collected sequence means.

It is first testing whether the sequence can survive long enough for someone else to discover what it might mean.s