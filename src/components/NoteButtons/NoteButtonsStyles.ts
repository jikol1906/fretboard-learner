import styled from "styled-components";

export const NoteButtonsContainer = styled.div`
    
    border: 0.25em solid rgba(255,255,255,.4);
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
    font-size:2.5em;
    font-weight: 400;
    box-sizing: content-box;
    width: 5ch;
    cursor:pointer;
    padding:.8em;
    color:var(--color-white);
    text-align:center;
    ${props => props.wrong && 'color : tomato;'}
    &:not(:last-child) {
        border-right: 0.083em solid rgba(255,255,255,.4);
    }
`

