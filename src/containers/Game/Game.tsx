import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import NoteButtons from '../../components/NoteButtons/NotesButtons';
import { selectGameStarted, setPointers } from '../../redux/appSlice';
import { Text } from '../../Styles/Typography';
import { generateFretboardWithFlatsAndSharps, getRandomIntInclusive } from '../../Utils/Utils';
import { GameContainer } from './GameStyles';

interface IGameProps {
}

const Game: React.FunctionComponent<IGameProps> = (props) => {

  const dispatch = useAppDispatch()
  const gameStarted = useAppSelector(selectGameStarted);
  
  const res = useMemo<Fretboard>(() => {
    let toReturn = generateFretboardWithFlatsAndSharps()
    toReturn.forEach((s) => s.shift());
    toReturn = toReturn.map(s => s.map(n => n.replace(/\d+/g,"")))
    return toReturn;
  },[]);


  
  
  
  
  
  setInterval(() => {
    const randInt1 = getRandomIntInclusive(0,res[0].length-1)
    const randInt2 = getRandomIntInclusive(0,res.length-1)
    const string = res[randInt2].slice();
    
    
    dispatch(setPointers([[randInt1,randInt2]]))
    console.log(res[randInt2][randInt1]);
    },3000)
    
  },[])

  return (
      <GameContainer>
          <Text style={{gridArea:'a1'}}>0/4</Text>
          <NoteButtons/>
      </GameContainer>
  );
};

export default Game;
