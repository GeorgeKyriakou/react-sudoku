import React, { Dispatch } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { select, fillBlock } from "store/actions";
import { SELECTED_BLOCK, NUMBERS } from "typings";
interface Props {
  colIndex: number;
  rowIndex: number;
  value: number;
  isSelected: boolean;
  isUserInput: boolean;
}

export const Block: React.FC<Props> = ({
  colIndex,
  rowIndex,
  value,
  isSelected,
  isUserInput
}) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const handleOnClick = (rowIndex: number, colIndex: number): void => {
    if (!isSelected) {
      dispatch(select([rowIndex, colIndex]));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key.charCodeAt(0) > 48 && e.key.charCodeAt(0) < 58) {
      const blockIndexes = [rowIndex, colIndex] as SELECTED_BLOCK;
      dispatch(fillBlock(+e.key as NUMBERS, blockIndexes));
    }
  };

  return (
    <>
      <Container
        tabIndex={0}
        onKeyUp={handleKeyPress}
        active={isSelected}
        isUserInput={isUserInput}
        data-cy={`block-${rowIndex}${colIndex}`}
        onClick={() => handleOnClick(rowIndex, colIndex)}
      >
        {!!value && value}
      </Container>
    </>
  );
};
