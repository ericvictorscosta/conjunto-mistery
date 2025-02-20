import styled from "styled-components"

export const Container = styled.div`
`

export const CtnDuvidas = styled.div`
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  background: #ffffff;  

  border: 1px solid;
  border-radius: 20px;
  padding: 50px 1.5rem;

  .textRastreio {
    width: 45%;
    color: rgb(0, 0, 0);
    text-align: center;
    margin-right: 5%;
  }
  
  .textRastreio h1 {
    font-size: 26px;
    line-height: 33px;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: .5px;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  .textRastreio span {
    font-size: 15px;
    margin: 15% auto;
  }
  
  .textRastreio span a {
    text-decoration: none;
  }

  /* ================= */

  .inputRastreio {
    width: 50%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #f8f8f8;
    border: 1px solid;
    -webkit-box-shadow: 0 2px 17px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 17px #0000001f;
    padding: 76px 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 20px;

    img {
      position: absolute;
      left: -25px;
      bottom: -70px;
      max-width: 100px;
    }
  }
  .inputRastreio > span {
    font-size: 17px;
    margin-bottom: 15px;
  }
  
  .inputRastreio > .alignInput {
    display: flex;
    align-items: center;
  }
  
  .inputRastreio > .alignInput > input {
    width: 100%;
    height: 49px;
    padding: 0 15px;
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
  }
  .inputRastreio > .alignInput > button {
    margin: 0 !important;
    height: 49px;
    font-size: 15px;
    font-weight: 400;
    width: 100px;
    line-height: inherit;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 0;
    background: rgb(0 0 0);
    color: #FFF;
    border: 1px solid #cccccc;
    border-radius: 0 10px 10px 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .textRastreio {
      width: 100%;
      margin-right: 0%;
    }

    .inputRastreio {
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    .inputRastreio > .alignInput {
      flex-direction: column;
      gap: 1rem;
    }

    .inputRastreio > .alignInput > input {  
      border-radius: 4px;
    }
    .inputRastreio > .alignInput > button {
      border-radius: 10px;
    }
  }

`
