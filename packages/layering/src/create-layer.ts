import {
  CanonicalJsonSerializer,
  SHA256HashProvider,
} from "../../core/src/index.js";

import type { Layer } from "./layer.js";
import { deepFreeze } from "./../../core/src/deep-freeze.js";

export interface CreateLayerOptions {
  parentRefs: readonly string[];
  observationRef: string;
  createdAt: string;
}

export function createLayer({
  parentRefs,
  observationRef,
  createdAt,
}: CreateLayerOptions): Layer {
  const identity = {
    parentRefs,
    observationRef,
  };

  const serializer = new CanonicalJsonSerializer();
  const hasher = new SHA256HashProvider();
  const bytes = serializer.serialize(identity);
  const id = hasher.hash(bytes);

  return deepFreeze({
    id,
    parentRefs: [...parentRefs],
    observationRef,
    createdAt,
  });
}
