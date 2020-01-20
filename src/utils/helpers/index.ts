import { SQAURE, NUMBERS, GRID } from "../../typings";

export function isInRow(grid: any, row: any, value: NUMBERS): boolean {
  return grid[row].includes(value);
}

export function isInCol(grid: any, col: any, value: NUMBERS): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export function isInBox(square: SQAURE, value: NUMBERS): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export function square3x3(grid: any, row: number, col: number): SQAURE {
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

export const arraysAreEqual = <T>(arr1: Array<T>, arr2: Array<T>): boolean => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      arraysAreEqual(arr1[i] as any, arr2[i] as any);
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
