import styled from "styled-components";

export const NoteButtonsContainer = styled.div`
    
    border: 4px solid rgba(255,255,255,.4);
    border-radius:999px;
    overflow:hidden;
    display:grid;
    grid-template-areas:"b1 b2 b3 b4";
    grid-template-columns:repeat(4,1fr);
    justify-self:stretch;
`;

interface NoteButtonProps {
    wrong:boolean;
}

export const NoteButton = styled.button<NoteButtonProps>`
    font-size:3em;
    box-sizing: content-box;
    width: 5.4ch;
    cursor:pointer;
    padding:.6em;
    color:var(--color-white);
    text-align:center;
    ${props => props.wrong && 'color : tomato;'}
    &:not(:last-child) {
        border-right: 4px solid rgba(255,255,255,.4);
    }
`

