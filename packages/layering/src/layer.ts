export interface Layer {
  readonly id: string;
  readonly parentRefs: readonly string[];
  readonly observationRef: string;
  readonly createdAt: string;
}
