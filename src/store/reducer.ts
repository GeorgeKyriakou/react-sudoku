import { AnyAction } from "redux";
import { GRID, SELECTED_BLOCK } from "typings";
import * as types from "./types";
import fillGrid from "utils/fill-grid";
import { removeNumbers } from "utils/remove-numbers/removeNumbers";
import { arraysAreEqual } from "utils/helpers";

export interface State {
  grid?: GRID;
  checkGrid?: GRID;
  solvedGrid?: GRID;
  selectedBlock?: SELECTED_BLOCK;
}

const initialState: State = {};

const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
] as GRID;

const reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case types.CREATE_GRID:
      fillGrid(grid);
      const solvedGrid = (grid as Array<GRID>).map(gridRow =>
        gridRow.slice()
      ) as GRID;

      removeNumbers(grid, 1);
      const checkGrid = (grid as Array<GRID>).map(gridRow =>
        gridRow.slice()
      ) as GRID;

      return {
        ...state,
        solvedGrid,
        grid,
        checkGrid
      };

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.blockIndexes
      };

    case types.FILL_BLOCK: {
      const rowInd = action.blockIndexes[0];
      const colInd = action.blockIndexes[1];

      if (
        state.grid &&
        state.solvedGrid &&
        state.checkGrid &&
        state.checkGrid[rowInd][colInd] === 0
      ) {
        state.grid[rowInd][colInd] = action.value;
        if (arraysAreEqual(state.grid, state.solvedGrid)) {
          alert("Congratulations!!");
        }
        return { ...state, grid: [...state.grid] as GRID };
      }
      return state;
    }
    case types.CLEAR_BLOCK: {
      const rowInd = action.blockIndexes[0];
      const colInd = action.blockIndexes[1];

      if (
        state.grid &&
        state.solvedGrid &&
        state.checkGrid &&
        state.checkGrid[rowInd][colInd] === 0
      ) {
        state.grid[rowInd][colInd] = 0;
        return { ...state, grid: [...state.grid] as GRID };
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
