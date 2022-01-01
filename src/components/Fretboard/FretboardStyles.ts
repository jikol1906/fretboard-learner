import styled from "styled-components";

interface FretboardContainerProps {
    readonly rotation: number;
}

export const FretboardContainer = styled.div<FretboardContainerProps>`
    margin: 0 auto;
    margin-bottom: 4em;
    width: 63.25em;
    position: relative;
    font-size: min(1.3vw,1rem);
    transform: perspective(550px) rotateX(${props => props.rotation}deg);
`
`