import type {} from "./provenance.js";
import * from "../../core/src/index.js";
import { deepFreeze } from "@subservable/core";

export interface CreateProvenanceOptions {
  readonly inputRefs: readonly string[];
  readonly procedureId: string;
  readonly outputRef: string;
  readonly parentRefs?: readonly string[];
}

export function createProvenance(options: CreateProvenanceOptions): Provenance {
  return deepFreeze({
    id,
    inputRefs,
    procedureId,
    outputRef,
    parentRefs: parentRefs ?? [],
  });
}
