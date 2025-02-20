import styled from "styled-components"

export const CtnVideo = styled.div`
  .video-player { 
    width: 100%;
    height: auto;
    max-height: auto;
    object-fit: contain;
    cursor: pointer;

    @media screen and (min-width: 320px) {
      max-height: 288px;
    }
    @media screen and (min-width: 330px) {
      max-height: 298px;
    }
    @media screen and (min-width: 340px) {
      max-height: 308px;
    }
    @media screen and (min-width: 350px) {
      max-height: 318px;
    }
    @media screen and (min-width: 360px) {
      max-height: 328px;
    }
    @media screen and (min-width: 370px) {
      max-height: 338px;
    }
    @media screen and (min-width: 380px) {
      max-height: 348px;
    }
    @media screen and (min-width: 390px) {
      max-height: 358px;
    }
    @media screen and (min-width: 400px) {
      max-height: 368px;
    }
  }
`