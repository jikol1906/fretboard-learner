import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";




export interface AppState {
  gameStarted:boolean,
  timeBetween: number;
  fretboardRotation:number;
  pointers: [number,number][];
  totalAnswered: number;
  correctAnswered: number;
}

const initialState: AppState = {
  gameStarted:false,
  timeBetween: 0,
  fretboardRotation:0,
  pointers: [[0, 4]],
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
    incrementTotalAnswered(state) {
      state.totalAnswered++;
    },
    incrementCorrectAnswered(state) {
      state.correctAnswered++;
    }
  },
});

export const {
  setTimeBetween,
  setFretboardRotation,
  setPointers,
  setGameStarted,
  incrementTotalAnswered,
  incrementCorrectAnswered } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTimeBetween = (state: RootState) => state.app.timeBetween;
export const selectFretboardRotation = (state: RootState) => state.app.fretboardRotation;
export const selectPointers = (state: RootState) => state.app.pointers;
export const selectGameStarted = (state: RootState) => state.app.gameStarted;
export const selectTotalandCorrectAnswered = (state: RootState) => [state.app.totalAnswered, state.app.correctAnswered];



export default appSlice.reducer;