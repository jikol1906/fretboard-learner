import styled from "styled-components";
import {gridArea, grid, GridProps, space, SpaceProps, flexbox, FlexboxProps, GridAreaProps } from "styled-system";

export const Box = styled.div<SpaceProps & GridProps & FlexboxProps>`
 ${space}
 ${grid}
 ${flexbox}
`

export const Grid = styled(Box)`
    display: grid;
`

export const GridItem = styled.div<GridAreaProps>`
    ${gridArea}
`