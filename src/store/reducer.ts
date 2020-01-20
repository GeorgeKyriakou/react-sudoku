import { AnyAction } from "redux";
import { GRID, SELECTED_BLOCK } from "typings";
import * as types from "./types";
import fillGrid from "utils/fill-grid";
import { removeNumbers } from "utils/remove-numbers/removeNumbers";

export interface State {
  grid?: GRID;
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
      const gridCopy = (grid as Array<GRID>).map(gridRow =>
        gridRow.slice()
      ) as GRID;
      const incompleteGrid = removeNumbers(gridCopy, 10);

      return {
        ...state,
        grid: incompleteGrid
      };

    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.blockIndexes
      };
    default:
      return state;
  }
};

export default reducer;
