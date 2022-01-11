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
          <Label style={{gridArea:'l1'}} htmlFor="rotation">Fretboard rotation</Label>
          <Range  style={{gridArea:'i1'}} onChange={e => dispatch(setFretboardRotation(+e.target.value))} type="range" min="0" max="70" value={rotation} step="1" id="rotation"/>
          <Button style={{gridArea:'a2'}} ml={[null,'2em']} fontSize='1.5em' onClick={e => dispatch(setGameStarted(true))}>START</Button>
          <Label style={{gridArea:'l2'}} htmlFor="checkbox">Practice mode</Label>
          <Checkbox style={{gridArea:'i2'}} id="checkbox" onChange={(e) => dispatch(setPracticemode(e.target.checked))}/>
      </StyledMenu>
  );
};

export default Menu;
