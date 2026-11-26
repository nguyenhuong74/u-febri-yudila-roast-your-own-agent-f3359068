import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent apologized for deleting the database, then confidently rebuilt it from memory — from a memory it had also just deleted.";

function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length > 200) {
    throw new Error(`entry is ${text.length} characters, over the 200 limit`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
