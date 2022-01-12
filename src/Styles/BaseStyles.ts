import styled from "styled-components";
import {gridArea, grid, GridProps, space, SpaceProps, flexbox, FlexboxProps, GridAreaProps, layout,LayoutProps, typography, TypographyProps } from "styled-system";

export const Box = styled.div<SpaceProps & GridProps & FlexboxProps & LayoutProps & TypographyProps>`
 ${space}
 ${grid}
 ${flexbox}
 ${layout}
 ${typography}
`

export const Grid = styled(Box)`
    display: grid;
`

export const GridItem = styled.div<GridAreaProps>`
    ${gridArea}
`