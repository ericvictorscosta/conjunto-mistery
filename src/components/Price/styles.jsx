import styled from "styled-components"

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
`

export const Seamaster = styled.p`
  font-family: "Passions Conflict", cursive;
  font-size: 50px;
  font-weight: 200;
  line-height: 1.2;
  text-align: center;
  color: #212121;
`

export const TitleProduct = styled.h1`
  font-family: 'omega-regular';, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  color: #000;
  margin-bottom: 20px;

  @media screen and (max-width: 479px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: #444444;
  margin-top: 8px;
`
export const CutPrice = styled.p`
  font-size: 18px;
  text-align: center;
  color: #474444;
`

export const ParcelaPrice = styled.p`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: center;

  font-style: normal;
  color: rgb(60, 167, 69);

  /* background: linear-gradient(to right, rgba(242, 189, 155, 1) 0%, 16.983372921615203%, rgba(238, 185, 151, 1) 33.966745843230406%, 66.9833729216152%, rgba(147, 7, 6, 1) 100%); ; */
  
  /* background: linear-gradient(to right, rgba(217, 205, 181, 1) 29.69121140142518%, 54.51306413301663%, rgba(182, 118, 81, 1) 79.33491686460808%, 89.66745843230404%, rgba(122, 22, 40, 1) 100%);; */
  
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; */
`
