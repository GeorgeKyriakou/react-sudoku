import styled, { css } from "styled-components";
interface Props {
  active?: boolean;
  isUserInput: boolean;
}

export const Container = styled.div<Props>`
  ${({ active, isUserInput, theme }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${isUserInput ? "light" : "bold"};
    font-size: 20px;
    color: ${isUserInput ? "green" : "black"};
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: "";
      float: left;
    }

    &:hover {
      background-color: ${isUserInput
        ? theme.colors.lightblue
        : theme.colors.white};
    }
  `}
`;
