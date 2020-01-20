import { GRID, NUMBERS } from "typings";
import {
  isInRow,
  isInCol,
  square3x3,
  isInBox,
  isGridComplete
} from "../helpers";
let numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all possible combinations of numbers till a solution is found
 * @param grid 9x9 sudoku grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      numbers = shuffleArray(numbers);
      for (let value of numbers) {
        if (!isInRow(grid, row, value) && !isInCol(grid, col, value)) {
          let square = square3x3(grid, row, col);
          if (!isInBox(square, value)) {
            grid[row][col] = value;
            if (isGridComplete(grid)) return true;
            else if (fillGrid(grid)) return true;
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

/**
 * Shuffle the contents of an array according to Fisher-Yates shuffle.
 * @param array an array of any elemets
 */

function shuffleArray(array: any) {
  let m = array.length,
    t,
    i;

  while (m) {
    // swapped elements will not be touched any longer (thus making the shuffling in place)
    i = Math.floor(Math.random() * m--);

    t = array[m]; //save previous value
    array[m] = array[i]; // swap it with another random element
    array[i] = t; // give that element the previous value
  }

  return array;
}

export default fillGrid;
