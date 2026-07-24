export function deepFreeze<T>(value: T): Readonly<T> {
  if (value === null || typeof value !== "object") {
    return value as Readonly<T>;
  }

  if (Object.isFrozen(value)) {
    return value as Readonly<T>;
  }

  Object.freeze(value);

  for (const key of Reflect.ownKeys(value)) {
    const child = (value as Record<PropertyKey, unknown>)[key];
    deepFreeze(child);
  }

  return value as Readonly<T>;
}
