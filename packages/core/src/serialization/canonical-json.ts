export interface CanonicalSerializer<T> {
  serialize(value: T): Uint8Array;
}

function canonicalize(value: unknown): unknown {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }

  const object = value as Record<string, unknown>;

  return Object.keys(object)
    .sort()
    .reduce(
      (result, key) => {
        result[key] = canonicalize(object[key]);

        return result;
      },
      {} as Record<string, unknown>,
    );
}

export class CanonicalJsonSerializer implements CanonicalSerializer<unknown> {
  serialize(value: unknown): Uint8Array {
    const canonical = canonicalize(value);

    return new TextEncoder().encode(JSON.stringify(canonical));
  }
}
