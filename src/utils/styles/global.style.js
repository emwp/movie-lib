import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
