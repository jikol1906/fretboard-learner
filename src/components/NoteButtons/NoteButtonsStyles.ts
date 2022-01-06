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
    white-space: nowrap;
    font-size:3em;
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

    &:disabled {
        opacity: .5;
        cursor: not-allowed;
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

export const NoteWithSymbol = styled.span`
    position: relative;
    display: inline-block;
    text-align: left;
    width: 2.4ch;
`

export const Symbol = styled.span`
  position: absolute;
    font-size: 0.6em;
    top: 40.2%;
    left: 43%;
`

