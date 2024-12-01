import { LocationId } from "./types.ts";

/**
@returns [leftList, rightList]
*/
export function processInput(input: string): [LocationId[], LocationId[]] {
  const leftList: LocationId[] = [];
  const rightList: LocationId[] = [];

  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [left, right] = line.split("   ");

    const idLeft = parseInt(left);
    const idRight = parseInt(right);

    if (isNaN(idLeft) || isNaN(idRight)) {
      continue;
    }

    leftList.push(idLeft);
    rightList.push(idRight);
  }

  return [leftList, rightList];
}

export function sortAsc(list: LocationId[]): LocationId[] {
  const sorted = list.toSorted((a, b) => a - b);
  return sorted;
}
