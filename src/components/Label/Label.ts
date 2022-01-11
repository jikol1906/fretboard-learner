import styled from "styled-components";
import {gridArea, GridAreaProps} from 'styled-system';

export const Label = styled.label<GridAreaProps>`
    ${gridArea}
    color:var(--color-white);
    font-size:1.2em;
`