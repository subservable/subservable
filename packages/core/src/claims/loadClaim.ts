export interface ClaimProjection {
  id: string;
  claim: string;
  supportingAssets: string;
  discoveryProcess: string;
  witnesses: string;
  status: string;
}

import { readFile } from "node:fs/promises";
import { join } from "node:path";

const CLAIM_FILES = [
  "claim.md",
  "supporting-assets.md",
  "discovery-process.md",
  "witnesses.md",
  "status.md",
] as const;

export interface LoadedClaim {
  id: string;
  files: Record<(typeof CLAIM_FILES)[number], string>;
}

export async function loadClaim(
  claimPath: string,
  id = "P-0000",
): Promise<LoadedClaim> {
  const files = {} as LoadedClaim["files"];

  for (const file of CLAIM_FILES) {
    files[file] = await readFile(join(claimPath, file), "utf8");
  }

  return {
    id,
    files,
  };
}
