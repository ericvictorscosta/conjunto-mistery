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
  font-family: 'Quicksand', sans-serif;
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

export const OfertaRelampago = styled.div`
  width: 100%;
  background: #ee4d2d;
  color: #fff;
  padding: 0.375rem 0.75rem;
  display: flex;
  justify-content: space-between;
`

export const DivLeftContent = styled.div`
  display: flex;
  flex-direction: column;

  .price-show {
    display: flex;
    align-items: center;
    height: 1.5rem;
    margin-top: 0.3125rem;
  }

  .price-before {
    font-size: 12px;
    color: blue;
  } 
`

export const BannerImage = styled.div`
  width: 5.3125rem;
  height: 1rem;
  margin-right: 0.5rem;
  background-repeat: no-repeat;

  width: 8.875rem;
  background-image: url('https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/af4872df837c9c8bb3b3fa28e970c08c.png');
  background-size: 100% 100%;
`

export const DivRightContent = styled.div`
  display: flex;
  flex-direction: column;
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
  /* background: linear-gradient(to right, rgba(242, 189, 155, 1) 0%, 16.983372921615203%, rgba(238, 185, 151, 1) 33.966745843230406%, 66.9833729216152%, rgba(147, 7, 6, 1) 100%); ; */
  
  /* background: linear-gradient(to right, rgba(217, 205, 181, 1) 29.69121140142518%, 54.51306413301663%, rgba(182, 118, 81, 1) 79.33491686460808%, 89.66745843230404%, rgba(122, 22, 40, 1) 100%);; */
  
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; */

  color: rgb(60, 167, 69);
`

export const TextPay = styled.p`
  font-size: 14.5px;
  text-align: center;
  text-decoration: underline;
  color: #444444;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    color: #60a741;
  }
`

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 10px;
  background-color: #ffffff;
`

export const ModalTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: #212121;

  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`

export const ModalSubtitle = styled.p`
  font-size: 16.5px;
  font-weight: 700;
  color: #212121;
`

export const ContainerPay = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 0.313rem;
  cursor: pointer;
`

export const RowModalLight = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`
export const RowModalDark = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const TextModal = styled.p`
  font-size: 0.875rem;
  color: #212121;
`

export const TextModalRight = styled.p`
  font-size: 0.875rem;
  color: #212121;
  text-align: right;
`
export const TextModalLeft = styled.p`
  font-size: 0.875rem;
  color: #212121;
  text-align: left;
`

export const TextCards = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #212121;
`

export const Cards = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`
export const ImageCard = styled.img`
  height: 25px;
`

export const ButtonClose = styled.button`
  margin-top: 30px;
  padding: 13px 20px;
  background-color: #eeeeee;
  color: #212121;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`
export const ButtonGreen = styled.button`
  margin-top: 15px;
  padding: 7px 14px;
  background-color: rgba(60, 167, 69, 0.1);
  color: #3ca745;

  border: none;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  transition: all 0.5s ease-out;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  &:hover {
    opacity: 0.7;
  }
`
export const RowBnt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px 0;

  @media screen and (max-width: 490px) {
    gap: 0;
  }
`

export const InfoCreditCard = styled.div``

export const InfoPix = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
