import { deepFreeze } from "./../../core/src/deep-freeze.js";
import type { Layer } from "./layer.js";

export interface CreateLayerOptions {
  id: string;
  parentRefs: readonly string[];
  observationRef: string;
  createdAt: string;
}

export function createLayer({
  id,
  parentRefs,
  observationRef,
  createdAt,
}: CreateLayerOptions): Layer {
  return deepFreeze({
    id,
    parentRefs: [...parentRefs],
    observationRef,
    createdAt,
  });
}
