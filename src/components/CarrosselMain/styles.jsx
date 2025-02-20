import styled from "styled-components"

export const CarrosselContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 5px;
  position: relative;

  .swiper-backface-hidden .swiper-slide {
    margin-right: 0 !important;
  }

  .swiper-thumbs .swiper-wrapper .swiper-slide {
    width: 25% !important;
    padding: 10px 3px 0 !important;
  }

  /* @media screen and (min-width: 1280px) {
    margin-top: -135px;
  } */
`

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
  max-height: 360px;
  object-fit: contain;
  cursor: pointer;
`

export const VideoMain = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  object-fit: contain;
  cursor: pointer;

  @media screen and (max-width: 390px) {
    height: 338px;
  }
  
  @media screen and (max-width: 360px) {
    position: initial;
    height: 330px;
  }
  @media screen and (max-width: 350px) {
    height: 320px;
  }
  @media screen and (max-width: 340px) {
    height: 310px;
  }
  @media screen and (max-width: 330px) {
    height: 300px
  }
  @media screen and (max-width: 320px) {
    height: 290px;
  }
`

export const ThumbsContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 90px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const ImageThumbs = styled.img`
  width: 100%;
  height: auto;
  max-height: 90px;
  /* border: 1px solid #c4c4c4; */
  border-radius: 6px;
  object-fit: contain;
  cursor: pointer;
`

export const VideoThumbs = styled.img`
  width: 100%;
  height: auto;
  max-height: 90px;
  /* border: 1px solid #c4c4c4; */
  border-radius: 6px;
  object-fit: contain;
  cursor: pointer;
`
