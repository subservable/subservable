export interface HashProvider {
  hash(data: Uint8Array): string;
}

import { createHash } from "node:crypto";

export class SHA256HashProvider implements HashProvider {
  hash(data: Uint8Array): string {
    return createHash("sha256").update(data).digest("hex");
  }
}
