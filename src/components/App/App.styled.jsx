import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Merienda', cursive;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    background-color: #ffb8ca;
    color: #fff;
    width: 100%;
    height: 100%;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
