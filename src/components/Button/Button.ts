import styled from "styled-components";
import {space,SpaceProps, gridArea, GridAreaProps} from 'styled-system';
import { GridItem } from "../../Styles/BaseStyles";


export const Button = styled(GridItem).attrs({as:'button'})<{ fontSize: string } & SpaceProps>`
  font-size: ${props => props.fontSize};
  ${space}
  letter-spacing: 4px;
  padding: 1.1em 3em;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-tertiary);
  border-radius: 0.625em;
  -webkit-box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover {
    filter: brightness(1.05);
  }
`;
