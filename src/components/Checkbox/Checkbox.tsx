    import * as React from "react";
import { GridAreaProps } from "styled-system";
    import { CheckboxLabel, StyledSlider } from "./CheckboxStyles";

    interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement>  {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const Checkbox: 
      React.FunctionComponent<ICheckboxProps & 
      GridAreaProps & 
      React.InputHTMLAttributes<HTMLInputElement> 
      > = ({style,checked,gridArea,...rest}) => {
      
      return (
        <CheckboxLabel style={style}>
          <input checked={checked} type="checkbox" {...rest}/>
          <StyledSlider/>
        </CheckboxLabel>
      );
    };

    export default Checkbox;



