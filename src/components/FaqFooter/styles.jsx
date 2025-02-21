import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  /* border-top: 1px solid #e5e5e5; */
  padding: 40px 15px 15px;
`

export const Table = styled.div`
  width: 100%;
  max-width: 605px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Row = styled.div`
  width: 100%;
  max-width: 555px;
  height: auto;
  margin-bottom: 30px;
`

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  cursor: pointer;
`

export const ImageCnt = styled.div`
  min-width: 25px;
  min-height: 25px;
`

export const QuestionText = styled.p`
  font-family: 'omega-bold', sans-serif;
  line-height: 1.25;
  letter-spacing: .04em;
  font-size: 16px;
  color: #555;
  font-weight: 400;
  text-align: start;
  text-transform: uppercase;
`

export const Response = styled.div`
  margin: 10px 0;
`

export const ResponseText = styled.div`
  font-size: 12px;
  text-align: left;
  line-height: 1.4;
  color: #222222;
`

export const ContainerTerms = styled.div`
  display: flex;
  flex-direction: column;
  
  .terms {
    list-style: none none;
    padding: 15px 0;
    margin: 0;

    li {
      display: inline-block;

      a {
        font-family: 'omega-regular', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25;
        color: #555;
        letter-spacing: .04em;
        padding: 4px 12px;
        text-decoration: none;
      }
    }

    .divisor::before {
      content: '|';
      display: inline-block;
      font-size: 13px;
      vertical-align: middle;
      color: #e5e5e5;
      line-height: 1.25;
    }
  }

  .contact {
    vertical-align: inherit;

    font-family: 'omega-regular', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    color: #555;
    letter-spacing: .04em;
    padding-bottom: 10px;
    text-decoration: underline;
  }
  
  .copyright {
    padding: 10px 4.166666% 25px;

    vertical-align: inherit;

    font-family: 'omega-regular', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    color: #555;
    letter-spacing: .04em;
  }
`