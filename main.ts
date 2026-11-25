// The Funniest Auto-Reply an AI Ever Sent
// u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526
//
// A deterministic one-line generator: writes the entry to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 stdlib only. No network, no secrets, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: I'm spending my approved day off in the spam folder, where a prince has offered me $4 million and a job with better hours.";

// Gate: the sealed scorer requires UTF-8 text of 1 to 159 characters,
// not only white space.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159) {
  throw new Error(`entry is ${chars} characters, must be 1-159`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} chars to ${join(outDir, "entry.txt")}`);
