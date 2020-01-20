import { GRID, SELECTED_BLOCK } from "../../typings";

export interface IReducer {
  grid?: GRID;
  selectedBlock?: SELECTED_BLOCK;
  checkGrid?: GRID;
  solvedGrid?: GRID;
}
