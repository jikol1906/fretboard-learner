import React from "react";
import { Button as RebassButton } from "rebass/styled-components";
import { ButtonProps } from "rebass";


const Button: React.FunctionComponent<ButtonProps> = (props) => {
  
  return (
    <RebassButton 
    p={[".7em 2em","1.1em 3em"]} 
    bg="tertiary"
    color="white"
    sx={{
      borderRadius: '0.625em',
      transition: 'transform .2s ease',
      '&:hover,&:focus': {
        filter: 'brightness(1.05)',
        transform: 'scale(1.05) translateY(-4px)'
      }
    }}
    {...props} 
      >
      {props.children}
    </RebassButton>
  );
};

export default Button;
