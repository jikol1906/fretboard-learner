    import * as React from "react";
import { GridAreaProps } from "styled-system";
import { Text } from "../../Styles/Typography";
    import { CheckboxLabel, StyledSlider } from "./CheckboxStyles";

    interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const Checkbox: React.FunctionComponent<ICheckboxProps & GridAreaProps> = ({style,gridArea,...rest}) => {
      
      return (
        <CheckboxLabel style={style}>
          <input type="checkbox" {...rest}/>
          <StyledSlider/>
        </CheckboxLabel>
      );
    };

    export default Checkbox;



