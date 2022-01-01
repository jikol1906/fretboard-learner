import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";




export interface AppState {
  timeBetween: number;
  fretboardRotation:number;
}

const initialState: AppState = {
  timeBetween: 0,
  fretboardRotation:0
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
  },
});

export const { setTimeBetween,setFretboardRotation } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTimeBetween = (state: RootState) => state.app.timeBetween;
export const selectFretboardRotation = (state: RootState) => state.app.fretboardRotation;



export default appSlice.reducer;
