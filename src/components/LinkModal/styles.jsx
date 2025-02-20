import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 24px;
  gap: 24px;
  padding-top: 24px;
  margin: 24px 0 32px;
  border-top: 1px solid rgb(223, 223, 223);

  .ctn_track  {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #282828B3;
  }
  .ctn_track span {
    text-decoration: underline;
  }
`
export const CtnModal = styled.div`
  
`
export const ForaModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  visibility: visible;
  opacity: 0.3;
  z-index: 10;
`
export const DentroModal = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;

  background-color: #FFF;
  z-index: 20;
  border-radius: 10px 10px 0 0;
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgb(223, 223, 223);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 10px 24px;
  min-height: 64px;
  
  .title-modal {
    display: flex;
    align-items: center;
    gap: 0.7em;
  }

  .close-modal {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`

export const ContentModal = styled.div`
  padding: 24px;
  overflow: auto; 

  p {
    color: #282828;
    text-align: left;
    line-height: 1.5em;
  }
`