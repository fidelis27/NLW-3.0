import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}

  body {
    -webkit-font-smoothing: antialiased;
    color:#fff;
    background: #ebf2f5;
  }
  body, input, button {
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;
