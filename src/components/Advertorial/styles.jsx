import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  -webkit-box-flex: 0;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;

  @media screen and (max-width: 1024px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
  
  @media screen and (max-width: 550px) {
    gap: 15px;
  }
  
  @media screen and (max-width: 450px) {
    gap: 10px;
  }
`

export const Title = styled.h1`
    font-family: 'omega-regular', sans-serif;
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    color: #75bcc3;

    @media screen and (max-width: 576px) {
      font-size: 25px;
    }
`

export const Subtitle = styled.h4`
    font-family: 'omega-regular', sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    color: #75bcc3;

    @media screen and (max-width: 576px) {
      font-size: 16px;
    }
`

export const CtnSwiper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const CtnImage01 = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5%;
`

export const CtnImage02 = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5%;

  @media screen and (min-width: 768px) {
    margin-left: 1.5% ;
  }
`

export const ImageAdvertorial = styled.div`
  width: 47.5%;
  border: 1px solid #000;
  margin: 1.5% 0;

  @media screen and (min-width: 768px) {
    width: 97.5%;
  }

  .gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.gallery img {
  max-width: 100%;
  height: auto;
  margin: 5px;
  cursor: pointer;
}

`