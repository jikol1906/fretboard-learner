import styled from "styled-components";

export const StyledMenu = styled.div`
    display: grid;
    padding: 0 2em;
    grid-template-areas: 
        "a1 a1 a1"
        "a2 a3 a4";
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    justify-content: center;
    font-size: min(1.7vw,1rem);
    grid-row-gap: 3em;
    grid-column-gap: 3em;
`
