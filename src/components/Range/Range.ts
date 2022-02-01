import styled from "styled-components";
import {gridArea, GridAreaProps} from 'styled-system';

export const Range = styled.input<GridAreaProps>`
    ${gridArea}
    --size:1.3;
    
    -webkit-appearance: none;
    font-size:inherit;
    border-radius: 50px;
    width: calc(var(--size) * 20em);
    height: calc(var(--size) * 1.56em);
    background: var(--color-grey);
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    -webkit-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;

    @media only screen and (min-width:${props => props.theme.breakpoints[0]}) {
        --size:1;
  }


    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: calc(var(--size) * 2.5em);
        height: calc(var(--size) * 2.5em);
        background: var(--color-tertiary);
        cursor: pointer;
        border-radius: 50px;
    }

    &::-moz-range-thumb {
        border-radius: 50px;
        width: calc(var(--size) * 2.5em);
        height: calc(var(--size) * 2.5em);
        background: var(--color-tertiary);
        cursor: pointer;
    }
`
