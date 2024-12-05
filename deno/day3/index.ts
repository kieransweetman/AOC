import { getMuls } from "./lib.ts";
import { } from "./types.ts";

const inputText = await Deno.readTextFile("day3/input.txt");

const sum = getMuls(inputText);

console.log(sum);

