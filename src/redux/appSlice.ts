import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { FretboardPosition } from "../Utils/Types";




export interface AppState {
  gameStarted:boolean,
  practiceMode:boolean,
  wrongAnswerClicked:boolean,
  timeBetween: number;
  fretboardRotation:number;
  pointers: [number,number][];
  correctAnswer:string;
  noteButtonValues:[FretboardPosition,FretboardPosition,FretboardPosition,FretboardPosition]
  totalAnswered: number;
  correctAnswered: number;
}

const initialState: AppState = {
  gameStarted:false,
  practiceMode:false,
  wrongAnswerClicked:false,
  timeBetween: 50,
  fretboardRotation:0,
  pointers: [],
  correctAnswer:"",
  noteButtonValues:["","","",""],
  totalAnswered: 0,
  correctAnswered: 0,
};



export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTimeBetween(state,action: PayloadAction<number>) {
      state.timeBetween = action.payload
    },
    setFretboardRotation(state,action: PayloadAction<number>) {
      state.fretboardRotation = action.payload
    },
    setPointers(state,action: PayloadAction<[number,number][]>) {
      state.pointers = action.payload
    },
    setGameStarted(state,action: PayloadAction<boolean>) {
      state.gameStarted = action.payload
    },
    setNoteButtonValues(state,action: PayloadAction<[FretboardPosition,FretboardPosition,FretboardPosition,FretboardPosition]>) {
      state.noteButtonValues = action.payload
    },
    setCorrectAnswer(state,action: PayloadAction<string>) {
      state.correctAnswer = action.payload
    },
    setWrongAnswerClicked(state,action: PayloadAction<boolean>) {
      state.wrongAnswerClicked = action.payload
    },
    setPracticemode(state,action: PayloadAction<boolean>) {
      state.practiceMode = action.payload
    },
    incrementTotalAnswered(state) {
      state.totalAnswered++;
    },
    incrementCorrectAnswered(state) {
      state.correctAnswered++;
    },
    resetCorrectAndTotalAnswers(state) {
      state.correctAnswered = 0;
      state.totalAnswered = 0;
    }
  },
});

export const {
  setTimeBetween,
  setFretboardRotation,
  setPointers,
  setGameStarted,
  setNoteButtonValues,
  setCorrectAnswer,
  setWrongAnswerClicked,
  setPracticemode,
  incrementTotalAnswered,
  resetCorrectAndTotalAnswers,
  incrementCorrectAnswered } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTimeBetween = (state: RootState) => state.app.timeBetween;
export const selectPracticeMode = (state: RootState) => state.app.practiceMode;
export const selectFretboardRotation = (state: RootState) => state.app.fretboardRotation;
export const selectWrongAnswerClicked = (state: RootState) => state.app.wrongAnswerClicked;
export const selectPointers = (state: RootState) => state.app.pointers;
export const selectGameStarted = (state: RootState) => state.app.gameStarted;
export const selectNoteButtons = (state: RootState) => state.app.noteButtonValues;
export const selectTotalandCorrectAnswered = (state: RootState) => [state.app.totalAnswered, state.app.correctAnswered];
export const selectCorrectAnswer = (state: RootState) => state.app.correctAnswer;



export default appSlice.reducer;
