import {
  CanonicalJsonSerializer,
  SHA256HashProvider,
} from "../../core/src/index.js";

export interface Artifact<R = unknown, U = unknown> {
  readonly id: string;

  readonly representation: R;

  readonly uncertainty: U;
}

const serializer = new CanonicalJsonSerializer();

const hasher = new SHA256HashProvider();

export function createArtifact<R, U>(input: {
  representation: R;

  uncertainty: U;
}): Artifact<R, U> {
  const bytes = serializer.serialize(input);

  const id = hasher.hash(bytes);

  return Object.freeze({
    id,

    representation: Object.freeze(input.representation),

    uncertainty: Object.freeze(input.uncertainty),
  });
}
