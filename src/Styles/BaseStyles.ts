import { Box } from "rebass/styled-components";
import styled from "styled-components";
import {gridArea, grid, GridProps,GridAreaProps,} from "styled-system";


export const Grid = styled(Box)<GridProps>`
    ${grid}
    display: grid;
`

export const GridItem = styled.div<GridAreaProps>`
    ${gridArea}
`