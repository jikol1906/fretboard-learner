import styled from "styled-components";

export const StyledMenu = styled.div`
    display: grid;
    grid-template-areas: 
        "a1 a1"
        "a2 a3";
    justify-items: center;
    justify-content: center;
    font-size: min(1.7vw,1rem);
    grid-row-gap: 3em;
    grid-column-gap: 9em;
`
