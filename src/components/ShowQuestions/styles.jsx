import styled from "styled-components"

export const Title = styled.p`
  width: 80%;
  margin: 0 auto;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 27px;
  letter-spacing: 1.5px;
  background: #000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;

  @media screen and (max-width: 350px) {
    font-size: 18px;
    line-height: 1.2;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 10px;
`
export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: start;
    color: #000;
  }
`

export const Points = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    align-self: center;
    line-height: 12px;
    padding-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 8px;
    background: linear-gradient(126.86deg, rgb(238, 218, 188) 9.99%, rgb(152, 121, 82) 115.22%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

    width: 29.06px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    
`