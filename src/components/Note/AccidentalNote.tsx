import * as React from "react";
import { AccidentalNoteContainer,Symbol } from "./AccidentalNoteStyles";

interface INoteProps {
    note:string,
    sharp?:boolean
}

const AccidentalNote: React.FunctionComponent<INoteProps> = ({note,sharp = false}) => {
  return (
    <AccidentalNoteContainer>
      {note}
      <Symbol>{sharp?'♯':'♭'}</Symbol>
    </AccidentalNoteContainer>
  );
};

export default AccidentalNote;
