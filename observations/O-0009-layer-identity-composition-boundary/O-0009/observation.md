# Observation O-0009

## Statement

Equivalent layer construction currently produces different layer identities.

The existing createLayer procedure accepts identity as an input value.

A test expecting equivalent layer inputs to produce equivalent identities failed.

The failure was:

Expected:
same identity

Observed:
different identity values.

## Context

This observation emerged while implementing O-0007 preserved-source branching.

The first implementation target was immutable layer creation and preservation of ancestry.

During testing, the identity behavior of equivalent layers was examined.