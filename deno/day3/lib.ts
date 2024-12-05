export function getMuls(line: string): number {
  // Regular expressions to match valid mul(X,Y) and control instructions
  const mulRegex = /mul\((\d+),(\d+)\)/g;
  const controlRegex = /do\(\)|don't\(\)/g;

  let sum = 0;
  let mulEnabled = true;
  let match;

  // Combine both regex patterns to scan the input in a single pass
  const combinedRegex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;

  // Iterate over all matches
  while ((match = combinedRegex.exec(line)) !== null) {
    if (match[ 0 ] === "do()") {
      mulEnabled = true;
    } else if (match[ 0 ] === "don't()") {
      mulEnabled = false;
    } else if (mulEnabled && match[ 1 ] && match[ 2 ]) {
      const x = parseInt(match[ 1 ], 10);
      const y = parseInt(match[ 2 ], 10);
      sum += x * y;
    }
  }

  return sum;
}

