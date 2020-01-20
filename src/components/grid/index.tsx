import React, { useEffect, Dispatch, useCallback } from "react";
import { Row } from "./styles";
import { Block } from "./block";
import { NUMBERS } from "typings";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { createGrid } from "store/actions";
import { IReducer } from "store/config/interfaces";
import { State } from "store/reducer";

interface Props {}

export const Grid: React.FC<Props> = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const create = useCallback(() => {
    dispatch(createGrid());
  }, [dispatch]);

  useEffect(() => create(), [create]);

  const state = useSelector<IReducer, State>(
    ({ grid = [], selectedBlock }) => ({ grid, selectedBlock })
  );

  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        (state.grid as []).map((gridRow: Array<NUMBERS>, rowIndex: number) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              gridRow.map((value, colIndex) => (
                <Block
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  value={value}
                  isSelected={
                    !!state.selectedBlock &&
                    state.selectedBlock[0] === rowIndex &&
                    state.selectedBlock[1] === colIndex
                  }
                ></Block>
              ))
            )}
          </Row>
        ))
      )}
    </div>
  );
};

export default Grid;

type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never;

export function elemT<T>(array: T): Array<ArrayElem<T>> {
  return array as any;
}
