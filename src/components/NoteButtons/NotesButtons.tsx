import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCorrectAnswered, incrementTotalAnswered, selectCorrectAnswer, selectNoteButtons, selectWrongAnswerClicked, setCorrectAnswer, setWrongAnswerClicked } from '../../redux/appSlice';
import AccidentalNote from '../Note/AccidentalNote';
import { NoteButton, NoteButtonsContainer } from './NoteButtonsStyles';

interface INoteButtonsProps {
  disabled:boolean
}

const NoteButtons: React.FunctionComponent<INoteButtonsProps> = ({disabled}) => {

  const dispatch = useAppDispatch();
  const buttons = useAppSelector(selectNoteButtons);
  const correctAnswer = useAppSelector(selectCorrectAnswer);
  const wrongAnswerClicked = useAppSelector(selectWrongAnswerClicked);
  
  const btn1ref = useRef<HTMLButtonElement>(null)
  const btn2ref = useRef<HTMLButtonElement>(null)
  const btn3ref = useRef<HTMLButtonElement>(null)
  const btn4ref = useRef<HTMLButtonElement>(null)
  
  const [b1,b2,b3,b4] = buttons.map(b => {
    if(b.includes("#")) {
      const [sharp, flat] = b.split("/");
      return (
        <>
          <AccidentalNote note={sharp[0]} sharp />
          /
          <AccidentalNote note={flat[0]} />
        </>
      );
      
    }
    return b;
  });

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
  },buttons)
  
  return (
      <NoteButtonsContainer 
        style={{gridArea:'a2'}}
        gridTemplateAreas="'b1 b2 b3 b4'"
        gridTemplateColumns="repeat(4,1fr)"
      >
          <NoteButton disabled={disabled} ref={btn1ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(buttons[0])} style={{gridArea:'b1'}}>{b1}</NoteButton>
          <NoteButton disabled={disabled} ref={btn2ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(buttons[1])} style={{gridArea:'b2'}}>{b2}</NoteButton>
          <NoteButton disabled={disabled} ref={btn3ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(buttons[2])} style={{gridArea:'b3'}}>{b3}</NoteButton>
          <NoteButton disabled={disabled} ref={btn4ref} wrong={wrongAnswerClicked} onClick={() => btnClicked(buttons[3])} style={{gridArea:'b4'}}>{b4}</NoteButton>
      </NoteButtonsContainer>
  );
};



export default NoteButtons;
