import React from 'react';
import StartButton from './components/StartButton/StartButton';
import { createGlobalStyle } from 'styled-components';
import Fretboard from './components/Fretboard/Fretboard';
import Menu from './containers/Menu/Menu';

const GlobalStyle = createGlobalStyle`  

body, html { 
  font-family: 'Roboto', sans-serif;
}

:root {
  --color-white:#fff;
  --color-primary:#02AAB0;
  --color-secondary:#00CDAC;
  --color-tertiary:#00a0ff;
}

#root {
  margin:auto;
  padding:2rem 0;
}


body {
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


html {
    font-family: 'Nanum Gothic', sans-serif;
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
      font-family:inherit
      cursor: pointer;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Fretboard/>
      <Menu/>
    </>
  );
}

export default App;
