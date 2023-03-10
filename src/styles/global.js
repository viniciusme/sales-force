import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  outline: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  /* Firefox */
  -webkit-font-smoothing: antialiased;
  /* WebKit  */
}

html, body {
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
}

.container {
  width: 80%;
  margin: 0 auto; /* centraliza o container na página */
}

h1 {
  margin: 0;
  font-size: 56px;
  line-height: 5.133rem;
}

h2 {
  margin: 0;
  font-size: 48px;
  line-height: 4.4rem;
}

h3 {
  margin: 0;
  font-size: 40px;
  line-height: 3.666rem;
}

h4 {
  margin: 0;
  font-size: 32px;
  line-height: 2.933rem;
}
h5 {
  margin: 0;
  font-size: 24px;
  line-height: 2.2rem;
}
h6 {
  margin: 0;
  font-size: 20px;
  line-height: 1.833rem;
}


li {
  list-style-type: none;
}

a, a:hover, a:focus, a:active {
  text-decoration: none;
  outline: none;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: 0.4s;
}

`;
