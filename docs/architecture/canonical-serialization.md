# canonical-serialization

## Purpose

Defines the canonical byte representation of immutable values.
All hashing, identity, provenance and reproducibility MUST operate on this representation.

## Requirements

### Deterministic

Equivalent values MUST serialize identically.

```
serialize(A) == serialize(B)

iff

A ≡ B
```

---

### Canonical

Exactly one valid serialization exists.
There are no equivalent encodings.

---

### Stable

The same value MUST serialize identically

- tomorrow
- next year
- another machine
- another architecture

---

### Versioned

The serialization algorithm itself is versioned.
Changing serialization creates a new specification version.

---

### Encoding

UTF-8.
Only UTF-8.
No BOM.

---

### Objects

Objects serialize keys
lexicographically
using Unicode code point ordering.
Never insertion order.

---

### Arrays

Arrays preserve order.
Array order is semantic.

---

### Numbers

This deserves careful thought.
I actually would not define IEEE formatting here yet.
Instead
PD-012

Numeric Canonicalization
because this rabbit hole gets surprisingly deep.
Examples
-0

0

0.0

1e2

100

NaN

Infinity
All need normative behavior.

---

### Strings

Unicode NFC normalization.
UTF-8 encoding.

---

### Booleans

Exactly

```
true

false
```

---

### Null

Exactly

```
null
```

---

### Hash Input

```
canonical bytes

↓

SHA-256

↓

hex
```

---


### Unsupported

undecided on all these but a list of examples.
think if the fundamental atom is something like a byte and we care only about having the bytes and putting any humpty back to dumpty who gives a who knows where all the pieces are and whats the order. Unsupported is part of the problem to solve - we need to be able to define a gapping maw that we can throw retrievable needles into, so unsupported anything feels like a bug. 

Which i think maybe the binary punt can explain :-)

Functions
Symbols
DOM objects
WeakMaps
WeakSets
Generators
Promises
Dates? (decision)
RegExp? (decision)
Class instances? (decision)

---

### Binary

Binary values
base64url
without padding
or
raw bytes

We need one decision. Wrong.

We need a reason to choose. raw bytes seem most flexible bitwise able and ultimately in the end base64able. 
Is our constitution not making decisions like this a "no brainer"?
We have brains we want to use for cool shit, removing fricition with math.
Make math great again, and save reason. 

### Reconstruction

```
deserialize

↓

canonicalize

↓

serialize

↓

hash
```

Hash must match.
Otherwise

```
ReconstructionFailure
```

---

### Design Principle

Identity is derived from canonical representation, never from implementation.
