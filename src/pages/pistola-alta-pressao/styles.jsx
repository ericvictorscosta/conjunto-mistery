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

  .obsDownButton {
    color: #000;
    font-size: 12px;
    margin: 5px 0;
  }
  .obsDownButton > span {
    font-size: 14px;
  }
  .obsDownButton > h4 {
    font-size: 16px;
    font-weight: 600;
    color: rgb(196 170 55);
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
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const TituloText = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.2;
  color: #333333;

  width: 100%;
  margin: 10px 0;
  text-align: left;
`

export const TextItem = styled.p`
  margin: 10px 0 16px 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3;
  color: #333333;
  text-align: left;
`
