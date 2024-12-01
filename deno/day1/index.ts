import { processInput, sortAsc } from "./lib.ts";

const pathString = Deno.cwd() + "/day1/input.txt";

const inputText = await Deno.readTextFile(pathString);

const [leftList, rightList] = processInput(inputText);

const sortedLeft = sortAsc(leftList);
const sortedRight = sortAsc(rightList);

if (sortedLeft.length != sortedRight.length) {
  throw new Error("lists are not the same length");
}

let sumDiff = 0;
const mutatedLeftList = [];
let similarityScore = 0;

console.time("sum/occ");
for (let i = 0; i < sortedLeft.length; i++) {
  sumDiff += Math.abs(sortedLeft[i] - sortedRight[i]);

  const occuranceCount = sortedRight.filter((n) => n == sortedLeft[i]).length;
  mutatedLeftList.push(sortedLeft[i] * occuranceCount);
}
similarityScore = mutatedLeftList.filter((n) => n != 0).reduce(
  (acc, curr) => acc + curr,
  0,
);
console.timeEnd("sum/occ");

console.log(`Day 1 Part 1 answer: ${sumDiff}`);

console.log(`Day 1 Part 2 answer: ${similarityScore}`);
