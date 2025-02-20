import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
  background: #000000;
  border: none;
  
  height: 55px;
  width: 100%;
  max-width: 330px;
  margin: 15px auto;
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

    @media screen and (max-width: 340px) {
      font-size: 1rem;
      font-weight: 600;
      padding-right: 11%;
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
`


export const CtnModal = styled.div`
  
`
export const ForaModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  visibility: visible;
  opacity: 0.3;
  z-index: 10;
`
export const DentroModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;

  background-color: #FFF;
  z-index: 20;
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(0,0,0,.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 20px;
  min-height: 64px;
  
  .title-modal {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 21px;
    font-weight: 700;
    gap: 0.7em;
  }

  .close-modal {
    align-items: center;
    background-color: rgba(0,0,0,.05);
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    transition: background-color .2s;
    width: 30px;
  }
`

export const CronometroModal = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #ffe400;
  color: #000000;
  border-bottom: 1px solid #c5e6fd;
  border-top: 1px solid #c5e6fd;
  font-size: 15px;
  line-height: 20px;



`

export const ContentModal = styled.div`
  overflow: auto; 
  height: calc(100vh - 195px);

  .lineBlue {
    padding: 20px;
    padding-bottom: 0;
  }

  .lineBlue p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
  .line {
    background-color: rgb(147, 211, 255);
    border-radius: 16px;
    height: 10px;
    margin-top: 6px;
    overflow: hidden;
    width: 100%;
  }

  .cardProduct {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  
  .cardProduct img {
    width: 75px;
    height: 75px;
  }
  
  .contentName {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    gap: 5px;
  }
  .contentName .nameOfProduct {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: start;
  }

  .contentPrice {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
  }
  
  .contentPrice .cortPrice {
    font-family: "Montserrat", sans-serif;
    font-size: 14.5px;
    color: #000000;
    opacity: 0.4;
    text-decoration: line-through;
  }
  
  .contentPrice .price {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: #000000;
  }

  .ctn_images_01, .ctn_images_02 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 10px 10px 25px;
  }
  
  .ctn_images_01 > .movie, 
  .ctn_images_02 > .movie {
    max-width: 100%;
  }

  .movie video {
    width: 100%;
    padding: 10px;
  }

  .movie > img {
    width: 100%;
    height: auto;
  }

  .div-rose  {
    display: flex;
    gap: 7px;
    margin-top: 10px;
  }
  .div-rose img {
    width: 18px;
    height: 24.61px;
  }

  @media screen and (max-width: 350px) {
    height: calc(100vh - 190px);
  }
`

export const FooterModal = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #f6f6f7;
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 23px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  .parcel-span {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-align: center;

    @media screen and (max-width: 350px) {
      font-size: 13px;
    }
    
    @media screen and (max-width: 330px) {
      font-size: 12px;
    }
  }
`