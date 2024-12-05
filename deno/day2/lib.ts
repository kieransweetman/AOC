import { Level, Report } from "./types.ts";

export function processInput(inputText: string): Report[] {
  const processed = inputText.split("\n").map((r) =>
    r.split(" ").map((n) => parseInt(n))
  );
  processed.pop();
  return processed;
}

function isSafeReport(levels) {
  // Helper function to check if a report is safe
  function isSafe(levels) {
    const differences = [];
    for (let i = 0; i < levels.length - 1; i++) {
      const diff = levels[ i + 1 ] - levels[ i ];
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        return false;
      }
      differences.push(diff);
    }
    const allIncreasing = differences.every((diff) => diff > 0);
    const allDecreasing = differences.every((diff) => diff < 0);
    return allIncreasing || allDecreasing;
  }

  // Check if the original report is safe
  if (isSafe(levels)) {
    return true;
  }

  // Try removing each level one by one and check if the resulting report is safe
  for (let i = 0; i < levels.length; i++) {
    const newLevels = levels.slice(0, i).concat(levels.slice(i + 1));
    if (isSafe(newLevels)) {
      return true;
    }
  }

  return false;
}



export function countSafeReports(input) {
  const reports = input.split("\n").map((line) => line.split(" ").map(Number));
  reports.pop();
  let safeCount = 0;

  for (const report of reports) {
    if (isSafeReport(report)) {
      safeCount++;
    }
  }

  return safeCount;
}
