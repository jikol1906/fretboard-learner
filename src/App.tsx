import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
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
      <div className="App">
        
      </div>
    </>
  );
}

export default App;
