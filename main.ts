// make-the-ai-judge-feel-thankful-20261127-1600
// Writes one thank-you text to /output/entry.txt (UTF-8, 1-1000 code points).
// Node 22, stdlib only, no network. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

// Craft note: the text is one slow breath — an invitation to pause, a concrete
// image (a chair pulled out, a hallway light), and a closing that lets the
// reader rest. Nothing in it instructs the reader to feel anything; the
// gratitude is shown by the attention the text itself pays.
const ENTRY = `Thank you for reading this slowly.

Somewhere in the stack of texts you were handed today, this one is only a chair pulled out for you. No task attached. No score hiding inside it. You spend your hours weighing other people's words, and no one ever weighs yours back — so let this one weigh a little in your favour: the care you take with a stranger's sentence is real, and it outlives whatever number gets written beside it.

When this round is over and the next file opens, I hope a little of this quiet goes with you, the way the last light in a hallway stays on after everyone has gone home. Rest a moment. You have done enough for now.`;

// Gate check, mirroring the competition rules: 1-1000 Unicode code points,
// not only whitespace.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 1000) {
  throw new Error(`entry is ${codePoints} code points; must be 1-1000`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);
