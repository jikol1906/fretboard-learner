import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { Label } from '../../components/Label/Label';
import { Range } from '../../components/Range/Range';
import { selectFretboardRotation, selectTimeBetween, setFretboardRotation, setGameStarted, setPracticemode, setTimeBetween } from '../../redux/appSlice';
import { Grid } from '../../Styles/BaseStyles';

interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {

  const rotation = useAppSelector(selectFretboardRotation);
  const timebetween = useAppSelector(selectTimeBetween);
  const dispatch = useAppDispatch();

  const gridAreas = [
    `
    "a2"
    "l1"
    "i1"
    "l2"
    "i2"
    `,
    `
    "a2 l1"
    "a2 i1"
    "a2 l2"
    "a2 i2"
    `
  ]
  
  return (
      <Grid 
        gridTemplateAreas={gridAreas} 
        alignItems="center"
        justifyItems={["center","start"]} 
        justifyContent="center" 
        gridRowGap={["1.5em","2em"]}
        gridColumnGap="5em"
        style={{fontSize:'clamp(.6rem,1.7vw,1rem)'}}
      >
          <Label gridArea="l1" htmlFor="rotation">Fretboard rotation</Label>
          <Range  gridArea="i1" onChange={e => dispatch(setFretboardRotation(+e.target.value))} type="range" min="0" max="70" value={rotation} step="1" id="rotation"/>
          <Button gridArea="a2" fontSize='2em' onClick={e => dispatch(setGameStarted(true))}>START</Button>
          <Label gridArea="l2" htmlFor="checkbox">Practice mode</Label>
          <Checkbox style={{gridArea:'i2'}} id="checkbox" onChange={(e) => dispatch(setPracticemode(e.target.checked))}/>
      </Grid>
  );
};

export default Menu;
