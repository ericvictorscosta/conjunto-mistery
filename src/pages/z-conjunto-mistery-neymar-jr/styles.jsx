import styled from "styled-components"

export const Container = styled.div`
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 15px;
  padding-top: 10px;

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }

  .iframe {
    position: relative;
    width: 100%;
    height: 100vh; /* 100% da altura da tela */
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Garante que o vídeo preencha a tela sem cortes */
    }
  }
`

export const PriceCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 10px;
`

export const ButtonCtn = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: start;

  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  select {
    width: 80%;
    padding: 0.2rem 1.30rem 0.2rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
  }
  
  option {
    text-align: start;
  }
`

export const ElementDivision = styled.img`
  width: 100%;
  height: 100px;
  transform: rotate(180deg);

  @media screen and (max-width: 479px) {
    object-fit: content;
    height: 30px;
  }
`

export const ElementDivisionTwo = styled.img`
  width: 100%;
  height: 120px;

  @media screen and (max-width: 479px) {
    object-fit: content;
    height: 60px;
  }
`

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

  .text_space {
    padding: 0 20px;

    @media screen and (max-width: 390px) {
      padding: 0 10px;
    }
  }
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Observacao = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  padding: 15px;
  color: #333333;
`

export const OfertaRelampago = styled.div`
  width: 100%;
  background: rgb(191 3 3);
  color: #fff;
  padding: 0.75rem 15px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 340px) {
    padding: 0.375rem 5px;
  }
`

export const DivLeftContent = styled.div`
  display: flex;
  flex-direction: column;

  .price-show {
    display: flex;
    align-items: center;
    height: 1.5rem;
    gap: 4px;
  }

  .price-now {
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    align-items: baseline;
    max-width: 8rem;
    display: flex;
    align-items: center;
    gap: 2.5px;

    .a-vista {
      font-size: 12px;
      font-weight: 200;

      @media screen and (max-width: 350px) {
        display: none;
      }
    }
  } 
  .price-before {
    font-weight: 300;
    font-size: .625rem;
    text-decoration: line-through;
    color: #fff;
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

  .vendas {
    text-align: end;
    font-weight: 400;
    font-size: .875rem;
    margin-bottom: 2px;
  }

  .timer-counter {
    display: flex;
    align-items: center;
  }
  
  .timer-counter span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
    font-size: .70rem;
    margin-right: 5px;
  }

  .ctn_ctn_timer {
    display: flex;
    align-items: center;
    gap: 3.5px;
  }
  
  .ctn_ctn_timer .hora,
  .ctn_ctn_timer .minuto,
  .ctn_ctn_timer .segundo {
    border: 1px solid #FFF;
    padding: 1px 2px;
    font-size: 12px;
  }
`
