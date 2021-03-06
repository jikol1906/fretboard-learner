import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Button } from 'rebass/styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementCorrectAnswered, incrementTotalAnswered, selectCorrectAnswer, selectNoteButtons, selectWrongAnswerClicked, setWrongAnswerClicked } from '../../redux/appSlice';
import { Grid } from '../../Styles/BaseStyles';
import AccidentalNote from '../Note/AccidentalNote';

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
  },[dispatch])

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
  },[buttons])

  const notebuttonProps = {
    disabled,
    fontSize:["6em","3em"],
    p:".8em",
    width:["100%","auto","5ch"],
    bg:"transparent",
    color: wrongAnswerClicked ? "red" : "white",
    sx: {
      boxSizing:['border-box','content-box'],
      cursor:'pointer',
      position: 'relative',
      whiteSpace: 'nowrap',
      borderRadius:0,
      borderWidth: '0.1em',
      borderStyle: 'solid',
      borderColor: 'dimWhite',
      '&:disabled': {
        opacity: '.5',
        cursor: 'not-allowed'
      },
      '&::after': {
        position:" absolute",
        display:['none',null,'block'],
        boxSizing: 'border-box',
        color:"white",
        borderRadius: '100px',
        left:'50%',
        top:'120%',
        transform:'translateX(-50%)',
        fontSize:'.5em'
    },
    '&:nth-child(1)::after': {content: "'1'"},
    '&:nth-child(2)::after': {content: "'2'"},
    '&:nth-child(3)::after': {content: "'3'"},
    '&:nth-child(4)::after': {content: "'4'"},
    '&:nth-child(1)': {
      borderTopLeftRadius:[null,'999px'],
      borderBottomLeftRadius:[null,'999px'],
    },
    '&:nth-child(4)': {
      borderTopRightRadius:[null,'999px'],
      borderBottomRightRadius:[null,'999px'],
    },
  }

  }

  
  return (
      <Grid
      gridTemplateColumns={["1fr 1fr","repeat(4,1fr)","repeat(4,auto)"]}
      alignSelf="stretch"
      justifySelf={["stretch",null]}
        sx={{
          borderWidth:'8px',
          borderStyle:'solid',
          borderColor:'dimWhite',
          borderRadius:[null,'1000px'],
          gridArea:'a2'
        }}
      >
          <Button {...notebuttonProps} ref={btn1ref} onClick={() => btnClicked(buttons[0])}>{b1}</Button>
          <Button {...notebuttonProps} ref={btn2ref} onClick={() => btnClicked(buttons[1])}>{b2}</Button>
          <Button {...notebuttonProps} ref={btn3ref} onClick={() => btnClicked(buttons[2])}>{b3}</Button>
          <Button {...notebuttonProps} ref={btn4ref} onClick={() => btnClicked(buttons[3])}>{b4}</Button>
      </Grid> 
  );
};



export default NoteButtons;
