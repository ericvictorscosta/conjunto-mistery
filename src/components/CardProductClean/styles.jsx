import styled from "styled-components"

export const Container = styled.div`
  width: 97%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  margin: 20px auto;
`
export const BodyCard = styled.div`
  width: 100%;
  border-radius: 4px;
  background: linear-gradient(114.04deg, #575757 -3.93%, #000000 149.27%);
  padding: 20px 10px 1px;
  position: relative;
`

export const ImgZone = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
    background-image: url('https://cdn.shopify.com/s/files/1/0648/5904/6103/files/c9471724c4d52d05cf781241e3c64ed2left.png?v=1686359221');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DescriptionZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 12px 0 25px;
  gap: 12px;

  h6 {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */


    color: #FFFFFF;
  }

  span {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 125.8%;
    /* or 15px */

    letter-spacing: 0.5px;
    color: #CECECE;
    text-align: start;
  }

  p {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    /* gold3 */

    background: linear-gradient(126.86deg, #EEDABC 9.99%, #987952 115.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const CtnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 80px;
  }

  h3 {
    width: 70%;

    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 1.5px;
    background: linear-gradient(126.86deg, #EEDABC 9.99%, #987952 115.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: start;
  }

  span {
    width: 30%;

    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 1px;

    color: #FFFFFF;
    text-align: end;
    padding-right: 5px;
  }
`

export const ButtonCtn = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 330px) {
    margin-bottom: 5px;
  }
`

export const PriceZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 3.5px;

  h5 {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;

    color: #FFFFFF;
  }

  .cort-price {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
    letter-spacing: .8px;
    color: gray;
    text-decoration: line-through;
  }

  .price-ctn {
    display: flex;
    align-items: center;
    gap: 5px;

    background: linear-gradient(126.86deg, #EEDABC 9.99%, #dbb485 115.22%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 19px;
    letter-spacing: .8px;
  }

  .price-real  {
    font-family: 'omega-regular';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 1px;
  }
`

export const ButtonCard = styled.a`
  background: linear-gradient(126.86deg, #EEDABC 9.99%, #987952 115.22%);
  border-radius: 2px;

  font-family: 'omega-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;

  color: #022F2C;

  border: 0.3px solid #022F2C;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  width: 100%;
  max-width: 153px;
  height: 52px;
  margin: 15px 15px 15px 0px;
  padding: 10px 20px;

  animation: pulsar 1.1s ease-in-out infinite alternate;
  transition: all 0.5s ease-out;
  text-decoration: none;


  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    /* font-size: 12px; */
    padding: 0 8px;
    height: 49px;
  }
  
  @media screen and (max-width: 350px) {
    max-width: 140px;
    margin-right: 10px;
  }
  
  @media screen and (max-width: 330px) {
    max-width: 137px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes pulsante {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.08);
    }
  }

  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const ButtonCardPreSell = styled.a`
  background: rgb(140, 5, 5);
  border-radius: 2px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;

  color: #FFF;
  width: 75%;

  border: 0.3px solid rgb(140, 5, 5);

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  height: 52px;
  margin: 25px 0;
  padding: 10px 20px;

  animation: pulsar 1.1s ease-in-out infinite alternate;
  transition: all 0.5s ease-out;
  text-decoration: none;


  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    /* font-size: 12px; */
    padding: 0 8px;
    height: 49px;
  }
  
  @media screen and (max-width: 350px) {
    max-width: 140px;
    margin-right: 10px;
  }
  
  @media screen and (max-width: 330px) {
    max-width: 137px;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @keyframes pulsante {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.08);
    }
  }

  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`
