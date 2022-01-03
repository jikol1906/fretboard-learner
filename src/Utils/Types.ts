export type Note = string;
export type FretboardPosition = Note | [Note,Note]
export type Fretboard = FretboardPosition[][];