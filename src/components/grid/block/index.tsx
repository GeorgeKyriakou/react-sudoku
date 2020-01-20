import React, { Dispatch } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { select } from "store/actions";
interface Props {
  colIndex: number;
  rowIndex: number;
  value: number;
  isSelected: boolean;
}

export const Block: React.FC<Props> = ({
  colIndex,
  rowIndex,
  value,
  isSelected
}) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const handleOnClick = (rowIndex: number, colIndex: number): void => {
    if (!isSelected) {
      dispatch(select([rowIndex, colIndex]));
    }
  };

  return (
    <>
      <Container
        active={isSelected}
        data-cy={`block-${rowIndex}${colIndex}`}
        onClick={() => handleOnClick(rowIndex, colIndex)}
      >
        {!!value && value}
      </Container>
    </>
  );
};
