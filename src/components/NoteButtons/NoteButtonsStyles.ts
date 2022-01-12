import styled from "styled-components";
import { Grid } from "../../Styles/BaseStyles";

export const NoteButtonsContainer = styled(Grid)`
    border: 0.25em solid rgba(255,255,255,.4);
    border-radius:999px;
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


