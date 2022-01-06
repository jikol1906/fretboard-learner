import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCorrectAnswered, incrementTotalAnswered, selectCorrectAnswer, selectNoteButtons, selectWrongAnswerClicked, setCorrectAnswer, setWrongAnswerClicked } from '../../redux/appSlice';
import { NoteButton, NoteButtonsContainer } from './NoteButtonsStyles';

interface INoteButtonsProps {
}

const NoteButtons: React.FunctionComponent<INoteButtonsProps> = (props) => {

  const dispatch = useAppDispatch();
  const buttons = useAppSelector(selectNoteButtons);
  const correctAnswer = useAppSelector(selectCorrectAnswer);
  const wrongAnswerClicked = useAppSelector(selectWrongAnswerClicked);
  
  const btn1ref = useRef<HTMLButtonElement>(null)
  const btn2ref = useRef<HTMLButtonElement>(null)
  const btn3ref = useRef<HTMLButtonElement>(null)
  const btn4ref = useRef<HTMLButtonElement>(null)
  const [b1,b2,b3,b4] = buttons;
  

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
    return () => {dispatch(setWrongAnswerClicked(false))};
  },[])

  useEffect(() => {
    const handleKeydown = (ev:KeyboardEvent) => {
      switch(ev.key) {
        case '1':         
          btn1ref.current?.click()
          break
        case '2': 
          btn2ref.current?.click()
          break
        case '3': 
          btn3ref.current?.click()
          break
        case '4': 
          btn4ref.current?.click()
      }
    }
    document.addEventListener('keydown',handleKeydown);

    return () => {
      document.removeEventListener('keydown',handleKeydown)
    }
  },[b1,b2,b3,b4])
  
  return (
      <NoteButtonsContainer style={{gridArea:'a2'}}>
          <NoteButton ref={btn1ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(b1)} style={{gridArea:'b1'}}>{b1}</NoteButton>
          <NoteButton ref={btn2ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(b2)} style={{gridArea:'b2'}}>{b2}</NoteButton>
          <NoteButton ref={btn3ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(b3)} style={{gridArea:'b3'}}>{b3}</NoteButton>
          <NoteButton ref={btn4ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(b4)} style={{gridArea:'b4'}}>{b4}</NoteButton>
      </NoteButtonsContainer>
  );
};



export default NoteButtons;
