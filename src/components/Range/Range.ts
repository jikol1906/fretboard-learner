import styled from "styled-components";
import {gridArea, GridAreaProps} from 'styled-system';

export const Range = styled.input<GridAreaProps>`
    ${gridArea}
    -webkit-appearance: none;
    font-size:inherit;
    border-radius: 50px;
    width: 20em;
    height: 1.56em;
    background: var(--color-grey);
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    -webkit-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;


    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2.5em;
        height: 2.5em;
        background: var(--color-tertiary);
        cursor: pointer;
        border-radius: 50px;
    }

    &::-moz-range-thumb {
        border-radius: 50px;
        width: 2.5em;
        height: 2.5em;
        background: var(--color-tertiary);
        cursor: pointer;
    }
`
