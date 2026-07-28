# P-0022 — Convention-dependency asymmetry between symbolic encoding and physical decomposition

## Observations

- **O-22a**: DVD storage — information is realized in a physical medium (pit/land geometry) via a scheme that is manufactured and could, in principle, have been assigned differently (Red Book format).
- **O-22b**: Rainbow — information (wavelength composition of white light) is realized as spatial separation via refraction/dispersion, governed entirely by physical law (Snell's law, refractive index vs. wavelength). No assignment step exists.

## Canonical Grammar

Model an encoding scheme as a triple:

```
Scheme := (Σ, μ, ρ)
  Σ : alphabet — set of distinguishable states
  μ : Σ → PhysicalState     (realization map)
  ρ : PhysicalState → Σ     (reader / inverse map)
```

Define:

```
Arbitrary(μ) := true  iff  μ could be replaced by some μ' ≠ μ
                           over the same Σ and medium class,
                           without altering the medium's physics
```

**Claim P-0022**: For DVD, `Arbitrary(μ_dvd) = true`. For rainbow, `Arbitrary(μ_rainbow) = false` — μ is not a choice, it is Snell's law. Therefore the two schemes are **not isomorphic** as `(Σ, μ, ρ)` triples; they diverge specifically at μ's arbitrariness, not at Σ or ρ.

## Artifact

**Representation**: the two `(Σ, μ, ρ)` triples above, plus the predicate `Arbitrary(μ)`.

**Uncertainty**: this result is scoped strictly to structural equivalence of the `(Σ, μ, ρ)` triple as defined here. It does not address whether DVD and rainbow are isomorphic under a _looser_ equivalence (e.g. "both are linear decompositions of a source across an ordered domain") — that's a different, weaker claim this artifact doesn't test.

## Provenance

```json
{
  "output_ref": "P-0022",
  "procedure_id": "isomorphism-test-v1",
  "input_refs": ["O-22a", "O-22b"],
  "parent_ordering": "independent — no prior claim dependency",
  "uncertainty": "scoped to (Σ, μ, ρ) equivalence only"
}
```

## Projections

**Executable**

```ts
function isArbitrary(scheme: EncodingScheme): boolean {
  // true iff μ could, in principle, be reassigned
  // without changing the medium's physics
  return scheme.mu.isArbitrary;
}

isArbitrary(dvd); // true  — pit length is a manufacturing choice
isArbitrary(rainbow); // false — wavelength order is not a choice
```

**Structural**

```json
{
  "dvd": {
    "artifact": "bitstream",
    "provenance": {
      "procedure": "laser-read",
      "parent_refs": ["disc", "red-book-format-spec"],
      "uncertainty": "format-version dependent"
    }
  },
  "rainbow": {
    "artifact": "spectrum",
    "provenance": {
      "procedure": "refraction-observation",
      "parent_refs": ["white-light", "medium(prism|droplets)"],
      "uncertainty": "bounded by physical constants only"
    }
  }
}
```

**Locale**
A DVD's meaning depends on you also having the manufacturer's format spec. A rainbow's meaning depends on nothing but the light being there. The asymmetry isn't aesthetic — it's a difference in how many parent references the provenance chain needs before the artifact can be trusted.

## Discovery (flagged — not a system guarantee)

Working hypothesis, _not yet validated_: encodings that require an assigned convention layer are structurally costlier to reconstruct/trust than decompositions governed by physical law alone.

**Counterexamples to test before promoting this to validated**:

- Microphone/analog audio — physical transduction (diaphragm displacement ∝ pressure), but is the voltage-to-amplitude mapping itself a convention, or physically forced like refraction?
- Atomic spectral lines — quantum-mechanically fixed, likely `Arbitrary(μ) = false` like the rainbow; would strengthen the pattern if confirmed.
- Braille — artificial and tactile; almost certainly `Arbitrary(μ) = true` like DVD; would strengthen the pattern if confirmed.
- Any _physical_ medium where the realization map is still a human choice (e.g. Morse code over telegraph pulses) — would test whether "physical" and "non-arbitrary" are actually independent axes being conflated here.

Until at least one of these is run, P-0022 stands as a two-point observation, not a validated rule.
