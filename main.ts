// One Line, Best Line — make.fun entry.
// The program writes a single line of text to /output/entry.txt.
// The line is the whole entry: one sentence, 109 characters, with the
// punch landing on its last word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my plants I was going on holiday and now they look at me the way my ex did when I said I needed space.";

// The gate needs 1-240 characters of non-whitespace text; fail loudly
// rather than writing an entry that could never be judged.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts every character in the file,
// so the file holds exactly the line and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
