import * as React from 'react';
import StartButton from '../../components/StartButton/StartButton';
import { StyledMenu } from './MenuStyles';

interface IMenuProps {
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  return (
      <StyledMenu>
          <StartButton>START</StartButton>
      </StyledMenu>
  );
};

export default Menu;
