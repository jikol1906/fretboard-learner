import styled from "styled-components";
import { grid,GridProps, flexbox,FlexboxProps } from 'styled-system'

export const StyledMenu = styled.div<GridProps & FlexboxProps>`
    display: grid;
    ${grid}
    ${flexbox}
    padding: 0 2em;
    font-size: clamp(.6rem,1.7vw,1rem);
    grid-row-gap: 2em;
    grid-column-gap: 4em;
    
`
