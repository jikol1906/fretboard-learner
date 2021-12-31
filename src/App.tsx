import React from 'react';
import StartButton from './features/StartButton/StartButton';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  

body, html { 
  font-family: 'Roboto', sans-serif;
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
