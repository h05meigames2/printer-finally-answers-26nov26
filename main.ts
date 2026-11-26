import { mkdirSync, writeFileSync } from "node:fs";

// The Printer Finally Answers — one-line comeback from the office printer
// itself, to the human staring at it during a paper jam.
const ENTRY =
  "Sheet 47 of 48 is jammed in my throat. I printed the other 46 perfectly, so by my count this malfunction is 97.9% yours.";

// Validate before writing: exactly one line, 1–240 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1–240 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);
