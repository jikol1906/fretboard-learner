import { useAppSelector } from '../app/hooks';
import Fretboard from '../components/Fretboard/Fretboard';
import Game from './Game/Game';
import Menu from './Menu/Menu';
import { selectGameStarted } from '../redux/appSlice';
import { Grid } from '../Styles/BaseStyles';

function GuessNote() {
  const gameStarted = useAppSelector(selectGameStarted);

  return (
    <Grid
      gridAutoRows={gameStarted? "1fr" : "auto"}
      gridGap="2rem"
      height="100%"
    >
      
      <Fretboard/>
      {!gameStarted ? <Menu/> : <Game/>}
    </Grid>
  );
}

export default GuessNote;
