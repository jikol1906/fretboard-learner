import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Checkbox from '../../components/Checkbox/Checkbox';
import { Label } from '../../components/Label/Label';
import { Range } from '../../components/Range/Range';
import { StartButton } from '../../components/StartButton/StartButton';
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
          <StartButton onClick={e => dispatch(setGameStarted(true))}>START</StartButton>
          <div style={{gridArea:'a2'}}>
            <Label htmlFor="rotation">Fretboard rotation</Label>
            <Range  onChange={e => dispatch(setFretboardRotation(+e.target.value))} type="range" min="0" max="70" value={rotation} step="1" id="rotation"/>
          </div>
          <div style={{gridArea:'a3', textAlign:'center'}}>
            <Label htmlFor="checkbox">Practice mode</Label>
            <Checkbox id="checkbox" onChange={(e) => dispatch(setPracticemode(e.target.checked))}/>
          </div>
          <div style={{gridArea:'a4'}}>
            <Label htmlFor="timebetween">Time between notes: {timebetween / 10}</Label>  
            <Range  onChange={e => dispatch(setTimeBetween(+e.target.value))} type="range" min="10" max="100" value={timebetween} step="5" id="timebetween"/>
          </div>
      </StyledMenu>
  );
};

export default Menu;
