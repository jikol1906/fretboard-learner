import { createGlobalStyle } from 'styled-components';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Fretboard from './components/Fretboard/Fretboard';
import { StopButton } from './components/StopButton/StopButtonStyles';
import Game from './containers/Game/Game';
import Menu from './containers/Menu/Menu';
import { selectGameStarted, setGameStarted } from './redux/appSlice';

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
      background:transparent;
      outline:none;
      font-family:inherit;
      cursor: pointer;
  }
`

function App() {
  const dispatch = useAppDispatch()
  const gameStarted = useAppSelector(selectGameStarted);

  return (
    <>
      <GlobalStyle/>
      {gameStarted && <StopButton onClick={_ => dispatch(setGameStarted(false))}/>}
      <Fretboard/>
      {!gameStarted ? <Menu/> : <Game/>}
    </>
  );
}

export default App;
