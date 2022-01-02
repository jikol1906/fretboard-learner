import * as React from 'react';
import { NoteButton, NoteButtonsContainer } from './NoteButtonsStyles';

interface INoteButtonsProps {
}

const NoteButtons: React.FunctionComponent<INoteButtonsProps> = (props) => {
  return (
      <NoteButtonsContainer style={{gridArea:'a2'}}>
          <NoteButton style={{gridArea:'b1'}}>G#/Ab</NoteButton>
          <NoteButton style={{gridArea:'b2'}}>B</NoteButton>
          <NoteButton style={{gridArea:'b3'}}>C</NoteButton>
          <NoteButton style={{gridArea:'b4'}}>D</NoteButton>
      </NoteButtonsContainer>
  );
};



export default NoteButtons;
