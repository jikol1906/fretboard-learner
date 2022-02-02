import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  

body, html { 
  font-family: 'Roboto', sans-serif;
}

:root {
  --color-white:#fff;
  --color-grey:#d3d3d3;
  --color-grey-secondary:#696969;
  --color-primary:#02AAB0;
  --color-secondary:#00CDAC;
  --color-tertiary:#00a0ff;
}

#root {
  height: 100%;
  padding:2rem;
}


body {
  height:100%;
}


html {
    height: 100%;
    background: var(--color-primary);
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, var(--color-secondary), var(--color-primary));
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, var(--color-secondary), var(--color-primary));

}

 * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
 }

  button {
      border: none;
      background:transparent;
      outline:none;
      font-family:inherit;
      cursor: pointer;
  }
`;
