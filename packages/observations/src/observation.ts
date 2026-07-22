import {
  SHA256HashProvider,
  CanonicalJsonSerializer,
} from "../../core/src/index.js";
import { validateObservationValue } from "./validation/validate.js";

export interface Observation<T = unknown> {
  readonly id: string;
  readonly payload: T;
}

const serializer = new CanonicalJsonSerializer();
const hasher = new SHA256HashProvider();

export function createObservation<T>(payload: T): Observation<T> {
  validateObservationValue(payload);
  const bytes = serializer.serialize(payload);
  const id = hasher.hash(bytes);

  return Object.freeze({
    id,
    payload: Object.freeze(payload),
  });
}
