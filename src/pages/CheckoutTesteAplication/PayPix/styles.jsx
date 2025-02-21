import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'omega-regular';, sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #202223;
    margin: 5px 0;

    @media screen and (max-width: 490px) {
      font-size: 1rem;
    }
  }
`

export const DivPedido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #f1f1f1;
`

export const DivIcon = styled.div`
  width: 100%;
  max-width: 25px;
  height: 25px;

  @media screen and (max-width: 490px) {
    max-width: 20px;
    height: 20px;
  }
`

export const TextPedido = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #202223;
  text-align: center;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const ImageLoja = styled.img`
  width: 213px;
  height: 71px;

  @media screen and (max-width: 490px) {
    width: 185px;
    height: 61.663px;
  }
`

export const DivCronometro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 0 25px 0;
  border-bottom: 1px solid #f1f1f1;
`

export const CronometroStyle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #0fa2b7;

  @media screen and (max-width: 490px) {
    font-size: 2.5rem;
  }
`

export const WrapperInformations = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

export const DivQrcode = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
  -moz-box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 20px;
`

export const DivCopy = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding: 10px;
`

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: #202223;
  margin: 15px 5px;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const Text = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  color: #333333;

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
  }
`

export const ContainerQrcode = styled.div`
  width: 100%;

  @media screen and (max-width: 490px) {
    display: none;
  }
`

export const DivCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CtnButtonCopiar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  .dont_copy {
    top: 0;
    position: absolute;
    width: 100%;
    height: 40px;
    display: block;
    border: 1px solid transparent;
    padding: 0px 15px;
    font-size: 16px;
    color: transparent !important;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: transparent;
  }

  input {
    width: 100%;
    height: 40px;
    display: block;
    border: 1px solid #2587ff;
    padding: 0px 15px;
    margin-top: 1.5rem;
    font-size: 16px;
    color: #2587ff !important;
    font-weight: bold;
    border-radius: 8px;
  }
`

export const ButtonCopy = styled.button`
  background-color: #2587ff;
  border: 0px;
  width: 100%;
  max-width: 170px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 700;
  transition: all 0.4s ease-in-out;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 490px) {
    font-size: 0.875rem;
    max-width: 140px;
  }
`
