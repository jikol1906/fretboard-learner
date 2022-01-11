import styled from "styled-components";

export const StyledMenu = styled.div`
    display: grid;
    padding: 0 2em;
    grid-template-areas: 
    "l1 a2"
    "i1 a2"
    "l2 a2"
    "i2 a2";
    justify-items: center;
    align-items: center;
    justify-content: center;
    font-size: clamp(.6rem,1.7vw,1rem);
    grid-row-gap: 2em;
    grid-column-gap: 4em;
    
    @media only screen and (max-width:600px) {
        grid-template-areas: 
                "a2"
                "l1"
                "i1"
                "l2"
                "i2";
    }
`
