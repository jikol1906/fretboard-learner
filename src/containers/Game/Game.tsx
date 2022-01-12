import * as React from "react";
import { useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { Text } from "rebass/styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NoteButtons from "../../components/NoteButtons/NotesButtons";
import { StopButton } from "../../components/StopButton/StopButtonStyles";
import {
  resetCorrectAndTotalAnswers,
  selectGameStarted,
  selectTimeBetween,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setGameStarted,
  setNoteButtonValues,
  setPointers,
} from "../../redux/appSlice";
import { Grid } from "../../Styles/BaseStyles";

import {
  generateFretboardWithFlatsAndSharps,
  getRandomIntInclusive,
  shuffle,
} from "../../Utils/Utils";

interface IGameProps {}

let fretboard = generateFretboardWithFlatsAndSharps();
fretboard.forEach((s) => s.shift());
fretboard = fretboard.map((s) => s.map((n) => n.replace(/\d+/g, "")));



const Game: React.FunctionComponent<IGameProps> = () => {
  const dispatch = useAppDispatch();
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);
  const [timeLeft, { start }] = useCountDown(60000, 1000);



  const newRound = () => {
    const randInt1 = getRandomIntInclusive(0, fretboard[0].length - 1);
    const randInt2 = getRandomIntInclusive(0, fretboard.length - 1);
    const correctAnswer = fretboard[randInt2][randInt1];
    const string = fretboard[randInt2].slice().filter((n) => n !== correctAnswer);
    dispatch(setCorrectAnswer(correctAnswer));
    shuffle(string);
  
    const notesForAnswerButtons: [string, string, string, string] = [
      correctAnswer,
      string[0],
      string[1],
      string[2],
    ];
    shuffle(notesForAnswerButtons);
  
    dispatch(setNoteButtonValues(notesForAnswerButtons));
    dispatch(setCorrectAnswer(fretboard[randInt2][randInt1]));
    dispatch(setPointers([[randInt1, randInt2]]));
  }

  useEffect(() => {
    newRound();
    return () => {
    };
  }, [total]);

  useEffect(() => {
    start();
    return () => {
      dispatch(setPointers([]))
      dispatch(resetCorrectAndTotalAnswers())
    }
  },[])

  return (
    <>
    <StopButton 
        position="fixed" 
        top="0" 
        right="0" 
        p={[".6em",".8em"]} 
        bg="transparent" 
        onClick={_ => dispatch(setGameStarted(false))}/>
    <Grid
      fontSize="min(1.3vw,1.7rem)"
      gridGap="3em"
      gridTemplateAreas="'a1 a2 a3'"
      justifyItems="center"
      alignItems="center"
      gridTemplateColumns=" 1fr auto 1fr"
    >
      <Text color="white" fontSize="2em" style={{ gridArea: "a1" }}>
        {correct}/{total}
      </Text>
      <NoteButtons disabled={timeLeft/1000 <= 0}/>
      <Text color="white" fontSize="2em" style={{ gridArea: "a3" }}>
        {timeLeft/1000}
      </Text>
    </Grid>
    </>
  );
};

export default Game;
