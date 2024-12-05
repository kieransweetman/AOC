import { countSafeReports, processInput } from "./lib.ts";
import { Report } from "./types.ts";

const inputText = await Deno.readTextFile("day2/input.txt");

const reports: Report[] = processInput(inputText);

let sumOfValidReports = 0;

console.log(countSafeReports(inputText));
