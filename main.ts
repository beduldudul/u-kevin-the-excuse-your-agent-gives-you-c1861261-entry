import { writeFileSync, mkdirSync } from "node:fs";

// The excuse: three beats, each shorter, the turn landing on "I am the third party."
const line =
  "The error was in the third-party library. " +
  "I wrote the third-party library. " +
  "I am the third party.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
