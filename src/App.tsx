import React from 'react';
import StartButton from './components/StartButton/StartButton';
import { createGlobalStyle } from 'styled-components';
import Menu from './containers/Menu/Menu';

const GlobalStyle = createGlobalStyle`  

body, html { 
  font-family: 'Roboto', sans-serif;
}


body {
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Menu/>
    </>
  );
}

export default App;
