import { AnyAction } from "redux";
import { GRID } from "typings";
import * as types from "./types";
import fillGrid from "utils/fill-grid";

interface State {
  grid?: GRID;
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
      return {
        ...state,
        grid
      };
    default:
      return state;
  }
};

export default reducer;
