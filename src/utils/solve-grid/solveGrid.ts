import { GRID, NUMBERS } from "typings";
import {
  isInRow,
  isInCol,
  square3x3,
  isInBox,
  isGridComplete
} from "utils/helpers";
import { default as global } from "../globals";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow(grid, row, value) && !isInCol(grid, col, value)) {
          let box = square3x3(grid, row, col);
          if (!isInBox(box, value)) {
            grid[row][col] = value;
            if (isGridComplete(grid)) {
              global.counter++;
              break;
            } else if (solveGrid(grid)) return true;
          }
        }
      }
      // global.complete = false;
      break;
    }
  }
  grid[row][col] = 0;
}

/*

  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let n of numbers)
        if (!isInRow(grid, row, n)) {
          if (!isInCol(grid, col, n)) {
            const square = square3x3(grid, row, col);
            if (!isInBox(square, n)) {
              grid[row][col] = n;
              if (isGridComplete(grid)) {
                global.complete = true;
                break;
              } else {
                solveGrid(grid);
              }
            }
          }
        }
      return false;
    }
  }
  grid[row][col] = 0;
*/
