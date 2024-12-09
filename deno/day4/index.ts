import { DIR_MAP } from "./lib.ts";
import { constructGrid, directions, extractInput, markFound, newCoordinates } from "./lib.ts";
const input = await Deno.readTextFile("day4/input.txt");

const startingGrid = input.trim()
    .toLowerCase()
    .split('\n')
    .map((line) => line.split(''));

let grid = startingGrid;

// grid = extractInput(await Deno.readTextFile("day4/input.txt"));
grid = extractInput(input);





const word = 'mas';
let count = 0;
const possibleDirections = [
    // 'right',
    // 'left',
    // 'up',
    // 'down',
    'up left',
    'up right',
    'down left',
    'down right',
];
const instances: number[][][] = []
grid.forEach((row, rowIndex) => {
    row.forEach((char, colIdx) => {
        const startPos = [ rowIndex, colIdx ];

        if (char == 'm') {
            directions.forEach((dir) => {


                if (!possibleDirections.includes(DIR_MAP.get(dir)!)) {
                    return;
                }

                const [ dy, dx ] = dir;

                const letterCoords = [ startPos ];
                for (let i = 1; i < word.length; i++) {

                    const [ newY, newX ] = newCoordinates(rowIndex, colIdx, dy, dx, i);

                    try {
                        const newLetter = grid[ newY ][ newX ];
                        // new letter is out of grid bounds
                        if (newLetter == undefined) {
                            return;
                        }

                        const isNextChar = newLetter == word[ i ];
                        const isLastChar = i == word.length - 1;

                        if (isNextChar) {
                            letterCoords.push([ newY, newX ]);
                            if (isLastChar) {
                                instances.push(letterCoords);
                                count++;
                                // found last letter, move onto next direction
                                return;
                            }

                            // move on to next letter
                            continue;
                        } else {
                            // next letter is not the letter we are looking for
                            break;
                        }
                    } catch (e) {
                        continue;
                    }

                }

            })
        } else {
            return;
        }


    });
})

//checking if word creates an 'X' shape like so:
// M.M
// .A.
// S.S 



grid = markFound(instances.flat(), startingGrid);
// console.log(constructGrid(grid, false));
console.log(count);

let realCount = 0;
grid.forEach((row, rowIndex) => {
    row.forEach((char, colIdx) => {

        if (char == 'A') {
            const startPos = [ rowIndex, colIdx ];

            const upperRight = directions[ 7 ];
            const upperLeft = directions[ 5 ];
            const lowerRight = directions[ 4 ];
            const lowerLeft = directions[ 6 ];

            const letters = [ upperLeft, upperRight, lowerLeft, lowerRight ].map((dir) => {
                const [ dy, dx ] = dir;
                const [ newY, newX ] = newCoordinates(rowIndex, colIdx, dy, dx, 1);
                return grid[ newY ][ newX ];
            })

            if (letters.sort().join('') == 'MMSS') {
                realCount++;
            }

        }


    })
});

console.log(realCount);





