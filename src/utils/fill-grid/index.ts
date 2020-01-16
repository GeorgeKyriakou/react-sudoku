import { GRID, NUMBERS, SQAURE } from "typings";

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

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export default fillGrid;

function isInRow(grid: any, row: any, value: NUMBERS): boolean {
  return grid[row].includes(value);
}

function isInCol(grid: any, col: any, value: NUMBERS): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

function isInBox(square: SQAURE, value: NUMBERS): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

function square3x3(grid: any, row: number, col: number): SQAURE {
  let rowStartIndex = 0;
  let colStartIndex = 0;
  if (row < 3) {
    if (col >= 3) {
      colStartIndex = col < 6 ? 3 : 6;
    }
  }
  if (row >= 3 && row < 6) {
    rowStartIndex = 3;
    if (col > 2) {
      colStartIndex = col < 6 ? 3 : 6;
    }
  } else if (row >= 6) {
    rowStartIndex = 6;
    if (col > 2) {
      colStartIndex = col < 6 ? 3 : 6;
    }
  }

  let workingSquare: number[][] = [];
  for (let i = rowStartIndex; i <= rowStartIndex + 2; i++) {
    let workingSquareRow: number[] = [];
    for (let j = colStartIndex; j <= colStartIndex + 2; j++) {
      workingSquareRow.push(grid[i][j]);
    }
    workingSquare.push(workingSquareRow);
  }
  return workingSquare as SQAURE;
}

export function isGridComplete(grid: GRID): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return false;
    }
  }
  return true;
}
