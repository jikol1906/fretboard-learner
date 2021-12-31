import React from 'react';
import StartButton from './components/StartButton/StartButton';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  

body, html { 
  font-family: 'Roboto', sans-serif;
}


html {
    background-color: #0ea389;
    font-family: 'Nanum Gothic', sans-serif;
    height: 100%;
    background: #02AAB0;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00CDAC, #02AAB0);

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
      <StartButton>Test</StartButton>
    </>
  );
}

export default App;
