import React from "react";
import { Container } from "./styles";
interface Props {
  colIndex: number;
  rowIndex: number;
  value: number;
}

export const Block: React.FC<Props> = ({ colIndex, rowIndex, value }) => {
  return (
    <Container data-cy={`block-${rowIndex}${colIndex}`}>{value}</Container>
  );
};
