import styled, { keyframes } from "styled-components";



export const FretboardContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 4em;
    width: 63.25em;
    position: relative;
    font-size: min(1.3vw,1rem);
    transform: perspective(550px) rotateX(var(--rotation));
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

