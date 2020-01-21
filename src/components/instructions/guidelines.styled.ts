import styled, { css } from "styled-components";

export const Rule = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 14px;
    font-weight: "bold";
  `}
`;

export const Instruction = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 14px;
    font-weight: "bold";
  `}
`;
