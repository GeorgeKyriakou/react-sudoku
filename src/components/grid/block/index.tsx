import React from "react";
import { Container } from "./styles";
interface Props {
  colIndex: number;
  rowIndex: number;
}

export const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  return <Container data-cy={`block-${rowIndex}${colIndex}`}></Container>;
};
