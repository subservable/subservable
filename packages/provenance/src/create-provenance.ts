import type { Provenance } from "./provenance.js";
import { deepFreeze } from "../../core/src/index.js";

export interface CreateProvenanceOptions {
  readonly inputRefs: readonly string[];
  readonly procedureId: string;
  readonly outputRef: string;
  readonly parentRefs?: readonly string[];
}

function validateProvenanceInput(options: CreateProvenanceOptions): void {
  if (!Array.isArray(options.inputRefs) || options.inputRefs.length === 0) {
    throw new Error("Provenance requires at least one input reference");
  }

  if (!options.procedureId) {
    throw new Error("Provenance requires a procedure id");
  }

  if (!options.outputRef) {
    throw new Error("Provenance requires an output reference");
  }

  try {
    JSON.stringify(options.inputRefs);
    JSON.stringify(options.parentRefs ?? []);
  } catch {
    throw new Error("Provenance input must not contain cycles");
  }
}

export function createProvenance(options: CreateProvenanceOptions): Provenance {
  validateProvenanceInput(options);

  return deepFreeze({
    id: "", // temporary until hashing is wired back in
    inputRefs: [...options.inputRefs],
    procedureId: options.procedureId,
    outputRef: options.outputRef,
    parentRefs: [...(options.parentRefs ?? [])],
  });
}
