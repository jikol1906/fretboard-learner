import { useAppSelector } from './app/hooks';
import Fretboard from './components/Fretboard/Fretboard';
import Game from './containers/Game/Game';
import Menu from './containers/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import { selectGameStarted } from './redux/appSlice';

function App() {
  const gameStarted = useAppSelector(selectGameStarted);

  return (
    <>
      <GlobalStyle/>
      <Fretboard/>
      {!gameStarted ? <Menu/> : <Game/>}
    </>
  );
}

export default App;
