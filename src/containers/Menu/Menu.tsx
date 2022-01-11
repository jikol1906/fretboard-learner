import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button } from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { Label } from '../../components/Label/Label';
import { Range } from '../../components/Range/Range';
import { selectFretboardRotation, selectTimeBetween, setFretboardRotation, setGameStarted, setPracticemode, setTimeBetween } from '../../redux/appSlice';
import { StyledMenu } from './MenuStyles';

interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {

  const rotation = useAppSelector(selectFretboardRotation);
  const timebetween = useAppSelector(selectTimeBetween);
  const dispatch = useAppDispatch();
  
  return (
      <StyledMenu>
          <div style={{gridArea:'a1'}}>
            <Label htmlFor="rotation">Fretboard rotation</Label>
            <Range  onChange={e => dispatch(setFretboardRotation(+e.target.value))} type="range" min="0" max="70" value={rotation} step="1" id="rotation"/>
          </div>
          <Button style={{gridArea:'a2'}} fontSize='1.5em' onClick={e => dispatch(setGameStarted(true))}>START</Button>
          <div style={{gridArea:'a3', textAlign:'center'}}>
            <Label htmlFor="checkbox">Practice mode</Label>
            <Checkbox id="checkbox" onChange={(e) => dispatch(setPracticemode(e.target.checked))}/>
          </div>
      </StyledMenu>
  );
};

export default Menu;
