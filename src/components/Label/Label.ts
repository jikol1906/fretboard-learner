import styled from "styled-components";
import {gridArea, GridAreaProps, typography,TypographyProps} from 'styled-system';


export const Label = styled.label<GridAreaProps & TypographyProps>`
    ${gridArea}
    ${typography}
    color:var(--color-white);
`