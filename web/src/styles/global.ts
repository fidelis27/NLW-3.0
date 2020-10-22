import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`



* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}

:root {
  --color-background: #F0F0F7;
  --color-primary-lighter: #C09F80;
  --color-primary-light: #c29872;
  --color-primary: #D7CEC7;
  --color-primary-dark: #29b6d1;
  --color-primary-darker: #29b6d9;
  --color-secundary: #565656;
  --color-secundary-dark: #313131;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #1d8ba1;
  --color-text-title: #29b6d1;
  --color-text-complement: #9C98A6;
  --color-text-base: #29b6d1;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-select-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  --color-error: #c53030;
  --color-focused:#483D8B;
  --color-filled:#228B22;

  font-size: 60%;
}


  body {
    -webkit-font-smoothing: antialiased;
    color:#fff;
    background: #ebf2f5;
  }
  body, input, button, textarea {
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
