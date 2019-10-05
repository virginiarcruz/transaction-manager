import { createGlobalStyle } from 'styled-components/macro';

import { grayPrimary, white } from './colors';

export default createGlobalStyle`

@import 'https://fonts.googleapis.com/css?family=Lato|Poppins:400,600,700|Source+Sans+Pro:400,500,600';*,*::before,*::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html, #root {
  min-height: 100%;
  min-width: 100%
}


body {
  background-color: ${grayPrimary};
  background-attachment: fixed;
  color: ${white};
  display: flex;
  font-family: 'Source Sans Pro', sans-serif;
  height: auto;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
}

fieldset {
  border: 0;
}
`;
