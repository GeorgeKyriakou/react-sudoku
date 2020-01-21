import { Action, AnyAction } from "redux";

import * as types from "./types";
import { SELECTED_BLOCK, NUMBERS } from "typings";

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const select = (blockIndexes: SELECTED_BLOCK): AnyAction => ({
  blockIndexes,
  type: types.SELECT_BLOCK
});

export const fillBlock = (
  value: NUMBERS,
  blockIndexes: SELECTED_BLOCK
): AnyAction => ({
  blockIndexes,
  value,
  type: types.FILL_BLOCK
});

export const clearBlock = (blockIndexes: SELECTED_BLOCK): AnyAction => ({
  blockIndexes,
  type: types.CLEAR_BLOCK
});
