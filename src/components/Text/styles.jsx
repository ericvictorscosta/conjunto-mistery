import styled, { css } from "styled-components"

export const TextItem = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
  color: #333333;
  text-align: center;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      font-weight: 700;
    `}

  @media screen and (max-width: 365px) {
    font-size: 14px;
  }
`