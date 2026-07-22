export type Identifier = string;

export function isIdentifier(value: unknown): value is Identifier {
  return typeof value === "string" && value.length > 0;
}
