export function markFound(coords: number[][], grid: string[][]) {
    coords.forEach(([ y, x ]) => {
        try {
            const c = grid[ y ][ x ];
            if (c == undefined) return;
            grid[ y ][ x ] = c.toUpperCase();

        } catch (e) {
            // console.log({ e, x, y })
            return;
        }
    });

    return grid;
}

/**
 * 
 * @param y row index
 * @param x col index
 * @param dy row offset
 * @param dx col offset
 * @param i offset multiplier
 * @returns [newY, newX]
 */
export function newCoordinates(y: number, x: number, dy: number, dx: number, i: number) {
    return [ y + dy * i, x + dx * i ];
}

export function constructGrid(grid: string[][], startingGrid: boolean = true) {

    if (startingGrid) {
        return grid.map(r => r.join('')).join('\n')
    } else {
        return grid.map((row) => {
            return row.map(c => c != c?.toUpperCase() ? '.' : c).join('');

        }).join('\n');
    }
}

export function extractInput(input: string) {
    return input.trim()
        .toLowerCase()
        .split('\n')
        .map((line) => line.split(''));
}

// row, col
export const directions = [
    [ 0, 1 ], // right
    [ 0, -1 ], // left
    [ 1, 0 ], // down
    [ -1, 0 ], // up
    [ 1, 1 ], // down right
    [ -1, -1 ], // up left
    [ 1, -1 ], // down left
    [ -1, 1 ], // up right
]

export const DIR_MAP = new Map([
    [ directions[ 0 ], 'right' ],
    [ directions[ 1 ], 'left' ],
    [ directions[ 2 ], 'down' ],
    [ directions[ 3 ], 'up' ],
    [ directions[ 4 ], 'down right' ],
    [ directions[ 5 ], 'up left' ],
    [ directions[ 6 ], 'down left' ],
    [ directions[ 7 ], 'up right' ],
])

