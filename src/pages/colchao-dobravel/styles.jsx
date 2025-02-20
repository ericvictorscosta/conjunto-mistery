import styled from "styled-components"

export const Container = styled.div`
  .span_Initial {
    font-size: 20px;

    @media screen and (max-width: 380px) {
      font-size: 16.5px;
    }
  }
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
    padding: 0.2rem 1.3rem 0.2rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
  }

  option {
    text-align: start;
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
`

export const Observacao = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-style: italic;
  padding: 15px;
  color: #333333;
`
