import styled from "styled-components";


export const StyledSlider = styled.span`
  display: block;
  border-radius: 100vh;
  height: var(--slider-container-height);
  width: var(--slider-container-width);
  background-color: #ccc;
  display: flex;
  align-items: center;
  padding: 0 var(--slider-padding);
  transition: 
    transform 0.3s ease-out,
    background-color 0.3s ease-out;

  &::after {
    content: "";
    border-radius: 50%;
    display: block;
    background: #fff;
    height: var(--slider-size);
    width: var(--slider-size);
    transition: inherit;
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  opacity: 0.7;
  transition: opacity .2s;
  cursor: pointer;
  --slider-container-height: 1.56em;
  --slider-container-width: calc(var(--slider-container-height) * 2);
  --slider-size: calc(var(--slider-container-height) * 0.7);
  --slider-padding: calc(var(--slider-container-height) * 0.15);

  & input {
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  & input:checked + ${StyledSlider} {
    background-color: var(--color-tertiary);
    
    &::after {
      transform: translateX(calc(var(--slider-container-width) - var(--slider-size) - var(--slider-padding) * 2));
    }
  }
`;

