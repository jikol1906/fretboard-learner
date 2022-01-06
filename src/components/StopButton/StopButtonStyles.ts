import styled from "styled-components";

export const StopButton = styled.button`
    
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    right: 0;
    background-color: transparent;
    padding:.8em;
    font-size: 4rem;
    opacity: .5;
    cursor: pointer;
    

    &:hover {
        color: white;
    }
    
    &:before,
    &:after {
        content:'';
        background-color: var(--color-white);
        position: absolute;
        top:50%;
        left:50%;
        display: block;
        height:4px;
        width:40px;

    }

    &:before {
       transform: translate(-50%,-50%) rotate(-45deg);
    }
    &:after {
       transform: translate(-50%,-50%) rotate(45deg);
    }
`