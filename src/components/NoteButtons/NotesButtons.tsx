import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectNoteButtons } from '../../redux/appSlice';
import { NoteButton, NoteButtonsContainer } from './NoteButtonsStyles';

interface INoteButtonsProps {
}

const NoteButtons: React.FunctionComponent<INoteButtonsProps> = (props) => {

  const [b1,b2,b3,b4] = useAppSelector(selectNoteButtons);

  const btnClicked = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const b = e.target as HTMLButtonElement

      
      
      
  }

  return (
      <NoteButtonsContainer style={{gridArea:'a2'}}>
          <NoteButton onClick={btnClicked} style={{gridArea:'b1'}}>{b1}</NoteButton>
          <NoteButton onClick={btnClicked} style={{gridArea:'b2'}}>{b2}</NoteButton>
          <NoteButton onClick={btnClicked} style={{gridArea:'b3'}}>{b3}</NoteButton>
          <NoteButton onClick={btnClicked} style={{gridArea:'b4'}}>{b4}</NoteButton>
      </NoteButtonsContainer>
  );
};



export default NoteButtons;
