import * as React from 'react';
import NoteButtons from '../../components/NoteButtons/NotesButtons';
import { Text } from '../../Styles/Typography';
import { GameContainer } from './GameStyles';

interface IGameProps {
}

const Game: React.FunctionComponent<IGameProps> = (props) => {
  return (
      <GameContainer>
          <Text style={{gridArea:'a1'}}>0/4</Text>
          <NoteButtons/>
      </GameContainer>
  );
};

export default Game;
