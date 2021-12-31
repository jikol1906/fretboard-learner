import * as React from 'react';
import styled from 'styled-components';

interface IStartButtonProps {
}

const StyledStartButton = styled.button`
    font-size: 2em;
    letter-spacing: 4px;
    padding: 1.1em 3em;
    cursor: pointer;
    text-transform: uppercase;
    color: white;
    background-color: #00a0ff;
    border-radius: 0.625em;
    -webkit-box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    &:hover {
        filter: brightness(1.05);
    }
`

const StartButton: React.FunctionComponent<IStartButtonProps> = (props) => {
    return <StyledStartButton>{props.children}</StyledStartButton>;
};

export default StartButton;
