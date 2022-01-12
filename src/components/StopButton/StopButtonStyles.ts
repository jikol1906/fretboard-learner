import { Button } from "rebass/styled-components";
import styled from "styled-components";
import { PositionProps,position } from "styled-system";

export const StopButton = styled(Button)<PositionProps>`
    ${position}
    font-size: 4rem;
    opacity: .5;
    cursor: pointer;
    

    &:hover {
        color: white;
        opacity: 1;
    }
    
    &:before,
    &:after {
        content:'';
        background-color: var(--color-white);
        position: absolute;
        top:50%;
        left:50%;
        display: block;
        height:4%;
        width:40%;

    }

    &:before {
       transform: translate(-50%,-50%) rotate(-45deg);
    }
    &:after {
       transform: translate(-50%,-50%) rotate(45deg);
    }
`