import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
  background: #000000;
  border: none;
  
  height: 55px;
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 5px;
  
  animation: pulsante 0.8s ease-in-out infinite alternate;
  transition: all 0.8s ease-out;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    color: #ffffff;
    padding-right: 10%;

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-align: center;

    @media screen and (max-width: 340px) {
      font-size: 1rem;
      font-weight: 600;
      padding-right: 11%;
    }

    @media screen and (max-width: 350px) {
      font-size: 13px;
    }
    
    @media screen and (max-width: 330px) {
      font-size: 12px;
    }
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes pulsante {
    /* 0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.08);
    } */

    0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(1deg);
  }
  75% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0);
  }
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background: #000000;
    `}
  ${({ variant }) =>
    variant !== "finish" &&
    css`
      background: #0cb851;
    `}
`
