export function validateObservationValue(
  value: unknown,
  seen = new WeakSet<object>(),
): void {
  if (
    value === undefined ||
    typeof value === "function" ||
    typeof value === "symbol"
  ) {
    throw new Error("Unsupported observation value");
  }

  if (value !== null && typeof value === "object") {
    if (seen.has(value)) {
      throw new Error("Cyclic observation value");
    }

    seen.add(value);

    if (Array.isArray(value)) {
      for (const item of value) {
        validateObservationValue(item, seen);
      }
    } else {
      for (const item of Object.values(value)) {
        validateObservationValue(item, seen);
      }
    }
  }
}
