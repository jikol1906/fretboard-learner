import React from "react";
import { Button as RebassButton } from "rebass/styled-components";
import { ButtonProps } from "rebass";


const Button: React.FunctionComponent<ButtonProps> = (props) => {
  
  return (
    <RebassButton 
    p="1.1em 3em" 
    bg="tertiary"
    color="white"
    fontSize="1em"
    sx={{
      borderRadius: '0.625em',
      '&:hover': {
        filter: 'brightness(1.05)'
      }
    }}
    {...props} 
      >
      {props.children}
    </RebassButton>
  );
};

export default Button;
