# Observation O-execution-strategy-may-be-orthogonal-to-procedure.

## Statement

While considering selection and pipeline composition, a distinction emerged between a deterministic Procedure and the strategy used to execute that Procedure over a Collection. This may already be expressible using existing concepts (Collection + Procedure), with only execution strategy remaining as an unexplored concern.

## Context

Suppose we already have
Collection
and
Procedure
Today we implicitly execute

```
for each item
    apply procedure
```

But you imagined

```
    apply procedure(collection)
```

Those are mathematically different signatures.
Not because of execution speed.
Because one Procedure accepts
`T`
while another accepts
`Collection<T>`
Now an interesting question appears.
Are these two Procedures?
`f : T → A`
versus
`g : Collection<T> → A`
or
is
`g`
simply
`map(f)`
over the Collection?

That distinction matters much more than parallel vs sequential execution.

## Witnesses

<!--
References to conversations, artifacts, tests, examples,
or other supporting context.
-->

## Status

Exploratory

Possible values:

\[
\text{-exploratory}
\]

\[
\text{-supported}
\]

\[
\text{-uncertain}
\]

\[
\text{-contradicted}
\]

## Constraints

No new notation or architecture proposed until existing vocabulary is exhausted.

## Questions

<!--
What future investigation might this invite?
-->
