import styled from "styled-components";

export const NoteButtonsContainer = styled.div`
    --border-width:.2em;
    border: var(--border-width) solid rgba(255,255,255,.4);
    border-radius:10px;
    overflow:hidden;
    display:grid;
    grid-template-areas:"b1 b2 b3 b4";
    grid-template-columns:repeat(4,1fr);
    justify-self:stretch;
`;

export const NoteButton = styled.button`
    font-size:3em;
    box-sizing: content-box;
    width: 5ch;
    cursor:pointer;
    border: calc(var(--border-width) / 2) solid rgba(255,255,255,.4);
    padding:.6em;
    color:var(--color-white);
    text-align:center;
`

