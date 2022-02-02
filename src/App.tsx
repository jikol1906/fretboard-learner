import { useAppSelector } from './app/hooks';
import Fretboard from './components/Fretboard/Fretboard';
import Game from './containers/Game/Game';
import Menu from './containers/Menu/Menu';
import { GlobalStyle } from './Styles/GlobalStyle';
import { selectGameStarted } from './redux/appSlice';
import { Grid } from './Styles/BaseStyles';

function App() {
  const gameStarted = useAppSelector(selectGameStarted);

  return (
    <Grid
      gridAutoRows={gameStarted? "1fr" : "auto"}
      gridGap="2rem"
      height="100%"
    >
      <GlobalStyle/>
      <Fretboard/>
      {!gameStarted ? <Menu/> : <Game/>}
    </Grid>
  );
}

export default App;
