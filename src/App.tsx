import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import StartButton from './features/StartButton/StartButton';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  

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
