import React from "react";
import { Row } from "./styles";
import { Block } from "./block";
import fillGrid from "utils/fill-grid";
import { GRID } from "typings";

interface Props {}
const sudoku: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

fillGrid(sudoku);

export const Grid: React.FC<Props> = () => {
  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        sudoku.map((gridRow, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              gridRow.map((value, colIndex) => (
                <Block
                  colIndex={colIndex}
                  rowIndex={rowIndex}
                  value={value}
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
