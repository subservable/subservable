import type { Provenance } from "./provenance.js";
import { deepFreeze } from "../../core/src/index.js";

export interface CreateProvenanceOptions {
  readonly inputRefs: readonly string[];
  readonly procedureId: string;
  readonly outputRef: string;
  readonly parentRefs?: readonly string[];
}

export function createProvenance(options: CreateProvenanceOptions): Provenance {
  return deepFreeze({
    id: "", // temporary until hashing is wired back in
    inputRefs: [...options.inputRefs],
    procedureId: options.procedureId,
    outputRef: options.outputRef,
    parentRefs: [...(options.parentRefs ?? [])],
  });
}
