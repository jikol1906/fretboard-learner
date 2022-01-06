import styled from "styled-components";

interface TextProps {
    fontSize:string
}

export const Text = styled.p<TextProps>`
    font-size:${({fontSize}) => fontSize};
    font-weight:bold;
    color:var(--color-white);
`