import styled from "styled-components";

export const GameContainer = styled.div`
    display:grid;
    font-size: min(1.3vw,1rem);
    gap:3em;
    grid-template-areas: "a1 a2 a3";
    justify-items:center;
    align-items:center;
    grid-template-columns: 1fr auto 1fr;
`