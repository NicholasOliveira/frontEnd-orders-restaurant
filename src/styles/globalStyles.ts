import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body, html, #root{
    min-height: 100%;
  }
`;