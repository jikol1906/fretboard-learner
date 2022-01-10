    import * as React from "react";
import { Text } from "../../Styles/Typography";
    import { CheckboxLabel, StyledSlider } from "./CheckboxStyles";

    interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const Checkbox: React.FunctionComponent<ICheckboxProps> = ({...rest}) => {
      
      return (
        <CheckboxLabel>
          <input type="checkbox" {...rest}/>
          <StyledSlider/>
        </CheckboxLabel>
      );
    };

    export default Checkbox;



