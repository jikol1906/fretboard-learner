import styled from "styled-components";

export const NoteButtonsContainer = styled.div`
    
    border: 0.25em solid rgba(255,255,255,.4);
    border-radius:999px;
    display:grid;
    grid-template-areas:"b1 b2 b3 b4";
    grid-template-columns:repeat(4,1fr);
    justify-self:stretch;
`;

interface NoteButtonProps {
    wrong:boolean;
}

export const NoteButton = styled.button<NoteButtonProps>`
    position: relative;
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
        border-right: 0.1em solid rgba(255,255,255,.4);
    }

    &::after {
        position: absolute;
        box-sizing: border-box;
        color:var(--color-white);
        border-radius: 100px;
        left:50%;
        top:120%;
        transform: translateX(-50%);
        font-size: .5em;
    }
    &:nth-child(1)::after {content: "1";}
    &:nth-child(2)::after {content: "2";}
    &:nth-child(3)::after {content: "3";}
    &:nth-child(4)::after {content: "4";}
`

