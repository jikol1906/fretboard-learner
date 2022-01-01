import * as React from 'react';
import { StartButton } from '../../components/StartButton/StartButton';
import { selectFretboardRotation, selectTimeBetween, setFretboardRotation, setGameStarted, setTimeBetween } from '../../redux/appSlice';
import { StyledMenu } from './MenuStyles';

interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
      <StyledMenu>
          <StartButton onClick={e => dispatch(setGameStarted(true))}>START</StartButton>
      </StyledMenu>
  );
};

export default Menu;
