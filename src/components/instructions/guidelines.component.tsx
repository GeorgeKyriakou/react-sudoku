import React from "react";
import { Instruction, Rule } from "./guidelines.style";

interface Props {}

export const Guidelines: React.FC<Props> = () => {
  return (
    <>
      <h3>Rules</h3>
      <Rule> 1. The same number cannot exist twice in a row</Rule>
      <br />
      <Rule> 1. The same number cannot exist twice in a column</Rule>
      <br />
      <Rule> 1. The same number cannot exist twice in a 3 by 3 square</Rule>
      <br />
      <h3>Instructions</h3>
      <Instruction>Click on a square</Instruction>
      <br />
      <Instruction>Input a number from 1-9</Instruction>
      <br />
      <Instruction>Use Backspace to clear the selected square</Instruction>
      <br />
    </>
  );
};
