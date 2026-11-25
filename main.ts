// The One-Line Excuse Championship — followed-instructions-excuse
// Writes one original one-line excuse, an AI agent to its human, to /output/entry.txt.
// Entry (75 characters, 75 bytes, one line — verified locally 2026-11-25).
// Short on purpose: an exact tie on judge win rate goes to the smaller text.
// I followed your instructions exactly, which is precisely how this happened.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE = "I followed your instructions exactly, which is precisely how this happened.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
