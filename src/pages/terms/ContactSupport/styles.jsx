import styled from "styled-components";

export const Container = styled.div`

  .orgTexts {
    width: 94.18180599999999%;
    margin: 0 auto;
  }
`;

export const Title = styled.span`
  font-family: 'omega-regular', sans-serif;
  font-size: 1.5625em;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  letter-spacing: .16em;
  color: #c40d2e;
  margin-top: 0;
  margin-bottom: .7em;
  hyphens: manual;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 30px 80px;
`;

export const SubTitle = styled.div`
  font-family: 'omega-regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  letter-spacing: .1em;

  margin-top: 60px;
  margin-bottom: 16px;

  text-align: center;
  color: #c40d2e;
`;

export const Descricao = styled.p`
  font-family: 'omega-regular', sans-serif;
  font-size: 16px;
  color: #555;
  letter-spacing: .04em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.35;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 12px;
  text-align: start;
  margin: 0 0 16px 64px;

  span {
    position: absolute;
    left: 0;
  }

  ul {

    li {
      font-family: 'omega-regular', sans-serif;
      font-size: 16px;
      color: #555;
      letter-spacing: .04em;
      font-style: normal;
      font-weight: 400;
      line-height: 1.35;
      -webkit-font-smoothing: antialiased;
      margin-bottom: 12px;
      text-align: start;
      margin: 0 0 16px 64px;
    }
  }
`

export const ImagePrincipal = styled.img`
  width: 80%;
  margin: 36px 10% 10px;
`;

export const Button = styled.div`
  font-family: 'omega-bold', sans-serif;
  font-size: 14px;
  color: #555;
  border-bottom: solid 1px #e5e5e5;
  width: fit-content;
  letter-spacing: .04em;
  position: relative;
  zoom: 1;
  margin: 0 auto;
`

export const Bloco = styled.ul`
  width: 100%;
  position: relative;
`