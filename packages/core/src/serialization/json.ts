import { Serializer } from "./canonical.js";

export class JsonSerializer<T> implements Serializer<T> {
  serialize(value: T): Uint8Array {
    const json = JSON.stringify(value);

    return new TextEncoder().encode(json);
  }
}
