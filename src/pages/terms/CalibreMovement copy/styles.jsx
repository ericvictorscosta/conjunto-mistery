import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0 30px;
  margin-left: 4.166666%;
  margin-right: 4.166666%;
`;

export const Title = styled.div`
  font-family: 'omega-regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  letter-spacing: .24em;

  color: #555;
  margin-bottom: 19.2px;
`;


export const Model = styled.span`
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
`;

export const ImagePrincipal = styled.img`
  width: 80%;
  margin: 36px 10% 10px;
`;

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 33.6px;
  
  p {
    font-family: 'omega-regular', sans-serif;
    font-size: 16px;
    color: #555;
    text-align: center;
    letter-spacing: .04em;
    font-style: normal;
    font-weight: 400;
    line-height: 1.35;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 12px;
  }
`

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

export const Blocos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: self-start;
  justify-content: center;
  max-width: 280px;
  margin: 40px auto 0 auto;
  list-style: none none;
  padding: 0;

  .II {
    gap: 8px;
    position: relative;
    padding: 0px 20px 20px;
    width: 50%;
    float: left;
    vertical-align: top;
  }

  .III {
    gap: 15px;
    position: relative;
    margin: 0;
    padding: 0;
  
    .sound {
      position: absolute;
      right: 12px;
      bottom: 18px;

      svg {
        width: 30px;
        height: 30px;
        padding: 7px;
        background-color: white;
        border: 1px solid #e5e5e5;
      }
    }
  }
  
  .II, .III {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: 58px;
      height: 58px;
      padding: 14px;
      background: #f2f2f2;
      border-radius: 50%;
    }

    span {
      font-family: 'omega-bold', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      font-size: 11px;
      color: #555;
    }
  }
`