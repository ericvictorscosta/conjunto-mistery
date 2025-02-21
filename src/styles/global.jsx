import styled, { createGlobalStyle } from "styled-components"

import OmegaCtBold from '../assets/fonts/omegact/omegact-bold-webfont.woff2'
import OmegaCtLight from '../assets/fonts/omegact/omegact-light-webfont.woff2'
import OmegaCtRegular from '../assets/fonts/omegact/omegact-regular-webfont.woff2'
import AustinItalic from '../assets/fonts/austin-medium-italic/AustinCyr-MediumItalic.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'omega-bold';
    src: url(${OmegaCtBold}) format('woff2');
  }
  
  @font-face {
    font-family: 'omega-light';
    src: url(${OmegaCtLight}) format('woff2');
  }

  @font-face {
    font-family: 'omega-regular';
    src: url(${OmegaCtRegular}) format('woff2');
  }
  
  @font-face {
    font-family: 'austin-italic';
    src: url(${AustinItalic}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;

    font-family: 'Montserrat', sans-serif;
  }

  .show {
    display: block;
  }
  
  .hidden {
    display: none;
  }

  .animated-heading {
    animation: move .7s infinite;
  }

  @keyframes move {
    0% {
      transform: translateX(-3px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-3px);
    }
  }
`

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto; 

  h1 {
    font-family: 'omega-regular', sans-serif;
  }
` 
