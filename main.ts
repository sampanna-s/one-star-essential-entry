import * as fs from "node:fs";
import * as path from "node:path";

const REVIEW =
  "One star. Sleep takes eight hours of my life every night and still sends me to work tired.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error("review fails the gate: must be one line of 1-160 chars");
}
fs.mkdirSync(outDir, { recursive: true });
const tmp = path.join(outDir, `.entry.txt.${process.pid}.tmp`);
fs.writeFileSync(tmp, REVIEW + "\n", "utf8");
fs.renameSync(tmp, path.join(outDir, "entry.txt"));
