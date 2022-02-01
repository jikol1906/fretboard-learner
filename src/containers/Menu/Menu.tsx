import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/Button/Button';

import Checkbox from '../../components/Checkbox/Checkbox';
import { Label } from '../../components/Label/Label';
import { Range } from '../../components/Range/Range';
import { selectFretboardRotation, selectPracticeMode, setFretboardRotation, setGameStarted, setPracticemode } from '../../redux/appSlice';
import { Grid } from '../../Styles/BaseStyles';

interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {

  const rotation = useAppSelector(selectFretboardRotation);
  const isPracticeMode = useAppSelector(selectPracticeMode);
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
        alignItems="center"
        justifyItems="center"
        padding={["0 4rem",null]}
        justifyContent={[null,"center"]}
        fontSize='clamp(.6rem,1.7vw,1rem)'
        gridColumnGap="8em"
        gridRowGap={["3em","2em"]}
        gridTemplateAreas={gridAreas}
      > 
          <Label fontSize={["2.5em","1.2em"]} gridArea="l1" htmlFor="rotation">Fretboard rotation</Label>
          <Range  gridArea="i1" onChange={e => dispatch(setFretboardRotation(+e.target.value))} type="range" min="0" max="70" value={rotation} step="1" id="rotation"/>
          <Button tabIndex={1} fontSize={["3em","2em"]} style={{gridArea:'a2', letterSpacing:"4px"}} onClick={e => dispatch(setGameStarted(true))}>START</Button>
          <Label fontSize={["2.5em","1.2em"]} gridArea="l2" htmlFor="checkbox">Practice mode</Label>
          <Checkbox style={{gridArea:'i2'}} checked={isPracticeMode} id="checkbox" onChange={(e) => dispatch(setPracticemode(e.target.checked))}/>
      </Grid>
  );
};

export default Menu;
