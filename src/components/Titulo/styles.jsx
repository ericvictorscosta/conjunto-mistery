import styled from "styled-components"

export const TituloText = styled.p`
  font-family: "Poppins",sans-serif;
  font-size: 22px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  color: #000;

  width: 100%;

  @media screen and (max-width: 380px) {
    font-size: 21px;
  }
  
  @media screen and (max-width: 360px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 350px) {
    font-size: 19px;
  }
  
  @media screen and (max-width: 335px) {
    font-size: 18px;
  }
`