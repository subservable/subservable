export interface Provenance {
  readonly id: string;

  readonly inputRefs: readonly string[];

  readonly procedureId: string;

  readonly outputRef: string;

  readonly parentRefs: readonly string[];
}
