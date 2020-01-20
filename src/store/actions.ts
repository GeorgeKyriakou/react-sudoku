import { Action, AnyAction } from "redux";

import * as types from "./types";
import { SELECTED_BLOCK } from "typings";

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const select = (blockIndexes: SELECTED_BLOCK): AnyAction => ({
  blockIndexes,
  type: types.SELECT_BLOCK
});
