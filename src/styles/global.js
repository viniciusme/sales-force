import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box
}

body, input, button {
  font: 14px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

.container {
  width: 80%;
  margin: 0 auto; /* centraliza o container na página */
}

`;
