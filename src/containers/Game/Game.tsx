import * as React from "react";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NoteButtons from "../../components/NoteButtons/NotesButtons";
import {
  incrementTotalAnswered,
  resetCorrectAndTotalAnswers,
  selectGameStarted,
  selectTimeBetween,
  selectTotalandCorrectAnswered,
  setCorrectAnswer,
  setNoteButtonValues,
  setPointers,
} from "../../redux/appSlice";
import { Text } from "../../Styles/Typography";
import { Fretboard } from "../../Utils/Types";
import {
  generateFretboardWithFlatsAndSharps,
  getRandomIntInclusive,
  shuffle,
} from "../../Utils/Utils";
import { GameContainer } from "./GameStyles";

interface IGameProps {}

let fretboard = generateFretboardWithFlatsAndSharps();
fretboard.forEach((s) => s.shift());
fretboard = fretboard.map((s) => s.map((n) => n.replace(/\d+/g, "")));



const Game: React.FunctionComponent<IGameProps> = () => {
  const dispatch = useAppDispatch();
  const gameStarted = useAppSelector(selectGameStarted);
  const timeBetween = useAppSelector(selectTimeBetween);
  const [total, correct] = useAppSelector(selectTotalandCorrectAnswered);



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
    const intervalId = setInterval(() => {
      dispatch(incrementTotalAnswered())
    }, timeBetween * 100);
    newRound();
    return () => {
      dispatch(setPointers([]));
      clearInterval(intervalId);
    };
  }, [total]);

  useEffect(() => {
    return () => {
      dispatch(resetCorrectAndTotalAnswers())
    }
  },[])

  return (
    <GameContainer>
      <Text fontSize="2em" style={{ gridArea: "a1" }}>
        {correct}/{total}
      </Text>
      <NoteButtons />
    </GameContainer>
  );
};

export default Game;
