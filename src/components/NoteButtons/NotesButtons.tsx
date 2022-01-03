import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCorrectAnswered, incrementTotalAnswered, selectCorrectAnswer, selectNoteButtons, selectWrongAnswerClicked, setCorrectAnswer, setWrongAnswerClicked } from '../../redux/appSlice';
import { NoteButton, NoteButtonsContainer } from './NoteButtonsStyles';

interface INoteButtonsProps {
}

const NoteButtons: React.FunctionComponent<INoteButtonsProps> = (props) => {

  const dispatch = useAppDispatch();
  const [b1,b2,b3,b4] = useAppSelector(selectNoteButtons);
  const correctAnswer = useAppSelector(selectCorrectAnswer);
  const wrongAnswerClicked = useAppSelector(selectWrongAnswerClicked);

  const btnClicked = (val:string) => {
    
      if(val === correctAnswer) {
        dispatch(setWrongAnswerClicked(false))
        dispatch(incrementCorrectAnswered())
        dispatch(incrementTotalAnswered())
      } else {
        dispatch(setWrongAnswerClicked(true))
        dispatch(incrementTotalAnswered())
      }
      
  }

  useEffect(() => {
    const handleKeydown = (ev:KeyboardEvent) => {
      switch(ev.key) {
        case '1':         
          btnClicked(b1)
          break
        case '2': 
          btnClicked(b2)
          break
        case '3': 
          btnClicked(b3)
          break
        case '4': 
          btnClicked(b4)
      }
    }
    document.addEventListener('keydown',handleKeydown);

    return () => {
      document.removeEventListener('keydown',handleKeydown)
    }
  },[b1,b2,b3,b4])
  
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
