import { GRID } from "../../typings";

import { default as global } from "../globals";
import solveGrid from "utils/solve-grid/solveGrid";

/**
 * Remove values from given solved grid to create the Sudoku Puzzle
 * @param grid 9x9 sudoku grid
 * @param difficulty number of attempts it takes the fillGrid function to solve given puzzle. Higher means harder
 */

export function removeNumbers(grid: GRID, difficulty: number = 5): GRID {
  while (difficulty > 0) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);

    while (grid[row][col] === 0) {
      row = Math.floor(Math.random() * 9);
      col = Math.floor(Math.random() * 9);
    }
    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = (grid as Array<GRID>).map(gridRow =>
      gridRow.slice()
    ) as GRID;

    global.counter = 0;
    solveGrid(gridCopy);
    console.log(global.counter);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      difficulty = difficulty - 1;
    }
  }
  return grid;
}
