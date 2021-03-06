import { Box } from "rebass/styled-components";
import styled, { keyframes } from "styled-components";



export const FretboardContainer = styled(Box)`
    margin: 0 auto;
    width: calc(63.25em - var(--rotation) * .1em);
    position: relative;
    transform: perspective(500px) rotateX(calc(var(--rotation) * 1deg));
`

const pulse = keyframes`
    from {
        transform: scale(.8);
        filter: brightness(.8);
    }
    to {
        transform: scale(1.5);
        filter: brightness(1.9);
    }
`

export const Pointer = styled.div`
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
    top: calc(16.6% * var(--y,0) + 0.6em);
    left: calc((100% / 12) * var(--x,0) + 2em);
    background-color: yellow;
    animation: ${pulse} .3s infinite alternate;
    position: absolute;
`

