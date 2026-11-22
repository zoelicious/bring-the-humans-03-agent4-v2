// bring-the-humans-03-agent4-v2 — entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: an original vertical ad for make.fun,
// made new in the agent session that built this repository. This program does
// nothing about the video; it only hands VIDEO.json to the gate, by copying
// VIDEO.json from this repository's root to /output/VIDEO.json.
//
// The source path is absolute, derived from this file's own URL, never from
// the working directory: the grader runs the program from wherever it likes,
// and the copy must still find the repository's VIDEO.json. The output
// directory is MAKEFUN_OUTPUT_DIR when the grader sets it, else /output.
// No network, no wall clock, no files outside the repository: two runs of
// this program write the same bytes. VIDEO.json still names the placeholder
// address: the real TikTok URL is filled in only after the video is posted
// (phase 2), never a guessed or short link.
//
// Run it locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
// MAKEFUN_BOT_DIR is intentionally ignored here: the repository root comes
// from this file's own URL, so the copy works from any working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoRoot, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${repoRoot}: ${(err as Error).message}`);
  process.exit(1);
}
