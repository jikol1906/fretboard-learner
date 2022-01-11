import styled from "styled-components";

export const StyledMenu = styled.div`
    display: grid;
    padding: 0 2em;
    grid-template-areas: 
        "a1 a2"
        "a3 a2";
    grid-template-columns: repeat(2,auto);
    
    align-items: center;
    justify-content: center;
    font-size: min(1.7vw,1rem);
    grid-row-gap: 3em;
    grid-column-gap: 5em;
`
